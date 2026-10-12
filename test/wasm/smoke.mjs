// Loads every dist/ variant the way consumers do and checks what the C unit tests cannot:
// the export contract, sf2/sf3 loading, rendering, JS callbacks and the MIDI player.
import { readFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..')
const pkg = JSON.parse(readFileSync(path.join(root, 'package.json'), 'utf8'))
const base = path.basename(pkg.main, '.js')
const dist = path.join(root, 'dist')
const sf2 = readFileSync(path.join(root, 'sf2', 'VintageDreamsWaves-v2.sf2'))
const sf3 = readFileSync(path.join(root, 'sf2', 'VintageDreamsWaves-v2.sf3'))
// fixtures/make-level-fixture.py: program 0 peaks at 0.25, program 1 at 1.0 (1.5 inside the sf3's Ogg stream).
const levelSf2 = readFileSync(path.join(root, 'test', 'wasm', 'fixtures', 'level.sf2'))
const levelSf3 = readFileSync(path.join(root, 'test', 'wasm', 'fixtures', 'level.sf3'))
const exportsTxt = readFileSync(path.join(root, 'emscripten', 'exports.txt'), 'utf8')
const expectedExports = [...exportsTxt.matchAll(/"(_[A-Za-z0-9_]+)"/g)].map(m => m[1])
const runtimeMethods = ['ccall', 'cwrap', 'FS', 'addFunction', 'removeFunction', 'MEMFS',
  'lengthBytesUTF8', 'UTF8ArrayToString', 'UTF8ToString', 'stringToUTF8Array', 'stringToUTF8',
  'HEAP32', 'HEAPU8', 'HEAPF32']

// Release variants only: the debug ones are built with ASSERTIONS=1 and abort under node
// ("node environment detected but not enabled at build time").
const suffixes = ['', '-all-in-one', '-sf3', '-sf3-all-in-one']

const FRAMES = 4096
const FLUID_ERR = 1
const FLUID_PLAYER_DONE = 3
const CHANNEL_TYPE_DRUM = 1
const CHANNEL_TYPE_MELODIC = 0

function assert (cond, msg) {
  if (!cond) throw new Error(msg)
}

function cstr (M, s) {
  const n = M.lengthBytesUTF8(s) + 1
  const ptr = M._malloc(n)
  M.stringToUTF8(s, ptr, n)
  return ptr
}

function energy (M, synth, frames = FRAMES) {
  const l = M._malloc(frames * 4)
  const r = M._malloc(frames * 4)
  M._fluid_synth_write_float(synth, frames, l, 0, 1, r, 0, 1)
  let e = 0
  for (const v of new Float32Array(M.HEAPF32.buffer, l, frames)) e += v * v
  M._free(l)
  M._free(r)
  return e
}

// Reverb and chorus off, so all_sounds_off leaves true silence instead of an effect tail.
function newSynth (M) {
  const settings = M._new_fluid_settings()
  for (const key of ['synth.reverb.active', 'synth.chorus.active']) {
    const k = cstr(M, key)
    M._fluid_settings_setint(settings, k, 0)
    M._free(k)
  }
  return { settings, synth: M._new_fluid_synth(settings) }
}

function deleteSynth (M, { settings, synth }) {
  M._delete_fluid_synth(synth)
  M._delete_fluid_settings(settings)
}

function loadSoundfont (M, synth, name, bytes) {
  M.FS.writeFile('/' + name, bytes)
  const p = cstr(M, '/' + name)
  const id = M._fluid_synth_sfload(synth, p, 1)
  M._free(p)
  return id
}

// Format 0, one track: note on C4, note off 96 ticks later, end of track.
function smf () {
  const track = [0x00, 0x90, 0x3c, 0x64, 0x60, 0x80, 0x3c, 0x40, 0x00, 0xff, 0x2f, 0x00]
  return Uint8Array.from([
    0x4d, 0x54, 0x68, 0x64, 0, 0, 0, 6, 0, 0, 0, 1, 0, 96,
    0x4d, 0x54, 0x72, 0x6b, 0, 0, 0, track.length, ...track,
  ])
}

// Format 1, two drum tracks on file channel 9: track 0 sets CC7 100 and hits at
// tick 0, track 1 sets CC7 20 and hits the same key at tick 96. The energy of
// the two halves (before/after tick 72) is what the checks below compare.
function drumSmf () {
  const track = (volume, noteAt) => Uint8Array.from([
    0, 0xb9, 7, volume,          // CC7 at tick 0
    noteAt, 0x99, 36, 100,       // note on
    24, 0x89, 36, 0,             // note off
    0, 0xff, 0x2f, 0x00,         // end of track
  ])
  const chunk = (events) => [0x4d, 0x54, 0x72, 0x6b, 0, 0, 0, events.length, ...events]
  return Uint8Array.from([
    0x4d, 0x54, 0x68, 0x64, 0, 0, 0, 6, 0, 1, 0, 2, 0, 96,
    ...chunk(track(100, 0)), ...chunk(track(20, 96)),
  ])
}

// Plays the drum SMF to completion, splitting the rendered energy into two
// windows: blocks starting before tick 72 (first hit) and the rest (second hit).
function playDrums (M, s, bytes, { map = null, type = false } = {}) {
  const player = M._new_fluid_player(s.synth)
  if (map) {
    const ptr = M._malloc(map.byteLength)
    M.HEAP32.set(map, ptr / 4)
    const code = M._fluid_player_set_channel_map(player, ptr, 2)
    M._free(ptr)
    assert(code === 0, `fluid_player_set_channel_map failed: ${code}`)
  }
  if (type) {
    M._fluid_synth_set_channel_type(s.synth, 9, CHANNEL_TYPE_DRUM)
    M._fluid_synth_set_channel_type(s.synth, 19, CHANNEL_TYPE_DRUM)
  }
  // the reset every consumer issues between load and play: the types above must survive it
  M._fluid_synth_system_reset(s.synth)
  const p = M._malloc(bytes.length)
  M.HEAPU8.set(bytes, p)
  assert(M._fluid_player_add_mem(player, p, bytes.length) === 0, 'fluid_player_add_mem failed')
  M._free(p)
  assert(M._fluid_player_play(player) === 0, 'fluid_player_play failed')
  const windows = [0, 0]
  let blocks = 0
  while (M._fluid_player_get_status(player) !== FLUID_PLAYER_DONE && blocks < 200) {
    windows[M._fluid_player_get_current_tick(player) < 72 ? 0 : 1] += energy(M, s.synth)
    blocks += 1
  }
  assert(M._fluid_player_get_status(player) === FLUID_PLAYER_DONE, `player not done after ${blocks} blocks`)
  M._delete_fluid_player(player)
  return windows
}

const checks = {
  exports (M) {
    const missing = expectedExports.filter(k => typeof M[k] !== 'function')
    assert(missing.length === 0, `missing exports: ${missing.slice(0, 5).join(', ')}${missing.length > 5 ? '…' : ''}`)
    const gone = runtimeMethods.filter(k => !(k in M))
    assert(gone.length === 0, `missing runtime methods: ${gone.join(', ')}`)
    return `${expectedExports.length} exports`
  },

  sf2 (M) {
    const s = newSynth(M)
    const id = loadSoundfont(M, s.synth, 'test.sf2', sf2)
    assert(id >= 0, `sfload(.sf2) returned ${id}`)
    M._fluid_synth_program_select(s.synth, 0, id, 0, 0)
    M._fluid_synth_noteon(s.synth, 0, 60, 100)
    const loud = energy(M, s.synth)
    assert(loud > 1e-3, `no sound after noteon: energy ${loud}`)
    M._fluid_synth_noteoff(s.synth, 0, 60)
    M._fluid_synth_all_sounds_off(s.synth, -1)
    const quiet = energy(M, s.synth)
    assert(quiet < 1e-9, `sound after all_sounds_off: energy ${quiet}`)
    deleteSynth(M, s)
    return `energy ${loud.toExponential(1)} → ${quiet.toExponential(1)}`
  },

  sf3 (M, variant) {
    const s = newSynth(M)
    const id = loadSoundfont(M, s.synth, 'test.sf3', sf3)
    let result
    if (variant.sf3) {
      assert(id >= 0, `sfload(.sf3) returned ${id} on an sf3 build`)
      M._fluid_synth_program_select(s.synth, 0, id, 0, 0)
      M._fluid_synth_noteon(s.synth, 0, 60, 100)
      const loud = energy(M, s.synth)
      assert(loud > 1e-3, `no sound from .sf3: energy ${loud}`)
      result = `loaded, energy ${loud.toExponential(1)}`
    } else {
      assert(id === -1, `sfload(.sf3) returned ${id} on a build without libsndfile`)
      result = 'rejected as expected'
    }
    deleteSynth(M, s)
    return result
  },

  // An Ogg sample must play as loud as its PCM twin: neither lifted to full scale nor clipped.
  level (M, variant) {
    if (!variant.sf3) return 'n/a without sf3'
    const frames = 22050
    const rms = (name, bytes, program) => {
      const s = newSynth(M)
      const id = loadSoundfont(M, s.synth, name, bytes)
      assert(M._fluid_synth_program_select(s.synth, 0, id, 0, program) === 0, `${name}: no program ${program}`)
      M._fluid_synth_noteon(s.synth, 0, 69, 100)
      const value = Math.sqrt(energy(M, s.synth, frames) / frames)
      deleteSynth(M, s)
      return value
    }
    const deltas = [0, 1].map(program => {
      const pcm = rms('level.sf2', levelSf2, program)
      assert(pcm > 1e-3, `level.sf2 program ${program} is silent`)
      return 20 * Math.log10(rms('level.sf3', levelSf3, program) / pcm)
    })
    deltas.forEach((delta, program) => assert(Math.abs(delta) < 0.5, `program ${program}: sf3 is ${delta.toFixed(2)} dB off its sf2 twin`))
    return `quiet ${deltas[0].toFixed(2)} dB, loud ${deltas[1].toFixed(2)} dB`
  },

  callback (M) {
    let calls = 0
    const fn = M.addFunction((level, msg) => { calls += 1 }, 'viii')
    const previous = M._fluid_set_log_function(FLUID_ERR, fn, 0)
    const s = newSynth(M)
    const p = cstr(M, '/does-not-exist.sf2')
    M._fluid_synth_sfload(s.synth, p, 1)
    M._free(p)
    deleteSynth(M, s)
    M._fluid_set_log_function(FLUID_ERR, previous, 0)
    M.removeFunction(fn)
    assert(calls > 0, 'log callback registered through addFunction was never called')
    return `${calls} call(s)`
  },

  player (M) {
    const s = newSynth(M)
    const id = loadSoundfont(M, s.synth, 'test.sf2', sf2)
    assert(id >= 0, `sfload returned ${id}`)
    const player = M._new_fluid_player(s.synth)
    const bytes = smf()
    const p = M._malloc(bytes.length)
    M.HEAPU8.set(bytes, p)
    assert(M._fluid_player_add_mem(player, p, bytes.length) === 0, 'fluid_player_add_mem failed')
    M._free(p)
    assert(M._fluid_player_play(player) === 0, 'fluid_player_play failed')
    let loud = 0
    let blocks = 0
    while (M._fluid_player_get_status(player) !== FLUID_PLAYER_DONE && blocks < 200) {
      loud = Math.max(loud, energy(M, s.synth))
      blocks += 1
    }
    const tick = M._fluid_player_get_current_tick(player)
    assert(M._fluid_player_get_status(player) === FLUID_PLAYER_DONE, `player not done after ${blocks} blocks`)
    assert(tick > 0, `player tick did not advance (${tick})`)
    assert(loud > 1e-3, `player produced no sound: energy ${loud}`)
    M._delete_fluid_player(player)
    deleteSynth(M, s)
    return `done after ${blocks} blocks, tick ${tick}`
  },

  // The three 2.6 knobs consumers may turn: each must change the rendered audio.
  knobs (M) {
    const NOTE_ON = (M, synth) => { M._fluid_synth_program_select(synth, 0, 1, 0, 0); M._fluid_synth_noteon(synth, 0, 60, 127) }
    const render = (settingsFn, synthFn) => {
      const settings = M._new_fluid_settings()
      settingsFn(settings)
      const synth = M._new_fluid_synth(settings)
      if (synthFn) synthFn(synth)
      loadSoundfont(M, synth, 'test.sf2', sf2)
      NOTE_ON(M, synth)
      const frames = 8192
      const l = M._malloc(frames * 4)
      const r = M._malloc(frames * 4)
      M._fluid_synth_write_float(synth, frames, l, 0, 1, r, 0, 1)
      const out = Float32Array.from(new Float32Array(M.HEAPF32.buffer, l, frames))
      M._free(l)
      M._free(r)
      M._delete_fluid_synth(synth)
      M._delete_fluid_settings(settings)
      return out
    }
    const setStr = (settings, key, value) => { const k = cstr(M, key); const v = cstr(M, value); M._fluid_settings_setstr(settings, k, v); M._free(k); M._free(v) }
    const setInt = (settings, key, value) => { const k = cstr(M, key); M._fluid_settings_setint(settings, k, value); M._free(k) }
    const setNum = (settings, key, value) => { const k = cstr(M, key); M._fluid_settings_setnum(settings, k, value); M._free(k) }
    const differs = (a, b) => a.some((v, i) => Math.abs(v - b[i]) > 1e-6)
    const peak = a => a.reduce((m, v) => Math.max(m, Math.abs(v)), 0)

    const dat = render(s => setStr(s, 'synth.reverb.engine', 'dat'))
    const fdn = render(s => setStr(s, 'synth.reverb.engine', 'fdn'))
    assert(differs(dat, fdn), 'synth.reverb.engine=fdn renders the same audio as dat')

    const loud = s => { setNum(s, 'synth.gain', 10) }
    const unlimited = render(loud)
    const limited = render(s => { loud(s); setInt(s, 'synth.limiter.active', 1) })
    assert(peak(unlimited) > 1, `gain 10 without a limiter should clip: peak ${peak(unlimited)}`)
    assert(peak(limited) <= 1.0001 && peak(limited) < peak(unlimited), `limiter left peak at ${peak(limited)} (unlimited ${peak(unlimited)})`)

    const interp4 = render(() => {}, synth => M._fluid_synth_set_interp_method(synth, -1, 4))
    const interp5 = render(() => {}, synth => M._fluid_synth_set_interp_method(synth, -1, 5))
    assert(differs(interp4, interp5), 'FLUID_INTERP_MID renders the same audio as 4th order')
    return `reverb fdn≠dat, limiter peak ${peak(unlimited).toFixed(2)}→${peak(limited).toFixed(2)}, interp 5≠4`
  },

  // Two drum tracks on file channel 9 with CC7 100 and 20: the channel map routes
  // them to channels 9 and 19, both typed as drums before a system reset. The
  // sticky type keeps them drums (bank 128), so each drummer keeps its own volume.
  drums (M) {
    const drumsSf2 = readFileSync(path.join(root, 'test', 'wasm', 'fixtures', 'drums.sf2'))
    const bytes = drumSmf()
    const bankOf = (synth, chan) => {
      const ints = M._malloc(12)
      M._fluid_synth_get_program(synth, chan, ints, ints + 4, ints + 8)
      const bank = M.HEAP32[(ints + 4) / 4]
      M._free(ints)
      return bank
    }

    // routed and typed: different CC7 per channel, drum kit on both channels
    const routed = newSynth(M)
    loadSoundfont(M, routed.synth, 'drums.sf2', drumsSf2)
    const map = new Int32Array(32).fill(-1)
    map[0 * 16 + 9] = 9
    map[1 * 16 + 9] = 19
    const routedEnergy = playDrums(M, routed, bytes, { map, type: true })
    assert(routedEnergy[0] > 1e-3 && routedEnergy[1] > 1e-3, `routed drums silent: ${routedEnergy}`)
    assert(routedEnergy[0] > 4 * routedEnergy[1], `routed drum volumes did not separate: ${routedEnergy}`)
    assert(bankOf(routed.synth, 9) === 128, `channel 9 not on the drum bank: ${bankOf(routed.synth, 9)}`)
    assert(bankOf(routed.synth, 19) === 128, `channel 19 not on the drum bank: ${bankOf(routed.synth, 19)}`)
    deleteSynth(M, routed)

    // negative control, same SMF: no map, no typing - both parts land on channel 9,
    // one CC7 wins and both hits render at the same volume
    const shared = newSynth(M)
    loadSoundfont(M, shared.synth, 'drums.sf2', drumsSf2)
    const sharedEnergy = playDrums(M, shared, bytes)
    deleteSynth(M, shared)
    assert(sharedEnergy[0] > 1e-3 && sharedEnergy[1] > 1e-3, `shared drums silent: ${sharedEnergy}`)
    assert(Math.abs(sharedEnergy[0] - sharedEnergy[1]) < 0.25 * Math.max(...sharedEnergy),
      `shared drum volumes differ: ${sharedEnergy}`)
    return `routed ${routedEnergy.map(v => v.toExponential(1))}, shared ${sharedEnergy.map(v => v.toExponential(1))}`
  },

  // #17's proof as a smoke check: with an interleaved channel map (chan = k*N + T)
  // the stock chan % audio_groups routing puts every track in its own dry group,
  // and the groups plus fx sum to a plain stereo render of the same notes. The
  // reserved T*10 layout under the same routing is the negative control: it must
  // scatter, so the matrix above cannot pass vacuously.
  interleave (M) {
    const N = 3
    const FR = 4096
    const MAX_BLOCKS = 400
    const TICKS_PER_QUARTER = 96
    // note off at 2 quarters leaves the rest of the 8-quarter window for the
    // release tail, so it cannot leak into the next window's energy budget
    const WINDOW_QUARTERS = 8
    const windowTicks = WINDOW_QUARTERS * TICKS_PER_QUARTER

    // Format 1, three tracks: guitar (9 melodic channels, program 25), drums
    // (channel 9, typed below), bass (3 melodic channels, program 33). Every
    // channel sends CC91 127 so the fx path carries signal too. Track t sounds
    // in window t; the windows are what the solo matrix measures.
    const interleaveSmf = () => {
      const vlq = n => n < 128 ? [n] : [0x80 | (n >> 7), n & 0x7f]
      const defs = [
        { channels: [0, 1, 2, 3, 4, 5, 6, 7, 8], program: 25, note: 60 },
        { channels: [9], program: null, note: 36 },
        { channels: [0, 1, 2], program: 33, note: 43 },
      ]
      const track = (def, window) => {
        const start = window * windowTicks
        const events = []
        for (const ch of def.channels) {
          if (def.program !== null) events.push([start, 0xc0 | ch, def.program])
          events.push([start, 0xb0 | ch, 91, 127])
          // one note per channel: the routing under test is chosen by channel
          events.push([start + TICKS_PER_QUARTER / 2, 0x90 | ch, def.note, 100])
          events.push([start + 2 * TICKS_PER_QUARTER, 0x80 | ch, def.note, 0])
        }
        events.sort((a, b) => a[0] - b[0])
        let prev = 0
        const bytes = []
        for (const [abs, ...ev] of events) {
          bytes.push(...vlq(abs - prev), ...ev)
          prev = abs
        }
        bytes.push(0, 0xff, 0x2f, 0x00)
        return [0x4d, 0x54, 0x72, 0x6b, 0, 0, 0, bytes.length, ...bytes]
      }
      return Uint8Array.from([
        0x4d, 0x54, 0x68, 0x64, 0, 0, 0, 6, 0, 1, 0, 3, 0, TICKS_PER_QUARTER,
        ...defs.flatMap((def, window) => track(def, window)),
      ])
    }

    const channelMap = target => {
      const map = new Int32Array(3 * 16).fill(-1)
      for (let t = 0; t < 3; t++) for (let ch = 0; ch < 16; ch++) map[t * 16 + ch] = target(t, ch)
      return map
    }
    const interleaved = channelMap((t, ch) => ch * N + t)
    const reserved = channelMap((t, ch) => t * 10 + ch)

    const render = (map, drumChannel, groups) => {
      const settings = M._new_fluid_settings()
      for (const [key, value] of [['synth.midi-channels', 256], ['synth.audio-channels', groups], ['synth.audio-groups', groups], ['synth.effects-groups', groups]]) {
        const k = cstr(M, key)
        M._fluid_settings_setint(settings, k, value)
        M._free(k)
      }
      const synth = M._new_fluid_synth(settings)
      loadSoundfont(M, synth, 'interleave-drums.sf2', readFileSync(path.join(root, 'test', 'wasm', 'fixtures', 'drums.sf2')))
      loadSoundfont(M, synth, 'interleave.sf2', sf2)
      const player = M._new_fluid_player(synth)
      const mapPtr = M._malloc(map.byteLength)
      M.HEAP32.set(map, mapPtr / 4)
      assert(M._fluid_player_set_channel_map(player, mapPtr, 3) === 0, 'fluid_player_set_channel_map failed')
      M._free(mapPtr)
      // stock typing follows the channel number (drums on 9), so every mapped
      // target needs its type set explicitly; the types survive the reset below
      for (let t = 0; t < 3; t++) {
        for (let ch = 0; ch < 16; ch++) {
          M._fluid_synth_set_channel_type(synth, map[t * 16 + ch], ch === 9 ? CHANNEL_TYPE_DRUM : CHANNEL_TYPE_MELODIC)
        }
      }
      M._fluid_synth_system_reset(synth)
      const bytes = interleaveSmf()
      const p = M._malloc(bytes.length)
      M.HEAPU8.set(bytes, p)
      assert(M._fluid_player_add_mem(player, p, bytes.length) === 0, 'fluid_player_add_mem failed')
      M._free(p)
      assert(M._fluid_player_play(player) === 0, 'fluid_player_play failed')

      const nout = 2 * groups
      const nfx = 4 * groups
      // process() takes arrays of buffer pointers, not flat storage
      const out = M._malloc(nout * FR * 4)
      const fx = M._malloc(nfx * FR * 4)
      const outPtrs = M._malloc(nout * 4)
      const fxPtrs = M._malloc(nfx * 4)
      for (let i = 0; i < nout; i++) M.HEAP32[outPtrs / 4 + i] = out + i * FR * 4
      for (let i = 0; i < nfx; i++) M.HEAP32[fxPtrs / 4 + i] = fx + i * FR * 4
      const dry = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
      let wet = 0
      const sumL = new Float64Array(MAX_BLOCKS * FR)
      const sumR = new Float64Array(MAX_BLOCKS * FR)
      let blocks = 0
      while (M._fluid_player_get_status(player) !== FLUID_PLAYER_DONE && blocks < MAX_BLOCKS) {
        M.HEAPF32.fill(0, out / 4, out / 4 + nout * FR)
        M.HEAPF32.fill(0, fx / 4, fx / 4 + nfx * FR)
        M._fluid_synth_process(synth, FR, nfx, fxPtrs, nout, outPtrs)
        const window = M._fluid_player_get_current_tick(player) < 2 * windowTicks
          ? (M._fluid_player_get_current_tick(player) < windowTicks ? 0 : 1) : 2
        const outF = new Float32Array(M.HEAPF32.buffer, out, nout * FR)
        const fxF = new Float32Array(M.HEAPF32.buffer, fx, nfx * FR)
        for (let i = 0; i < nfx * FR; i++) wet += fxF[i] * fxF[i]
        for (let g = 0; g < groups; g++) {
          let e = 0
          for (let i = 0; i < FR; i++) {
            const l = outF[(g * 2) * FR + i]
            const r = outF[(g * 2 + 1) * FR + i]
            e += l * l + r * r
            sumL[blocks * FR + i] += l + fxF[(g * 4) * FR + i] + fxF[(g * 4 + 2) * FR + i]
            sumR[blocks * FR + i] += r + fxF[(g * 4 + 1) * FR + i] + fxF[(g * 4 + 3) * FR + i]
          }
          dry[window][g] += e
        }
        blocks += 1
      }
      assert(M._fluid_player_get_status(player) === FLUID_PLAYER_DONE, `player not done after ${blocks} blocks`)
      const bank = (() => {
        const ints = M._malloc(12)
        M._fluid_synth_get_program(synth, drumChannel, ints, ints + 4, ints + 8)
        const b = M.HEAP32[(ints + 4) / 4]
        M._free(ints)
        return b
      })()
      M._delete_fluid_player(player)
      M._free(out)
      M._free(fx)
      M._free(outPtrs)
      M._free(fxPtrs)
      M._delete_fluid_synth(synth)
      M._delete_fluid_settings(settings)
      return { dry, wet, sumL, sumR, blocks, bank }
    }

    const routed = render(interleaved, 9 * N + 1, N)
    assert(routed.wet > 1e-2, `fx buffers carry no signal (${routed.wet.toExponential(1)}); the parity check below would be vacuous`)

    // solo-track matrix: during window w only group w carries energy
    const shares = routed.dry.map((groups, w) => {
      const total = groups.reduce((a, b) => a + b, 0)
      return { own: groups[w], total }
    })
    shares.forEach(({ own, total }, w) => {
      assert(own > 1e-3, `window ${w}: own group silent (${own})`)
      assert(total - own < 1e-4 * own, `window ${w}: foreign groups carry ${(total - own).toExponential(1)} vs own ${own.toExponential(1)}`)
    })
    assert(routed.bank === 128, `drum channel not on the drum bank: ${routed.bank}`)

    // sum of groups + fx equals a plain stereo render of the same notes
    const stereo = render(interleaved, 9 * N + 1, 1)
    assert(stereo.blocks === routed.blocks, `stereo render did ${stereo.blocks} blocks, groups render ${routed.blocks}`)
    let maxDiff = 0
    let rms = 0
    for (let i = 0; i < stereo.blocks * FR; i++) {
      maxDiff = Math.max(maxDiff, Math.abs(routed.sumL[i] - stereo.sumL[i]), Math.abs(routed.sumR[i] - stereo.sumR[i]))
      rms += stereo.sumL[i] * stereo.sumL[i] + stereo.sumR[i] * stereo.sumR[i]
    }
    rms = Math.sqrt(rms / (stereo.blocks * FR))
    assert(rms > 1e-2, `render too quiet for a parity check: rms ${rms.toExponential(1)}`)
    assert(maxDiff < 1e-6, `groups+fx differs from stereo by ${maxDiff.toExponential(1)} (rms ${rms.toExponential(1)})`)

    // negative control: the reserved T*10 layout scatters under the same routing
    const scattered = render(reserved, 1 * 10 + 9, N)
    const guitar = scattered.dry[0]
    const guitarTotal = guitar.reduce((a, b) => a + b, 0)
    assert(guitarTotal > 1e-3, `negative control silent: ${guitar}`)
    assert(Math.max(...guitar) < 0.9 * guitarTotal, `negative control did not scatter: ${guitar.map(v => v.toExponential(1))}`)

    return `bleed < 1e-4, parity ${maxDiff.toExponential(1)} @ rms ${rms.toExponential(1)}, T*10 scatters ${(100 * Math.max(...guitar) / guitarTotal).toFixed(0)}%`
  },

  leak (M) {
    for (let i = 0; i < 10; i++) deleteSynth(M, newSynth(M))
    const before = M.HEAPU8.byteLength
    for (let i = 0; i < 50; i++) deleteSynth(M, newSynth(M))
    const after = M.HEAPU8.byteLength
    assert(after === before, `heap grew from ${before} to ${after} over 50 synth create/delete cycles`)
    return `heap stable at ${before}`
  },
}

async function instantiate (variant) {
  const { default: factory } = await import(path.join(dist, `${base}${variant.suffix}.js`))
  const options = variant.wasm ? { wasmBinary: readFileSync(path.join(dist, variant.wasm)) } : {}
  return factory(options)
}

let failures = 0
for (const suffix of suffixes) {
  const variant = {
    suffix,
    sf3: suffix.includes('sf3'),
    wasm: suffix.includes('all-in-one') ? null : `${base}${suffix}.wasm`,
  }
  const label = `${base}${suffix}.js`
  let M
  try {
    const t = Date.now()
    M = await instantiate(variant)
    console.log(`${label}: instantiated in ${Date.now() - t} ms`)
  } catch (e) {
    failures += 1
    console.log(`${label}: FAIL instantiate — ${e.message}`)
    continue
  }
  for (const [name, check] of Object.entries(checks)) {
    try {
      console.log(`  ok   ${name}: ${check(M, variant)}`)
    } catch (e) {
      failures += 1
      console.log(`  FAIL ${name}: ${e.message}`)
    }
  }
}

console.log(failures === 0 ? 'all wasm smoke checks passed' : `${failures} wasm smoke check(s) failed`)
process.exit(failures === 0 ? 0 : 1)
