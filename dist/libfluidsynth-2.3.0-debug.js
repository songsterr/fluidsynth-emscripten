
var FluidsynthModule = (() => {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  
  return (
function(FluidsynthModule) {
  FluidsynthModule = FluidsynthModule || {};

var Module = typeof FluidsynthModule != "undefined" ? FluidsynthModule : {};

var readyPromiseResolve, readyPromiseReject;

Module["ready"] = new Promise(function(resolve, reject) {
 readyPromiseResolve = resolve;
 readyPromiseReject = reject;
});

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_malloc")) {
 Object.defineProperty(Module["ready"], "_malloc", {
  configurable: true,
  get: function() {
   abort("You are getting _malloc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_malloc", {
  configurable: true,
  set: function() {
   abort("You are setting _malloc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_free")) {
 Object.defineProperty(Module["ready"], "_free", {
  configurable: true,
  get: function() {
   abort("You are getting _free on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_free", {
  configurable: true,
  set: function() {
   abort("You are setting _free on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_voice_add_mod")) {
 Object.defineProperty(Module["ready"], "_fluid_voice_add_mod", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_voice_add_mod on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_voice_add_mod", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_voice_add_mod on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_voice_gen_get")) {
 Object.defineProperty(Module["ready"], "_fluid_voice_gen_get", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_voice_gen_get on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_voice_gen_get", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_voice_gen_get on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_voice_gen_set")) {
 Object.defineProperty(Module["ready"], "_fluid_voice_gen_set", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_voice_gen_set on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_voice_gen_set", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_voice_gen_set on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_voice_gen_incr")) {
 Object.defineProperty(Module["ready"], "_fluid_voice_gen_incr", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_voice_gen_incr on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_voice_gen_incr", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_voice_gen_incr on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_voice_get_id")) {
 Object.defineProperty(Module["ready"], "_fluid_voice_get_id", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_voice_get_id on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_voice_get_id", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_voice_get_id on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_voice_get_channel")) {
 Object.defineProperty(Module["ready"], "_fluid_voice_get_channel", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_voice_get_channel on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_voice_get_channel", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_voice_get_channel on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_voice_get_key")) {
 Object.defineProperty(Module["ready"], "_fluid_voice_get_key", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_voice_get_key on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_voice_get_key", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_voice_get_key on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_voice_get_actual_key")) {
 Object.defineProperty(Module["ready"], "_fluid_voice_get_actual_key", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_voice_get_actual_key on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_voice_get_actual_key", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_voice_get_actual_key on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_voice_get_velocity")) {
 Object.defineProperty(Module["ready"], "_fluid_voice_get_velocity", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_voice_get_velocity on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_voice_get_velocity", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_voice_get_velocity on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_voice_get_actual_velocity")) {
 Object.defineProperty(Module["ready"], "_fluid_voice_get_actual_velocity", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_voice_get_actual_velocity on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_voice_get_actual_velocity", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_voice_get_actual_velocity on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_voice_is_playing")) {
 Object.defineProperty(Module["ready"], "_fluid_voice_is_playing", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_voice_is_playing on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_voice_is_playing", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_voice_is_playing on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_voice_is_on")) {
 Object.defineProperty(Module["ready"], "_fluid_voice_is_on", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_voice_is_on on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_voice_is_on", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_voice_is_on on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_voice_is_sustained")) {
 Object.defineProperty(Module["ready"], "_fluid_voice_is_sustained", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_voice_is_sustained on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_voice_is_sustained", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_voice_is_sustained on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_voice_is_sostenuto")) {
 Object.defineProperty(Module["ready"], "_fluid_voice_is_sostenuto", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_voice_is_sostenuto on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_voice_is_sostenuto", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_voice_is_sostenuto on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_voice_optimize_sample")) {
 Object.defineProperty(Module["ready"], "_fluid_voice_optimize_sample", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_voice_optimize_sample on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_voice_optimize_sample", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_voice_optimize_sample on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_voice_update_param")) {
 Object.defineProperty(Module["ready"], "_fluid_voice_update_param", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_voice_update_param on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_voice_update_param", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_voice_update_param on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_version")) {
 Object.defineProperty(Module["ready"], "_fluid_version", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_version on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_version", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_version on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_version_str")) {
 Object.defineProperty(Module["ready"], "_fluid_version_str", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_version_str on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_version_str", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_version_str on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_new_fluid_synth")) {
 Object.defineProperty(Module["ready"], "_new_fluid_synth", {
  configurable: true,
  get: function() {
   abort("You are getting _new_fluid_synth on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_new_fluid_synth", {
  configurable: true,
  set: function() {
   abort("You are setting _new_fluid_synth on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_delete_fluid_synth")) {
 Object.defineProperty(Module["ready"], "_delete_fluid_synth", {
  configurable: true,
  get: function() {
   abort("You are getting _delete_fluid_synth on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_delete_fluid_synth", {
  configurable: true,
  set: function() {
   abort("You are setting _delete_fluid_synth on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_get_cpu_load")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_get_cpu_load", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_get_cpu_load on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_get_cpu_load", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_get_cpu_load on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_error")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_error", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_error on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_error", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_error on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_noteon")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_noteon", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_noteon on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_noteon", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_noteon on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_noteoff")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_noteoff", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_noteoff on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_noteoff", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_noteoff on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_cc")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_cc", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_cc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_cc", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_cc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_get_cc")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_get_cc", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_get_cc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_get_cc", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_get_cc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_sysex")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_sysex", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_sysex on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_sysex", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_sysex on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_pitch_bend")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_pitch_bend", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_pitch_bend on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_pitch_bend", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_pitch_bend on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_get_pitch_bend")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_get_pitch_bend", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_get_pitch_bend on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_get_pitch_bend", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_get_pitch_bend on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_pitch_wheel_sens")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_pitch_wheel_sens", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_pitch_wheel_sens on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_pitch_wheel_sens", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_pitch_wheel_sens on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_get_pitch_wheel_sens")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_get_pitch_wheel_sens", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_get_pitch_wheel_sens on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_get_pitch_wheel_sens", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_get_pitch_wheel_sens on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_program_change")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_program_change", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_program_change on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_program_change", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_program_change on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_channel_pressure")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_channel_pressure", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_channel_pressure on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_channel_pressure", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_channel_pressure on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_key_pressure")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_key_pressure", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_key_pressure on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_key_pressure", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_key_pressure on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_bank_select")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_bank_select", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_bank_select on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_bank_select", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_bank_select on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_sfont_select")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_sfont_select", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_sfont_select on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_sfont_select", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_sfont_select on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_program_select")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_program_select", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_program_select on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_program_select", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_program_select on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_program_select_by_sfont_name")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_program_select_by_sfont_name", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_program_select_by_sfont_name on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_program_select_by_sfont_name", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_program_select_by_sfont_name on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_get_program")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_get_program", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_get_program on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_get_program", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_get_program on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_unset_program")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_unset_program", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_unset_program on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_unset_program", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_unset_program on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_program_reset")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_program_reset", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_program_reset on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_program_reset", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_program_reset on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_system_reset")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_system_reset", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_system_reset on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_system_reset", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_system_reset on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_all_notes_off")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_all_notes_off", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_all_notes_off on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_all_notes_off", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_all_notes_off on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_all_sounds_off")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_all_sounds_off", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_all_sounds_off on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_all_sounds_off", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_all_sounds_off on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_set_gen")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_set_gen", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_set_gen on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_set_gen", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_set_gen on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_get_gen")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_get_gen", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_get_gen on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_get_gen", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_get_gen on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_start")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_start", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_start on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_start", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_start on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_stop")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_stop", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_stop on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_stop", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_stop on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_alloc_voice")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_alloc_voice", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_alloc_voice on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_alloc_voice", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_alloc_voice on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_start_voice")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_start_voice", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_start_voice on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_start_voice", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_start_voice on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_get_voicelist")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_get_voicelist", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_get_voicelist on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_get_voicelist", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_get_voicelist on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_sfload")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_sfload", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_sfload on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_sfload", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_sfload on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_sfreload")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_sfreload", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_sfreload on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_sfreload", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_sfreload on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_sfunload")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_sfunload", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_sfunload on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_sfunload", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_sfunload on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_add_sfont")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_add_sfont", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_add_sfont on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_add_sfont", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_add_sfont on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_remove_sfont")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_remove_sfont", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_remove_sfont on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_remove_sfont", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_remove_sfont on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_sfcount")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_sfcount", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_sfcount on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_sfcount", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_sfcount on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_get_sfont")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_get_sfont", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_get_sfont on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_get_sfont", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_get_sfont on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_get_sfont_by_id")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_get_sfont_by_id", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_get_sfont_by_id on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_get_sfont_by_id", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_get_sfont_by_id on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_get_sfont_by_name")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_get_sfont_by_name", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_get_sfont_by_name on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_get_sfont_by_name", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_get_sfont_by_name on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_set_bank_offset")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_set_bank_offset", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_set_bank_offset on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_set_bank_offset", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_set_bank_offset on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_get_bank_offset")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_get_bank_offset", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_get_bank_offset on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_get_bank_offset", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_get_bank_offset on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_set_reverb_on")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_set_reverb_on", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_set_reverb_on on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_set_reverb_on", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_set_reverb_on on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_reverb_on")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_reverb_on", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_reverb_on on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_reverb_on", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_reverb_on on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_set_reverb")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_set_reverb", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_set_reverb on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_set_reverb", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_set_reverb on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_set_reverb_roomsize")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_set_reverb_roomsize", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_set_reverb_roomsize on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_set_reverb_roomsize", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_set_reverb_roomsize on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_set_reverb_damp")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_set_reverb_damp", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_set_reverb_damp on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_set_reverb_damp", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_set_reverb_damp on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_set_reverb_width")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_set_reverb_width", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_set_reverb_width on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_set_reverb_width", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_set_reverb_width on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_set_reverb_level")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_set_reverb_level", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_set_reverb_level on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_set_reverb_level", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_set_reverb_level on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_get_reverb_roomsize")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_get_reverb_roomsize", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_get_reverb_roomsize on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_get_reverb_roomsize", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_get_reverb_roomsize on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_get_reverb_damp")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_get_reverb_damp", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_get_reverb_damp on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_get_reverb_damp", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_get_reverb_damp on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_get_reverb_level")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_get_reverb_level", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_get_reverb_level on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_get_reverb_level", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_get_reverb_level on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_get_reverb_width")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_get_reverb_width", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_get_reverb_width on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_get_reverb_width", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_get_reverb_width on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_set_reverb_group_roomsize")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_set_reverb_group_roomsize", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_set_reverb_group_roomsize on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_set_reverb_group_roomsize", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_set_reverb_group_roomsize on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_set_reverb_group_damp")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_set_reverb_group_damp", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_set_reverb_group_damp on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_set_reverb_group_damp", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_set_reverb_group_damp on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_set_reverb_group_width")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_set_reverb_group_width", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_set_reverb_group_width on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_set_reverb_group_width", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_set_reverb_group_width on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_set_reverb_group_level")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_set_reverb_group_level", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_set_reverb_group_level on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_set_reverb_group_level", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_set_reverb_group_level on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_get_reverb_group_roomsize")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_get_reverb_group_roomsize", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_get_reverb_group_roomsize on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_get_reverb_group_roomsize", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_get_reverb_group_roomsize on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_get_reverb_group_damp")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_get_reverb_group_damp", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_get_reverb_group_damp on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_get_reverb_group_damp", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_get_reverb_group_damp on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_get_reverb_group_width")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_get_reverb_group_width", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_get_reverb_group_width on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_get_reverb_group_width", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_get_reverb_group_width on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_get_reverb_group_level")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_get_reverb_group_level", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_get_reverb_group_level on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_get_reverb_group_level", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_get_reverb_group_level on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_set_chorus_on")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_set_chorus_on", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_set_chorus_on on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_set_chorus_on", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_set_chorus_on on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_chorus_on")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_chorus_on", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_chorus_on on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_chorus_on", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_chorus_on on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_set_chorus")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_set_chorus", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_set_chorus on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_set_chorus", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_set_chorus on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_set_chorus_nr")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_set_chorus_nr", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_set_chorus_nr on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_set_chorus_nr", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_set_chorus_nr on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_set_chorus_level")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_set_chorus_level", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_set_chorus_level on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_set_chorus_level", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_set_chorus_level on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_set_chorus_speed")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_set_chorus_speed", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_set_chorus_speed on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_set_chorus_speed", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_set_chorus_speed on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_set_chorus_depth")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_set_chorus_depth", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_set_chorus_depth on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_set_chorus_depth", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_set_chorus_depth on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_set_chorus_type")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_set_chorus_type", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_set_chorus_type on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_set_chorus_type", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_set_chorus_type on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_get_chorus_nr")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_get_chorus_nr", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_get_chorus_nr on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_get_chorus_nr", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_get_chorus_nr on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_get_chorus_level")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_get_chorus_level", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_get_chorus_level on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_get_chorus_level", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_get_chorus_level on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_get_chorus_speed")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_get_chorus_speed", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_get_chorus_speed on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_get_chorus_speed", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_get_chorus_speed on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_get_chorus_depth")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_get_chorus_depth", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_get_chorus_depth on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_get_chorus_depth", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_get_chorus_depth on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_get_chorus_type")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_get_chorus_type", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_get_chorus_type on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_get_chorus_type", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_get_chorus_type on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_set_chorus_group_nr")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_set_chorus_group_nr", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_set_chorus_group_nr on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_set_chorus_group_nr", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_set_chorus_group_nr on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_set_chorus_group_level")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_set_chorus_group_level", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_set_chorus_group_level on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_set_chorus_group_level", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_set_chorus_group_level on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_set_chorus_group_speed")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_set_chorus_group_speed", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_set_chorus_group_speed on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_set_chorus_group_speed", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_set_chorus_group_speed on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_set_chorus_group_depth")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_set_chorus_group_depth", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_set_chorus_group_depth on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_set_chorus_group_depth", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_set_chorus_group_depth on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_set_chorus_group_type")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_set_chorus_group_type", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_set_chorus_group_type on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_set_chorus_group_type", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_set_chorus_group_type on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_get_chorus_group_nr")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_get_chorus_group_nr", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_get_chorus_group_nr on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_get_chorus_group_nr", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_get_chorus_group_nr on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_get_chorus_group_level")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_get_chorus_group_level", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_get_chorus_group_level on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_get_chorus_group_level", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_get_chorus_group_level on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_get_chorus_group_speed")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_get_chorus_group_speed", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_get_chorus_group_speed on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_get_chorus_group_speed", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_get_chorus_group_speed on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_get_chorus_group_depth")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_get_chorus_group_depth", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_get_chorus_group_depth on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_get_chorus_group_depth", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_get_chorus_group_depth on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_get_chorus_group_type")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_get_chorus_group_type", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_get_chorus_group_type on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_get_chorus_group_type", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_get_chorus_group_type on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_count_midi_channels")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_count_midi_channels", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_count_midi_channels on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_count_midi_channels", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_count_midi_channels on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_count_audio_channels")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_count_audio_channels", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_count_audio_channels on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_count_audio_channels", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_count_audio_channels on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_count_audio_groups")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_count_audio_groups", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_count_audio_groups on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_count_audio_groups", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_count_audio_groups on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_count_effects_channels")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_count_effects_channels", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_count_effects_channels on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_count_effects_channels", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_count_effects_channels on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_count_effects_groups")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_count_effects_groups", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_count_effects_groups on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_count_effects_groups", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_count_effects_groups on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_set_sample_rate")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_set_sample_rate", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_set_sample_rate on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_set_sample_rate", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_set_sample_rate on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_set_gain")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_set_gain", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_set_gain on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_set_gain", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_set_gain on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_get_gain")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_get_gain", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_get_gain on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_get_gain", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_get_gain on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_set_polyphony")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_set_polyphony", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_set_polyphony on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_set_polyphony", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_set_polyphony on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_get_polyphony")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_get_polyphony", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_get_polyphony on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_get_polyphony", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_get_polyphony on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_get_active_voice_count")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_get_active_voice_count", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_get_active_voice_count on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_get_active_voice_count", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_get_active_voice_count on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_get_internal_bufsize")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_get_internal_bufsize", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_get_internal_bufsize on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_get_internal_bufsize", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_get_internal_bufsize on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_set_interp_method")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_set_interp_method", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_set_interp_method on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_set_interp_method", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_set_interp_method on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_add_default_mod")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_add_default_mod", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_add_default_mod on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_add_default_mod", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_add_default_mod on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_remove_default_mod")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_remove_default_mod", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_remove_default_mod on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_remove_default_mod", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_remove_default_mod on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_activate_key_tuning")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_activate_key_tuning", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_activate_key_tuning on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_activate_key_tuning", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_activate_key_tuning on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_activate_octave_tuning")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_activate_octave_tuning", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_activate_octave_tuning on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_activate_octave_tuning", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_activate_octave_tuning on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_tune_notes")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_tune_notes", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_tune_notes on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_tune_notes", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_tune_notes on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_activate_tuning")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_activate_tuning", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_activate_tuning on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_activate_tuning", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_activate_tuning on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_deactivate_tuning")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_deactivate_tuning", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_deactivate_tuning on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_deactivate_tuning", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_deactivate_tuning on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_tuning_iteration_start")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_tuning_iteration_start", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_tuning_iteration_start on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_tuning_iteration_start", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_tuning_iteration_start on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_tuning_iteration_next")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_tuning_iteration_next", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_tuning_iteration_next on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_tuning_iteration_next", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_tuning_iteration_next on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_tuning_dump")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_tuning_dump", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_tuning_dump on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_tuning_dump", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_tuning_dump on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_write_s16")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_write_s16", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_write_s16 on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_write_s16", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_write_s16 on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_write_float")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_write_float", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_write_float on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_write_float", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_write_float on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_nwrite_float")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_nwrite_float", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_nwrite_float on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_nwrite_float", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_nwrite_float on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_process")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_process", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_process on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_process", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_process on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_set_custom_filter")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_set_custom_filter", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_set_custom_filter on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_set_custom_filter", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_set_custom_filter on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_set_channel_type")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_set_channel_type", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_set_channel_type on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_set_channel_type", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_set_channel_type on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_reset_basic_channel")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_reset_basic_channel", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_reset_basic_channel on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_reset_basic_channel", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_reset_basic_channel on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_get_basic_channel")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_get_basic_channel", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_get_basic_channel on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_get_basic_channel", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_get_basic_channel on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_set_basic_channel")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_set_basic_channel", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_set_basic_channel on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_set_basic_channel", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_set_basic_channel on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_set_legato_mode")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_set_legato_mode", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_set_legato_mode on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_set_legato_mode", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_set_legato_mode on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_get_legato_mode")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_get_legato_mode", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_get_legato_mode on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_get_legato_mode", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_get_legato_mode on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_set_portamento_mode")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_set_portamento_mode", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_set_portamento_mode on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_set_portamento_mode", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_set_portamento_mode on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_get_portamento_mode")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_get_portamento_mode", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_get_portamento_mode on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_get_portamento_mode", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_get_portamento_mode on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_set_breath_mode")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_set_breath_mode", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_set_breath_mode on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_set_breath_mode", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_set_breath_mode on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_get_breath_mode")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_get_breath_mode", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_get_breath_mode on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_get_breath_mode", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_get_breath_mode on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_get_settings")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_get_settings", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_get_settings on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_get_settings", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_get_settings on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_add_sfloader")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_add_sfloader", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_add_sfloader on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_add_sfloader", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_add_sfloader on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_get_channel_preset")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_get_channel_preset", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_get_channel_preset on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_get_channel_preset", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_get_channel_preset on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_handle_midi_event")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_handle_midi_event", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_handle_midi_event on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_handle_midi_event", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_handle_midi_event on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_pin_preset")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_pin_preset", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_pin_preset on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_pin_preset", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_pin_preset on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_unpin_preset")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_unpin_preset", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_unpin_preset on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_unpin_preset", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_unpin_preset on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_synth_get_ladspa_fx")) {
 Object.defineProperty(Module["ready"], "_fluid_synth_get_ladspa_fx", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_synth_get_ladspa_fx on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_synth_get_ladspa_fx", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_synth_get_ladspa_fx on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_new_fluid_sfloader")) {
 Object.defineProperty(Module["ready"], "_new_fluid_sfloader", {
  configurable: true,
  get: function() {
   abort("You are getting _new_fluid_sfloader on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_new_fluid_sfloader", {
  configurable: true,
  set: function() {
   abort("You are setting _new_fluid_sfloader on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_delete_fluid_sfloader")) {
 Object.defineProperty(Module["ready"], "_delete_fluid_sfloader", {
  configurable: true,
  get: function() {
   abort("You are getting _delete_fluid_sfloader on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_delete_fluid_sfloader", {
  configurable: true,
  set: function() {
   abort("You are setting _delete_fluid_sfloader on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_new_fluid_defsfloader")) {
 Object.defineProperty(Module["ready"], "_new_fluid_defsfloader", {
  configurable: true,
  get: function() {
   abort("You are getting _new_fluid_defsfloader on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_new_fluid_defsfloader", {
  configurable: true,
  set: function() {
   abort("You are setting _new_fluid_defsfloader on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_sfloader_set_callbacks")) {
 Object.defineProperty(Module["ready"], "_fluid_sfloader_set_callbacks", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_sfloader_set_callbacks on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_sfloader_set_callbacks", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_sfloader_set_callbacks on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_sfloader_set_data")) {
 Object.defineProperty(Module["ready"], "_fluid_sfloader_set_data", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_sfloader_set_data on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_sfloader_set_data", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_sfloader_set_data on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_sfloader_get_data")) {
 Object.defineProperty(Module["ready"], "_fluid_sfloader_get_data", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_sfloader_get_data on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_sfloader_get_data", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_sfloader_get_data on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_new_fluid_sfont")) {
 Object.defineProperty(Module["ready"], "_new_fluid_sfont", {
  configurable: true,
  get: function() {
   abort("You are getting _new_fluid_sfont on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_new_fluid_sfont", {
  configurable: true,
  set: function() {
   abort("You are setting _new_fluid_sfont on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_delete_fluid_sfont")) {
 Object.defineProperty(Module["ready"], "_delete_fluid_sfont", {
  configurable: true,
  get: function() {
   abort("You are getting _delete_fluid_sfont on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_delete_fluid_sfont", {
  configurable: true,
  set: function() {
   abort("You are setting _delete_fluid_sfont on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_sfont_set_data")) {
 Object.defineProperty(Module["ready"], "_fluid_sfont_set_data", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_sfont_set_data on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_sfont_set_data", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_sfont_set_data on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_sfont_get_data")) {
 Object.defineProperty(Module["ready"], "_fluid_sfont_get_data", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_sfont_get_data on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_sfont_get_data", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_sfont_get_data on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_sfont_get_id")) {
 Object.defineProperty(Module["ready"], "_fluid_sfont_get_id", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_sfont_get_id on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_sfont_get_id", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_sfont_get_id on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_sfont_get_name")) {
 Object.defineProperty(Module["ready"], "_fluid_sfont_get_name", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_sfont_get_name on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_sfont_get_name", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_sfont_get_name on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_sfont_get_preset")) {
 Object.defineProperty(Module["ready"], "_fluid_sfont_get_preset", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_sfont_get_preset on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_sfont_get_preset", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_sfont_get_preset on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_sfont_iteration_start")) {
 Object.defineProperty(Module["ready"], "_fluid_sfont_iteration_start", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_sfont_iteration_start on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_sfont_iteration_start", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_sfont_iteration_start on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_sfont_iteration_next")) {
 Object.defineProperty(Module["ready"], "_fluid_sfont_iteration_next", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_sfont_iteration_next on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_sfont_iteration_next", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_sfont_iteration_next on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_new_fluid_preset")) {
 Object.defineProperty(Module["ready"], "_new_fluid_preset", {
  configurable: true,
  get: function() {
   abort("You are getting _new_fluid_preset on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_new_fluid_preset", {
  configurable: true,
  set: function() {
   abort("You are setting _new_fluid_preset on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_delete_fluid_preset")) {
 Object.defineProperty(Module["ready"], "_delete_fluid_preset", {
  configurable: true,
  get: function() {
   abort("You are getting _delete_fluid_preset on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_delete_fluid_preset", {
  configurable: true,
  set: function() {
   abort("You are setting _delete_fluid_preset on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_preset_set_data")) {
 Object.defineProperty(Module["ready"], "_fluid_preset_set_data", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_preset_set_data on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_preset_set_data", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_preset_set_data on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_preset_get_data")) {
 Object.defineProperty(Module["ready"], "_fluid_preset_get_data", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_preset_get_data on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_preset_get_data", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_preset_get_data on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_preset_get_name")) {
 Object.defineProperty(Module["ready"], "_fluid_preset_get_name", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_preset_get_name on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_preset_get_name", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_preset_get_name on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_preset_get_banknum")) {
 Object.defineProperty(Module["ready"], "_fluid_preset_get_banknum", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_preset_get_banknum on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_preset_get_banknum", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_preset_get_banknum on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_preset_get_num")) {
 Object.defineProperty(Module["ready"], "_fluid_preset_get_num", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_preset_get_num on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_preset_get_num", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_preset_get_num on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_preset_get_sfont")) {
 Object.defineProperty(Module["ready"], "_fluid_preset_get_sfont", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_preset_get_sfont on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_preset_get_sfont", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_preset_get_sfont on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_new_fluid_sample")) {
 Object.defineProperty(Module["ready"], "_new_fluid_sample", {
  configurable: true,
  get: function() {
   abort("You are getting _new_fluid_sample on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_new_fluid_sample", {
  configurable: true,
  set: function() {
   abort("You are setting _new_fluid_sample on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_delete_fluid_sample")) {
 Object.defineProperty(Module["ready"], "_delete_fluid_sample", {
  configurable: true,
  get: function() {
   abort("You are getting _delete_fluid_sample on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_delete_fluid_sample", {
  configurable: true,
  set: function() {
   abort("You are setting _delete_fluid_sample on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_sample_sizeof")) {
 Object.defineProperty(Module["ready"], "_fluid_sample_sizeof", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_sample_sizeof on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_sample_sizeof", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_sample_sizeof on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_sample_set_name")) {
 Object.defineProperty(Module["ready"], "_fluid_sample_set_name", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_sample_set_name on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_sample_set_name", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_sample_set_name on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_sample_set_sound_data")) {
 Object.defineProperty(Module["ready"], "_fluid_sample_set_sound_data", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_sample_set_sound_data on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_sample_set_sound_data", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_sample_set_sound_data on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_sample_set_loop")) {
 Object.defineProperty(Module["ready"], "_fluid_sample_set_loop", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_sample_set_loop on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_sample_set_loop", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_sample_set_loop on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_sample_set_pitch")) {
 Object.defineProperty(Module["ready"], "_fluid_sample_set_pitch", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_sample_set_pitch on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_sample_set_pitch", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_sample_set_pitch on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_new_fluid_settings")) {
 Object.defineProperty(Module["ready"], "_new_fluid_settings", {
  configurable: true,
  get: function() {
   abort("You are getting _new_fluid_settings on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_new_fluid_settings", {
  configurable: true,
  set: function() {
   abort("You are setting _new_fluid_settings on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_delete_fluid_settings")) {
 Object.defineProperty(Module["ready"], "_delete_fluid_settings", {
  configurable: true,
  get: function() {
   abort("You are getting _delete_fluid_settings on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_delete_fluid_settings", {
  configurable: true,
  set: function() {
   abort("You are setting _delete_fluid_settings on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_settings_get_type")) {
 Object.defineProperty(Module["ready"], "_fluid_settings_get_type", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_settings_get_type on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_settings_get_type", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_settings_get_type on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_settings_get_hints")) {
 Object.defineProperty(Module["ready"], "_fluid_settings_get_hints", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_settings_get_hints on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_settings_get_hints", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_settings_get_hints on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_settings_is_realtime")) {
 Object.defineProperty(Module["ready"], "_fluid_settings_is_realtime", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_settings_is_realtime on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_settings_is_realtime", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_settings_is_realtime on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_settings_setstr")) {
 Object.defineProperty(Module["ready"], "_fluid_settings_setstr", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_settings_setstr on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_settings_setstr", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_settings_setstr on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_settings_copystr")) {
 Object.defineProperty(Module["ready"], "_fluid_settings_copystr", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_settings_copystr on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_settings_copystr", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_settings_copystr on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_settings_dupstr")) {
 Object.defineProperty(Module["ready"], "_fluid_settings_dupstr", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_settings_dupstr on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_settings_dupstr", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_settings_dupstr on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_settings_getstr_default")) {
 Object.defineProperty(Module["ready"], "_fluid_settings_getstr_default", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_settings_getstr_default on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_settings_getstr_default", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_settings_getstr_default on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_settings_str_equal")) {
 Object.defineProperty(Module["ready"], "_fluid_settings_str_equal", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_settings_str_equal on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_settings_str_equal", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_settings_str_equal on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_settings_setnum")) {
 Object.defineProperty(Module["ready"], "_fluid_settings_setnum", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_settings_setnum on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_settings_setnum", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_settings_setnum on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_settings_getnum")) {
 Object.defineProperty(Module["ready"], "_fluid_settings_getnum", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_settings_getnum on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_settings_getnum", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_settings_getnum on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_settings_getnum_default")) {
 Object.defineProperty(Module["ready"], "_fluid_settings_getnum_default", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_settings_getnum_default on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_settings_getnum_default", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_settings_getnum_default on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_settings_getnum_range")) {
 Object.defineProperty(Module["ready"], "_fluid_settings_getnum_range", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_settings_getnum_range on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_settings_getnum_range", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_settings_getnum_range on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_settings_setint")) {
 Object.defineProperty(Module["ready"], "_fluid_settings_setint", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_settings_setint on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_settings_setint", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_settings_setint on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_settings_getint")) {
 Object.defineProperty(Module["ready"], "_fluid_settings_getint", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_settings_getint on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_settings_getint", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_settings_getint on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_settings_getint_default")) {
 Object.defineProperty(Module["ready"], "_fluid_settings_getint_default", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_settings_getint_default on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_settings_getint_default", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_settings_getint_default on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_settings_getint_range")) {
 Object.defineProperty(Module["ready"], "_fluid_settings_getint_range", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_settings_getint_range on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_settings_getint_range", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_settings_getint_range on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_settings_foreach_option")) {
 Object.defineProperty(Module["ready"], "_fluid_settings_foreach_option", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_settings_foreach_option on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_settings_foreach_option", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_settings_foreach_option on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_settings_option_count")) {
 Object.defineProperty(Module["ready"], "_fluid_settings_option_count", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_settings_option_count on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_settings_option_count", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_settings_option_count on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_settings_option_concat")) {
 Object.defineProperty(Module["ready"], "_fluid_settings_option_concat", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_settings_option_concat on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_settings_option_concat", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_settings_option_concat on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_settings_foreach")) {
 Object.defineProperty(Module["ready"], "_fluid_settings_foreach", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_settings_foreach on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_settings_foreach", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_settings_foreach on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_sequencer_register_fluidsynth")) {
 Object.defineProperty(Module["ready"], "_fluid_sequencer_register_fluidsynth", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_sequencer_register_fluidsynth on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_sequencer_register_fluidsynth", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_sequencer_register_fluidsynth on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_sequencer_add_midi_event_to_buffer")) {
 Object.defineProperty(Module["ready"], "_fluid_sequencer_add_midi_event_to_buffer", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_sequencer_add_midi_event_to_buffer on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_sequencer_add_midi_event_to_buffer", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_sequencer_add_midi_event_to_buffer on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_new_fluid_sequencer")) {
 Object.defineProperty(Module["ready"], "_new_fluid_sequencer", {
  configurable: true,
  get: function() {
   abort("You are getting _new_fluid_sequencer on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_new_fluid_sequencer", {
  configurable: true,
  set: function() {
   abort("You are setting _new_fluid_sequencer on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_new_fluid_sequencer2")) {
 Object.defineProperty(Module["ready"], "_new_fluid_sequencer2", {
  configurable: true,
  get: function() {
   abort("You are getting _new_fluid_sequencer2 on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_new_fluid_sequencer2", {
  configurable: true,
  set: function() {
   abort("You are setting _new_fluid_sequencer2 on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_delete_fluid_sequencer")) {
 Object.defineProperty(Module["ready"], "_delete_fluid_sequencer", {
  configurable: true,
  get: function() {
   abort("You are getting _delete_fluid_sequencer on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_delete_fluid_sequencer", {
  configurable: true,
  set: function() {
   abort("You are setting _delete_fluid_sequencer on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_sequencer_get_use_system_timer")) {
 Object.defineProperty(Module["ready"], "_fluid_sequencer_get_use_system_timer", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_sequencer_get_use_system_timer on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_sequencer_get_use_system_timer", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_sequencer_get_use_system_timer on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_sequencer_register_client")) {
 Object.defineProperty(Module["ready"], "_fluid_sequencer_register_client", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_sequencer_register_client on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_sequencer_register_client", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_sequencer_register_client on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_sequencer_unregister_client")) {
 Object.defineProperty(Module["ready"], "_fluid_sequencer_unregister_client", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_sequencer_unregister_client on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_sequencer_unregister_client", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_sequencer_unregister_client on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_sequencer_count_clients")) {
 Object.defineProperty(Module["ready"], "_fluid_sequencer_count_clients", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_sequencer_count_clients on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_sequencer_count_clients", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_sequencer_count_clients on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_sequencer_get_client_id")) {
 Object.defineProperty(Module["ready"], "_fluid_sequencer_get_client_id", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_sequencer_get_client_id on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_sequencer_get_client_id", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_sequencer_get_client_id on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_sequencer_get_client_name")) {
 Object.defineProperty(Module["ready"], "_fluid_sequencer_get_client_name", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_sequencer_get_client_name on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_sequencer_get_client_name", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_sequencer_get_client_name on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_sequencer_client_is_dest")) {
 Object.defineProperty(Module["ready"], "_fluid_sequencer_client_is_dest", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_sequencer_client_is_dest on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_sequencer_client_is_dest", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_sequencer_client_is_dest on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_sequencer_process")) {
 Object.defineProperty(Module["ready"], "_fluid_sequencer_process", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_sequencer_process on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_sequencer_process", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_sequencer_process on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_sequencer_send_now")) {
 Object.defineProperty(Module["ready"], "_fluid_sequencer_send_now", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_sequencer_send_now on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_sequencer_send_now", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_sequencer_send_now on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_sequencer_send_at")) {
 Object.defineProperty(Module["ready"], "_fluid_sequencer_send_at", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_sequencer_send_at on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_sequencer_send_at", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_sequencer_send_at on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_sequencer_remove_events")) {
 Object.defineProperty(Module["ready"], "_fluid_sequencer_remove_events", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_sequencer_remove_events on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_sequencer_remove_events", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_sequencer_remove_events on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_sequencer_get_tick")) {
 Object.defineProperty(Module["ready"], "_fluid_sequencer_get_tick", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_sequencer_get_tick on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_sequencer_get_tick", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_sequencer_get_tick on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_sequencer_set_time_scale")) {
 Object.defineProperty(Module["ready"], "_fluid_sequencer_set_time_scale", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_sequencer_set_time_scale on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_sequencer_set_time_scale", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_sequencer_set_time_scale on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_sequencer_get_time_scale")) {
 Object.defineProperty(Module["ready"], "_fluid_sequencer_get_time_scale", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_sequencer_get_time_scale on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_sequencer_get_time_scale", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_sequencer_get_time_scale on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_new_fluid_mod")) {
 Object.defineProperty(Module["ready"], "_new_fluid_mod", {
  configurable: true,
  get: function() {
   abort("You are getting _new_fluid_mod on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_new_fluid_mod", {
  configurable: true,
  set: function() {
   abort("You are setting _new_fluid_mod on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_delete_fluid_mod")) {
 Object.defineProperty(Module["ready"], "_delete_fluid_mod", {
  configurable: true,
  get: function() {
   abort("You are getting _delete_fluid_mod on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_delete_fluid_mod", {
  configurable: true,
  set: function() {
   abort("You are setting _delete_fluid_mod on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_mod_sizeof")) {
 Object.defineProperty(Module["ready"], "_fluid_mod_sizeof", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_mod_sizeof on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_mod_sizeof", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_mod_sizeof on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_mod_set_source1")) {
 Object.defineProperty(Module["ready"], "_fluid_mod_set_source1", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_mod_set_source1 on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_mod_set_source1", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_mod_set_source1 on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_mod_set_source2")) {
 Object.defineProperty(Module["ready"], "_fluid_mod_set_source2", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_mod_set_source2 on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_mod_set_source2", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_mod_set_source2 on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_mod_set_dest")) {
 Object.defineProperty(Module["ready"], "_fluid_mod_set_dest", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_mod_set_dest on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_mod_set_dest", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_mod_set_dest on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_mod_set_amount")) {
 Object.defineProperty(Module["ready"], "_fluid_mod_set_amount", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_mod_set_amount on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_mod_set_amount", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_mod_set_amount on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_mod_get_source1")) {
 Object.defineProperty(Module["ready"], "_fluid_mod_get_source1", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_mod_get_source1 on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_mod_get_source1", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_mod_get_source1 on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_mod_get_flags1")) {
 Object.defineProperty(Module["ready"], "_fluid_mod_get_flags1", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_mod_get_flags1 on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_mod_get_flags1", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_mod_get_flags1 on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_mod_get_source2")) {
 Object.defineProperty(Module["ready"], "_fluid_mod_get_source2", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_mod_get_source2 on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_mod_get_source2", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_mod_get_source2 on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_mod_get_flags2")) {
 Object.defineProperty(Module["ready"], "_fluid_mod_get_flags2", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_mod_get_flags2 on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_mod_get_flags2", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_mod_get_flags2 on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_mod_get_dest")) {
 Object.defineProperty(Module["ready"], "_fluid_mod_get_dest", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_mod_get_dest on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_mod_get_dest", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_mod_get_dest on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_mod_get_amount")) {
 Object.defineProperty(Module["ready"], "_fluid_mod_get_amount", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_mod_get_amount on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_mod_get_amount", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_mod_get_amount on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_mod_test_identity")) {
 Object.defineProperty(Module["ready"], "_fluid_mod_test_identity", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_mod_test_identity on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_mod_test_identity", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_mod_test_identity on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_mod_has_source")) {
 Object.defineProperty(Module["ready"], "_fluid_mod_has_source", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_mod_has_source on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_mod_has_source", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_mod_has_source on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_mod_has_dest")) {
 Object.defineProperty(Module["ready"], "_fluid_mod_has_dest", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_mod_has_dest on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_mod_has_dest", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_mod_has_dest on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_mod_clone")) {
 Object.defineProperty(Module["ready"], "_fluid_mod_clone", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_mod_clone on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_mod_clone", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_mod_clone on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_is_soundfont")) {
 Object.defineProperty(Module["ready"], "_fluid_is_soundfont", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_is_soundfont on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_is_soundfont", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_is_soundfont on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_is_midifile")) {
 Object.defineProperty(Module["ready"], "_fluid_is_midifile", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_is_midifile on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_is_midifile", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_is_midifile on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_free")) {
 Object.defineProperty(Module["ready"], "_fluid_free", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_free on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_free", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_free on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_new_fluid_midi_event")) {
 Object.defineProperty(Module["ready"], "_new_fluid_midi_event", {
  configurable: true,
  get: function() {
   abort("You are getting _new_fluid_midi_event on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_new_fluid_midi_event", {
  configurable: true,
  set: function() {
   abort("You are setting _new_fluid_midi_event on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_delete_fluid_midi_event")) {
 Object.defineProperty(Module["ready"], "_delete_fluid_midi_event", {
  configurable: true,
  get: function() {
   abort("You are getting _delete_fluid_midi_event on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_delete_fluid_midi_event", {
  configurable: true,
  set: function() {
   abort("You are setting _delete_fluid_midi_event on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_midi_event_set_type")) {
 Object.defineProperty(Module["ready"], "_fluid_midi_event_set_type", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_midi_event_set_type on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_midi_event_set_type", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_midi_event_set_type on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_midi_event_get_type")) {
 Object.defineProperty(Module["ready"], "_fluid_midi_event_get_type", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_midi_event_get_type on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_midi_event_get_type", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_midi_event_get_type on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_midi_event_set_channel")) {
 Object.defineProperty(Module["ready"], "_fluid_midi_event_set_channel", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_midi_event_set_channel on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_midi_event_set_channel", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_midi_event_set_channel on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_midi_event_get_channel")) {
 Object.defineProperty(Module["ready"], "_fluid_midi_event_get_channel", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_midi_event_get_channel on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_midi_event_get_channel", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_midi_event_get_channel on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_midi_event_get_key")) {
 Object.defineProperty(Module["ready"], "_fluid_midi_event_get_key", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_midi_event_get_key on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_midi_event_get_key", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_midi_event_get_key on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_midi_event_set_key")) {
 Object.defineProperty(Module["ready"], "_fluid_midi_event_set_key", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_midi_event_set_key on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_midi_event_set_key", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_midi_event_set_key on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_midi_event_get_velocity")) {
 Object.defineProperty(Module["ready"], "_fluid_midi_event_get_velocity", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_midi_event_get_velocity on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_midi_event_get_velocity", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_midi_event_get_velocity on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_midi_event_set_velocity")) {
 Object.defineProperty(Module["ready"], "_fluid_midi_event_set_velocity", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_midi_event_set_velocity on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_midi_event_set_velocity", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_midi_event_set_velocity on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_midi_event_get_control")) {
 Object.defineProperty(Module["ready"], "_fluid_midi_event_get_control", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_midi_event_get_control on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_midi_event_get_control", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_midi_event_get_control on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_midi_event_set_control")) {
 Object.defineProperty(Module["ready"], "_fluid_midi_event_set_control", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_midi_event_set_control on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_midi_event_set_control", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_midi_event_set_control on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_midi_event_get_value")) {
 Object.defineProperty(Module["ready"], "_fluid_midi_event_get_value", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_midi_event_get_value on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_midi_event_get_value", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_midi_event_get_value on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_midi_event_set_value")) {
 Object.defineProperty(Module["ready"], "_fluid_midi_event_set_value", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_midi_event_set_value on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_midi_event_set_value", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_midi_event_set_value on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_midi_event_get_program")) {
 Object.defineProperty(Module["ready"], "_fluid_midi_event_get_program", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_midi_event_get_program on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_midi_event_get_program", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_midi_event_get_program on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_midi_event_set_program")) {
 Object.defineProperty(Module["ready"], "_fluid_midi_event_set_program", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_midi_event_set_program on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_midi_event_set_program", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_midi_event_set_program on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_midi_event_get_pitch")) {
 Object.defineProperty(Module["ready"], "_fluid_midi_event_get_pitch", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_midi_event_get_pitch on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_midi_event_get_pitch", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_midi_event_get_pitch on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_midi_event_set_pitch")) {
 Object.defineProperty(Module["ready"], "_fluid_midi_event_set_pitch", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_midi_event_set_pitch on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_midi_event_set_pitch", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_midi_event_set_pitch on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_midi_event_set_sysex")) {
 Object.defineProperty(Module["ready"], "_fluid_midi_event_set_sysex", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_midi_event_set_sysex on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_midi_event_set_sysex", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_midi_event_set_sysex on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_midi_event_set_text")) {
 Object.defineProperty(Module["ready"], "_fluid_midi_event_set_text", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_midi_event_set_text on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_midi_event_set_text", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_midi_event_set_text on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_midi_event_get_text")) {
 Object.defineProperty(Module["ready"], "_fluid_midi_event_get_text", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_midi_event_get_text on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_midi_event_get_text", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_midi_event_get_text on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_midi_event_set_lyrics")) {
 Object.defineProperty(Module["ready"], "_fluid_midi_event_set_lyrics", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_midi_event_set_lyrics on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_midi_event_set_lyrics", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_midi_event_set_lyrics on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_midi_event_get_lyrics")) {
 Object.defineProperty(Module["ready"], "_fluid_midi_event_get_lyrics", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_midi_event_get_lyrics on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_midi_event_get_lyrics", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_midi_event_get_lyrics on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_new_fluid_midi_router")) {
 Object.defineProperty(Module["ready"], "_new_fluid_midi_router", {
  configurable: true,
  get: function() {
   abort("You are getting _new_fluid_midi_router on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_new_fluid_midi_router", {
  configurable: true,
  set: function() {
   abort("You are setting _new_fluid_midi_router on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_delete_fluid_midi_router")) {
 Object.defineProperty(Module["ready"], "_delete_fluid_midi_router", {
  configurable: true,
  get: function() {
   abort("You are getting _delete_fluid_midi_router on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_delete_fluid_midi_router", {
  configurable: true,
  set: function() {
   abort("You are setting _delete_fluid_midi_router on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_midi_router_set_default_rules")) {
 Object.defineProperty(Module["ready"], "_fluid_midi_router_set_default_rules", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_midi_router_set_default_rules on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_midi_router_set_default_rules", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_midi_router_set_default_rules on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_midi_router_clear_rules")) {
 Object.defineProperty(Module["ready"], "_fluid_midi_router_clear_rules", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_midi_router_clear_rules on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_midi_router_clear_rules", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_midi_router_clear_rules on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_midi_router_add_rule")) {
 Object.defineProperty(Module["ready"], "_fluid_midi_router_add_rule", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_midi_router_add_rule on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_midi_router_add_rule", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_midi_router_add_rule on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_new_fluid_midi_router_rule")) {
 Object.defineProperty(Module["ready"], "_new_fluid_midi_router_rule", {
  configurable: true,
  get: function() {
   abort("You are getting _new_fluid_midi_router_rule on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_new_fluid_midi_router_rule", {
  configurable: true,
  set: function() {
   abort("You are setting _new_fluid_midi_router_rule on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_delete_fluid_midi_router_rule")) {
 Object.defineProperty(Module["ready"], "_delete_fluid_midi_router_rule", {
  configurable: true,
  get: function() {
   abort("You are getting _delete_fluid_midi_router_rule on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_delete_fluid_midi_router_rule", {
  configurable: true,
  set: function() {
   abort("You are setting _delete_fluid_midi_router_rule on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_midi_router_rule_set_chan")) {
 Object.defineProperty(Module["ready"], "_fluid_midi_router_rule_set_chan", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_midi_router_rule_set_chan on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_midi_router_rule_set_chan", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_midi_router_rule_set_chan on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_midi_router_rule_set_param1")) {
 Object.defineProperty(Module["ready"], "_fluid_midi_router_rule_set_param1", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_midi_router_rule_set_param1 on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_midi_router_rule_set_param1", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_midi_router_rule_set_param1 on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_midi_router_rule_set_param2")) {
 Object.defineProperty(Module["ready"], "_fluid_midi_router_rule_set_param2", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_midi_router_rule_set_param2 on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_midi_router_rule_set_param2", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_midi_router_rule_set_param2 on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_midi_router_handle_midi_event")) {
 Object.defineProperty(Module["ready"], "_fluid_midi_router_handle_midi_event", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_midi_router_handle_midi_event on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_midi_router_handle_midi_event", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_midi_router_handle_midi_event on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_midi_dump_prerouter")) {
 Object.defineProperty(Module["ready"], "_fluid_midi_dump_prerouter", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_midi_dump_prerouter on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_midi_dump_prerouter", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_midi_dump_prerouter on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_midi_dump_postrouter")) {
 Object.defineProperty(Module["ready"], "_fluid_midi_dump_postrouter", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_midi_dump_postrouter on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_midi_dump_postrouter", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_midi_dump_postrouter on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_new_fluid_midi_driver")) {
 Object.defineProperty(Module["ready"], "_new_fluid_midi_driver", {
  configurable: true,
  get: function() {
   abort("You are getting _new_fluid_midi_driver on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_new_fluid_midi_driver", {
  configurable: true,
  set: function() {
   abort("You are setting _new_fluid_midi_driver on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_delete_fluid_midi_driver")) {
 Object.defineProperty(Module["ready"], "_delete_fluid_midi_driver", {
  configurable: true,
  get: function() {
   abort("You are getting _delete_fluid_midi_driver on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_delete_fluid_midi_driver", {
  configurable: true,
  set: function() {
   abort("You are setting _delete_fluid_midi_driver on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_new_fluid_player")) {
 Object.defineProperty(Module["ready"], "_new_fluid_player", {
  configurable: true,
  get: function() {
   abort("You are getting _new_fluid_player on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_new_fluid_player", {
  configurable: true,
  set: function() {
   abort("You are setting _new_fluid_player on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_delete_fluid_player")) {
 Object.defineProperty(Module["ready"], "_delete_fluid_player", {
  configurable: true,
  get: function() {
   abort("You are getting _delete_fluid_player on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_delete_fluid_player", {
  configurable: true,
  set: function() {
   abort("You are setting _delete_fluid_player on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_player_add")) {
 Object.defineProperty(Module["ready"], "_fluid_player_add", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_player_add on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_player_add", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_player_add on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_player_add_mem")) {
 Object.defineProperty(Module["ready"], "_fluid_player_add_mem", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_player_add_mem on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_player_add_mem", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_player_add_mem on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_player_play")) {
 Object.defineProperty(Module["ready"], "_fluid_player_play", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_player_play on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_player_play", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_player_play on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_player_stop")) {
 Object.defineProperty(Module["ready"], "_fluid_player_stop", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_player_stop on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_player_stop", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_player_stop on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_player_join")) {
 Object.defineProperty(Module["ready"], "_fluid_player_join", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_player_join on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_player_join", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_player_join on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_player_set_loop")) {
 Object.defineProperty(Module["ready"], "_fluid_player_set_loop", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_player_set_loop on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_player_set_loop", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_player_set_loop on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_player_set_tempo")) {
 Object.defineProperty(Module["ready"], "_fluid_player_set_tempo", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_player_set_tempo on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_player_set_tempo", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_player_set_tempo on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_player_set_midi_tempo")) {
 Object.defineProperty(Module["ready"], "_fluid_player_set_midi_tempo", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_player_set_midi_tempo on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_player_set_midi_tempo", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_player_set_midi_tempo on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_player_set_bpm")) {
 Object.defineProperty(Module["ready"], "_fluid_player_set_bpm", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_player_set_bpm on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_player_set_bpm", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_player_set_bpm on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_player_set_playback_callback")) {
 Object.defineProperty(Module["ready"], "_fluid_player_set_playback_callback", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_player_set_playback_callback on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_player_set_playback_callback", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_player_set_playback_callback on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_player_set_tick_callback")) {
 Object.defineProperty(Module["ready"], "_fluid_player_set_tick_callback", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_player_set_tick_callback on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_player_set_tick_callback", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_player_set_tick_callback on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_player_get_status")) {
 Object.defineProperty(Module["ready"], "_fluid_player_get_status", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_player_get_status on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_player_get_status", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_player_get_status on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_player_get_current_tick")) {
 Object.defineProperty(Module["ready"], "_fluid_player_get_current_tick", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_player_get_current_tick on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_player_get_current_tick", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_player_get_current_tick on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_player_get_total_ticks")) {
 Object.defineProperty(Module["ready"], "_fluid_player_get_total_ticks", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_player_get_total_ticks on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_player_get_total_ticks", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_player_get_total_ticks on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_player_get_bpm")) {
 Object.defineProperty(Module["ready"], "_fluid_player_get_bpm", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_player_get_bpm on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_player_get_bpm", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_player_get_bpm on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_player_get_midi_tempo")) {
 Object.defineProperty(Module["ready"], "_fluid_player_get_midi_tempo", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_player_get_midi_tempo on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_player_get_midi_tempo", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_player_get_midi_tempo on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_player_seek")) {
 Object.defineProperty(Module["ready"], "_fluid_player_seek", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_player_seek on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_player_seek", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_player_seek on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_set_log_function")) {
 Object.defineProperty(Module["ready"], "_fluid_set_log_function", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_set_log_function on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_set_log_function", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_set_log_function on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_default_log_function")) {
 Object.defineProperty(Module["ready"], "_fluid_default_log_function", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_default_log_function on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_default_log_function", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_default_log_function on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_log")) {
 Object.defineProperty(Module["ready"], "_fluid_log", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_log on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_log", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_log on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_ladspa_is_active")) {
 Object.defineProperty(Module["ready"], "_fluid_ladspa_is_active", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_ladspa_is_active on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_ladspa_is_active", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_ladspa_is_active on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_ladspa_activate")) {
 Object.defineProperty(Module["ready"], "_fluid_ladspa_activate", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_ladspa_activate on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_ladspa_activate", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_ladspa_activate on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_ladspa_deactivate")) {
 Object.defineProperty(Module["ready"], "_fluid_ladspa_deactivate", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_ladspa_deactivate on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_ladspa_deactivate", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_ladspa_deactivate on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_ladspa_reset")) {
 Object.defineProperty(Module["ready"], "_fluid_ladspa_reset", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_ladspa_reset on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_ladspa_reset", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_ladspa_reset on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_ladspa_check")) {
 Object.defineProperty(Module["ready"], "_fluid_ladspa_check", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_ladspa_check on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_ladspa_check", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_ladspa_check on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_ladspa_host_port_exists")) {
 Object.defineProperty(Module["ready"], "_fluid_ladspa_host_port_exists", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_ladspa_host_port_exists on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_ladspa_host_port_exists", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_ladspa_host_port_exists on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_ladspa_add_buffer")) {
 Object.defineProperty(Module["ready"], "_fluid_ladspa_add_buffer", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_ladspa_add_buffer on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_ladspa_add_buffer", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_ladspa_add_buffer on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_ladspa_buffer_exists")) {
 Object.defineProperty(Module["ready"], "_fluid_ladspa_buffer_exists", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_ladspa_buffer_exists on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_ladspa_buffer_exists", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_ladspa_buffer_exists on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_ladspa_add_effect")) {
 Object.defineProperty(Module["ready"], "_fluid_ladspa_add_effect", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_ladspa_add_effect on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_ladspa_add_effect", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_ladspa_add_effect on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_ladspa_effect_can_mix")) {
 Object.defineProperty(Module["ready"], "_fluid_ladspa_effect_can_mix", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_ladspa_effect_can_mix on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_ladspa_effect_can_mix", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_ladspa_effect_can_mix on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_ladspa_effect_set_mix")) {
 Object.defineProperty(Module["ready"], "_fluid_ladspa_effect_set_mix", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_ladspa_effect_set_mix on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_ladspa_effect_set_mix", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_ladspa_effect_set_mix on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_ladspa_effect_port_exists")) {
 Object.defineProperty(Module["ready"], "_fluid_ladspa_effect_port_exists", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_ladspa_effect_port_exists on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_ladspa_effect_port_exists", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_ladspa_effect_port_exists on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_ladspa_effect_set_control")) {
 Object.defineProperty(Module["ready"], "_fluid_ladspa_effect_set_control", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_ladspa_effect_set_control on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_ladspa_effect_set_control", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_ladspa_effect_set_control on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_ladspa_effect_link")) {
 Object.defineProperty(Module["ready"], "_fluid_ladspa_effect_link", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_ladspa_effect_link on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_ladspa_effect_link", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_ladspa_effect_link on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_new_fluid_event")) {
 Object.defineProperty(Module["ready"], "_new_fluid_event", {
  configurable: true,
  get: function() {
   abort("You are getting _new_fluid_event on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_new_fluid_event", {
  configurable: true,
  set: function() {
   abort("You are setting _new_fluid_event on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_delete_fluid_event")) {
 Object.defineProperty(Module["ready"], "_delete_fluid_event", {
  configurable: true,
  get: function() {
   abort("You are getting _delete_fluid_event on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_delete_fluid_event", {
  configurable: true,
  set: function() {
   abort("You are setting _delete_fluid_event on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_event_set_source")) {
 Object.defineProperty(Module["ready"], "_fluid_event_set_source", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_event_set_source on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_event_set_source", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_event_set_source on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_event_set_dest")) {
 Object.defineProperty(Module["ready"], "_fluid_event_set_dest", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_event_set_dest on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_event_set_dest", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_event_set_dest on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_event_timer")) {
 Object.defineProperty(Module["ready"], "_fluid_event_timer", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_event_timer on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_event_timer", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_event_timer on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_event_note")) {
 Object.defineProperty(Module["ready"], "_fluid_event_note", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_event_note on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_event_note", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_event_note on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_event_noteon")) {
 Object.defineProperty(Module["ready"], "_fluid_event_noteon", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_event_noteon on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_event_noteon", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_event_noteon on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_event_noteoff")) {
 Object.defineProperty(Module["ready"], "_fluid_event_noteoff", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_event_noteoff on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_event_noteoff", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_event_noteoff on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_event_all_sounds_off")) {
 Object.defineProperty(Module["ready"], "_fluid_event_all_sounds_off", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_event_all_sounds_off on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_event_all_sounds_off", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_event_all_sounds_off on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_event_all_notes_off")) {
 Object.defineProperty(Module["ready"], "_fluid_event_all_notes_off", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_event_all_notes_off on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_event_all_notes_off", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_event_all_notes_off on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_event_bank_select")) {
 Object.defineProperty(Module["ready"], "_fluid_event_bank_select", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_event_bank_select on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_event_bank_select", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_event_bank_select on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_event_program_change")) {
 Object.defineProperty(Module["ready"], "_fluid_event_program_change", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_event_program_change on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_event_program_change", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_event_program_change on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_event_program_select")) {
 Object.defineProperty(Module["ready"], "_fluid_event_program_select", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_event_program_select on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_event_program_select", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_event_program_select on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_event_control_change")) {
 Object.defineProperty(Module["ready"], "_fluid_event_control_change", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_event_control_change on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_event_control_change", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_event_control_change on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_event_pitch_bend")) {
 Object.defineProperty(Module["ready"], "_fluid_event_pitch_bend", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_event_pitch_bend on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_event_pitch_bend", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_event_pitch_bend on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_event_pitch_wheelsens")) {
 Object.defineProperty(Module["ready"], "_fluid_event_pitch_wheelsens", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_event_pitch_wheelsens on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_event_pitch_wheelsens", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_event_pitch_wheelsens on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_event_modulation")) {
 Object.defineProperty(Module["ready"], "_fluid_event_modulation", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_event_modulation on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_event_modulation", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_event_modulation on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_event_sustain")) {
 Object.defineProperty(Module["ready"], "_fluid_event_sustain", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_event_sustain on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_event_sustain", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_event_sustain on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_event_pan")) {
 Object.defineProperty(Module["ready"], "_fluid_event_pan", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_event_pan on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_event_pan", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_event_pan on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_event_volume")) {
 Object.defineProperty(Module["ready"], "_fluid_event_volume", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_event_volume on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_event_volume", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_event_volume on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_event_reverb_send")) {
 Object.defineProperty(Module["ready"], "_fluid_event_reverb_send", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_event_reverb_send on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_event_reverb_send", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_event_reverb_send on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_event_chorus_send")) {
 Object.defineProperty(Module["ready"], "_fluid_event_chorus_send", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_event_chorus_send on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_event_chorus_send", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_event_chorus_send on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_event_key_pressure")) {
 Object.defineProperty(Module["ready"], "_fluid_event_key_pressure", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_event_key_pressure on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_event_key_pressure", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_event_key_pressure on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_event_channel_pressure")) {
 Object.defineProperty(Module["ready"], "_fluid_event_channel_pressure", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_event_channel_pressure on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_event_channel_pressure", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_event_channel_pressure on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_event_system_reset")) {
 Object.defineProperty(Module["ready"], "_fluid_event_system_reset", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_event_system_reset on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_event_system_reset", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_event_system_reset on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_event_unregistering")) {
 Object.defineProperty(Module["ready"], "_fluid_event_unregistering", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_event_unregistering on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_event_unregistering", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_event_unregistering on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_event_scale")) {
 Object.defineProperty(Module["ready"], "_fluid_event_scale", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_event_scale on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_event_scale", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_event_scale on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_event_from_midi_event")) {
 Object.defineProperty(Module["ready"], "_fluid_event_from_midi_event", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_event_from_midi_event on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_event_from_midi_event", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_event_from_midi_event on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_event_get_type")) {
 Object.defineProperty(Module["ready"], "_fluid_event_get_type", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_event_get_type on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_event_get_type", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_event_get_type on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_event_get_source")) {
 Object.defineProperty(Module["ready"], "_fluid_event_get_source", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_event_get_source on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_event_get_source", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_event_get_source on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_event_get_dest")) {
 Object.defineProperty(Module["ready"], "_fluid_event_get_dest", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_event_get_dest on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_event_get_dest", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_event_get_dest on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_event_get_channel")) {
 Object.defineProperty(Module["ready"], "_fluid_event_get_channel", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_event_get_channel on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_event_get_channel", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_event_get_channel on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_event_get_key")) {
 Object.defineProperty(Module["ready"], "_fluid_event_get_key", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_event_get_key on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_event_get_key", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_event_get_key on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_event_get_velocity")) {
 Object.defineProperty(Module["ready"], "_fluid_event_get_velocity", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_event_get_velocity on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_event_get_velocity", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_event_get_velocity on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_event_get_control")) {
 Object.defineProperty(Module["ready"], "_fluid_event_get_control", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_event_get_control on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_event_get_control", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_event_get_control on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_event_get_value")) {
 Object.defineProperty(Module["ready"], "_fluid_event_get_value", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_event_get_value on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_event_get_value", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_event_get_value on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_event_get_program")) {
 Object.defineProperty(Module["ready"], "_fluid_event_get_program", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_event_get_program on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_event_get_program", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_event_get_program on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_event_get_data")) {
 Object.defineProperty(Module["ready"], "_fluid_event_get_data", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_event_get_data on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_event_get_data", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_event_get_data on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_event_get_duration")) {
 Object.defineProperty(Module["ready"], "_fluid_event_get_duration", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_event_get_duration on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_event_get_duration", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_event_get_duration on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_event_get_bank")) {
 Object.defineProperty(Module["ready"], "_fluid_event_get_bank", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_event_get_bank on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_event_get_bank", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_event_get_bank on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_event_get_pitch")) {
 Object.defineProperty(Module["ready"], "_fluid_event_get_pitch", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_event_get_pitch on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_event_get_pitch", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_event_get_pitch on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_event_get_scale")) {
 Object.defineProperty(Module["ready"], "_fluid_event_get_scale", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_event_get_scale on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_event_get_scale", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_event_get_scale on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_event_get_sfont_id")) {
 Object.defineProperty(Module["ready"], "_fluid_event_get_sfont_id", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_event_get_sfont_id on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_event_get_sfont_id", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_event_get_sfont_id on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_new_fluid_audio_driver")) {
 Object.defineProperty(Module["ready"], "_new_fluid_audio_driver", {
  configurable: true,
  get: function() {
   abort("You are getting _new_fluid_audio_driver on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_new_fluid_audio_driver", {
  configurable: true,
  set: function() {
   abort("You are setting _new_fluid_audio_driver on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_new_fluid_audio_driver2")) {
 Object.defineProperty(Module["ready"], "_new_fluid_audio_driver2", {
  configurable: true,
  get: function() {
   abort("You are getting _new_fluid_audio_driver2 on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_new_fluid_audio_driver2", {
  configurable: true,
  set: function() {
   abort("You are setting _new_fluid_audio_driver2 on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_delete_fluid_audio_driver")) {
 Object.defineProperty(Module["ready"], "_delete_fluid_audio_driver", {
  configurable: true,
  get: function() {
   abort("You are getting _delete_fluid_audio_driver on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_delete_fluid_audio_driver", {
  configurable: true,
  set: function() {
   abort("You are setting _delete_fluid_audio_driver on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_audio_driver_register")) {
 Object.defineProperty(Module["ready"], "_fluid_audio_driver_register", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_audio_driver_register on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_audio_driver_register", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_audio_driver_register on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_new_fluid_file_renderer")) {
 Object.defineProperty(Module["ready"], "_new_fluid_file_renderer", {
  configurable: true,
  get: function() {
   abort("You are getting _new_fluid_file_renderer on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_new_fluid_file_renderer", {
  configurable: true,
  set: function() {
   abort("You are setting _new_fluid_file_renderer on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_delete_fluid_file_renderer")) {
 Object.defineProperty(Module["ready"], "_delete_fluid_file_renderer", {
  configurable: true,
  get: function() {
   abort("You are getting _delete_fluid_file_renderer on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_delete_fluid_file_renderer", {
  configurable: true,
  set: function() {
   abort("You are setting _delete_fluid_file_renderer on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_file_renderer_process_block")) {
 Object.defineProperty(Module["ready"], "_fluid_file_renderer_process_block", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_file_renderer_process_block on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_file_renderer_process_block", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_file_renderer_process_block on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fluid_file_set_encoding_quality")) {
 Object.defineProperty(Module["ready"], "_fluid_file_set_encoding_quality", {
  configurable: true,
  get: function() {
   abort("You are getting _fluid_file_set_encoding_quality on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fluid_file_set_encoding_quality", {
  configurable: true,
  set: function() {
   abort("You are setting _fluid_file_set_encoding_quality on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "___stdio_exit")) {
 Object.defineProperty(Module["ready"], "___stdio_exit", {
  configurable: true,
  get: function() {
   abort("You are getting ___stdio_exit on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "___stdio_exit", {
  configurable: true,
  set: function() {
   abort("You are setting ___stdio_exit on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "onRuntimeInitialized")) {
 Object.defineProperty(Module["ready"], "onRuntimeInitialized", {
  configurable: true,
  get: function() {
   abort("You are getting onRuntimeInitialized on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "onRuntimeInitialized", {
  configurable: true,
  set: function() {
   abort("You are setting onRuntimeInitialized on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

var Module = typeof Module !== "undefined" ? Module : {};

var moduleOverrides = Object.assign({}, Module);

var arguments_ = [];

var thisProgram = "./this.program";

var quit_ = (status, toThrow) => {
 throw toThrow;
};

var ENVIRONMENT_IS_WEB = typeof window == "object";

var ENVIRONMENT_IS_WORKER = typeof importScripts == "function";

var ENVIRONMENT_IS_NODE = typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string";

var ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;

if (Module["ENVIRONMENT"]) {
 throw new Error("Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)");
}

var scriptDirectory = "";

function locateFile(path) {
 if (Module["locateFile"]) {
  return Module["locateFile"](path, scriptDirectory);
 }
 return scriptDirectory + path;
}

var read_, readAsync, readBinary, setWindowTitle;

function logExceptionOnExit(e) {
 if (e instanceof ExitStatus) return;
 let toLog = e;
 if (e && typeof e == "object" && e.stack) {
  toLog = [ e, e.stack ];
 }
 err("exiting due to exception: " + toLog);
}

if (ENVIRONMENT_IS_SHELL) {
 if (typeof process == "object" && typeof require === "function" || typeof window == "object" || typeof importScripts == "function") throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");
 if (typeof read != "undefined") {
  read_ = function shell_read(f) {
   return read(f);
  };
 }
 readBinary = function readBinary(f) {
  let data;
  if (typeof readbuffer == "function") {
   return new Uint8Array(readbuffer(f));
  }
  data = read(f, "binary");
  assert(typeof data == "object");
  return data;
 };
 readAsync = function readAsync(f, onload, onerror) {
  setTimeout(() => onload(readBinary(f)), 0);
 };
 if (typeof scriptArgs != "undefined") {
  arguments_ = scriptArgs;
 } else if (typeof arguments != "undefined") {
  arguments_ = arguments;
 }
 if (typeof quit == "function") {
  quit_ = ((status, toThrow) => {
   logExceptionOnExit(toThrow);
   quit(status);
  });
 }
 if (typeof print != "undefined") {
  if (typeof console == "undefined") console = {};
  console.log = print;
  console.warn = console.error = typeof printErr != "undefined" ? printErr : print;
 }
} else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
 if (ENVIRONMENT_IS_WORKER) {
  scriptDirectory = self.location.href;
 } else if (typeof document != "undefined" && document.currentScript) {
  scriptDirectory = document.currentScript.src;
 }
 if (_scriptDir) {
  scriptDirectory = _scriptDir;
 }
 if (scriptDirectory.indexOf("blob:") !== 0) {
  scriptDirectory = scriptDirectory.substr(0, scriptDirectory.replace(/[?#].*/, "").lastIndexOf("/") + 1);
 } else {
  scriptDirectory = "";
 }
 if (!(typeof window == "object" || typeof importScripts == "function")) throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");
 {
  read_ = (url => {
   var xhr = new XMLHttpRequest();
   xhr.open("GET", url, false);
   xhr.send(null);
   return xhr.responseText;
  });
  if (ENVIRONMENT_IS_WORKER) {
   readBinary = (url => {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.responseType = "arraybuffer";
    xhr.send(null);
    return new Uint8Array(xhr.response);
   });
  }
  readAsync = ((url, onload, onerror) => {
   var xhr = new XMLHttpRequest();
   xhr.open("GET", url, true);
   xhr.responseType = "arraybuffer";
   xhr.onload = (() => {
    if (xhr.status == 200 || xhr.status == 0 && xhr.response) {
     onload(xhr.response);
     return;
    }
    onerror();
   });
   xhr.onerror = onerror;
   xhr.send(null);
  });
 }
 setWindowTitle = (title => document.title = title);
} else {
 throw new Error("environment detection error");
}

var out = Module["print"] || console.log.bind(console);

var err = Module["printErr"] || console.warn.bind(console);

Object.assign(Module, moduleOverrides);

moduleOverrides = null;

checkIncomingModuleAPI();

if (Module["arguments"]) arguments_ = Module["arguments"];

legacyModuleProp("arguments", "arguments_");

if (Module["thisProgram"]) thisProgram = Module["thisProgram"];

legacyModuleProp("thisProgram", "thisProgram");

if (Module["quit"]) quit_ = Module["quit"];

legacyModuleProp("quit", "quit_");

assert(typeof Module["memoryInitializerPrefixURL"] == "undefined", "Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead");

assert(typeof Module["pthreadMainPrefixURL"] == "undefined", "Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead");

assert(typeof Module["cdInitializerPrefixURL"] == "undefined", "Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead");

assert(typeof Module["filePackagePrefixURL"] == "undefined", "Module.filePackagePrefixURL option was removed, use Module.locateFile instead");

assert(typeof Module["read"] == "undefined", "Module.read option was removed (modify read_ in JS)");

assert(typeof Module["readAsync"] == "undefined", "Module.readAsync option was removed (modify readAsync in JS)");

assert(typeof Module["readBinary"] == "undefined", "Module.readBinary option was removed (modify readBinary in JS)");

assert(typeof Module["setWindowTitle"] == "undefined", "Module.setWindowTitle option was removed (modify setWindowTitle in JS)");

assert(typeof Module["TOTAL_MEMORY"] == "undefined", "Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY");

legacyModuleProp("read", "read_");

legacyModuleProp("readAsync", "readAsync");

legacyModuleProp("readBinary", "readBinary");

legacyModuleProp("setWindowTitle", "setWindowTitle");

var IDBFS = "IDBFS is no longer included by default; build with -lidbfs.js";

var PROXYFS = "PROXYFS is no longer included by default; build with -lproxyfs.js";

var WORKERFS = "WORKERFS is no longer included by default; build with -lworkerfs.js";

var NODEFS = "NODEFS is no longer included by default; build with -lnodefs.js";

assert(!ENVIRONMENT_IS_NODE, "node environment detected but not enabled at build time.  Add 'node' to `-sENVIRONMENT` to enable.");

assert(!ENVIRONMENT_IS_SHELL, "shell environment detected but not enabled at build time.  Add 'shell' to `-sENVIRONMENT` to enable.");

var STACK_ALIGN = 16;

var POINTER_SIZE = 4;

function getNativeTypeSize(type) {
 switch (type) {
 case "i1":
 case "i8":
 case "u8":
  return 1;

 case "i16":
 case "u16":
  return 2;

 case "i32":
 case "u32":
  return 4;

 case "i64":
 case "u64":
  return 8;

 case "float":
  return 4;

 case "double":
  return 8;

 default:
  {
   if (type[type.length - 1] === "*") {
    return POINTER_SIZE;
   } else if (type[0] === "i") {
    const bits = Number(type.substr(1));
    assert(bits % 8 === 0, "getNativeTypeSize invalid bits " + bits + ", type " + type);
    return bits / 8;
   } else {
    return 0;
   }
  }
 }
}

function warnOnce(text) {
 if (!warnOnce.shown) warnOnce.shown = {};
 if (!warnOnce.shown[text]) {
  warnOnce.shown[text] = 1;
  err(text);
 }
}

function uleb128Encode(n) {
 assert(n < 16384);
 if (n < 128) {
  return [ n ];
 }
 return [ n % 128 | 128, n >> 7 ];
}

function convertJsFunctionToWasm(func, sig) {
 if (typeof WebAssembly.Function == "function") {
  var typeNames = {
   "i": "i32",
   "j": "i64",
   "f": "f32",
   "d": "f64"
  };
  var type = {
   parameters: [],
   results: sig[0] == "v" ? [] : [ typeNames[sig[0]] ]
  };
  for (var i = 1; i < sig.length; ++i) {
   type.parameters.push(typeNames[sig[i]]);
  }
  return new WebAssembly.Function(type, func);
 }
 var typeSection = [ 1, 96 ];
 var sigRet = sig.slice(0, 1);
 var sigParam = sig.slice(1);
 var typeCodes = {
  "i": 127,
  "j": 126,
  "f": 125,
  "d": 124
 };
 typeSection = typeSection.concat(uleb128Encode(sigParam.length));
 for (var i = 0; i < sigParam.length; ++i) {
  typeSection.push(typeCodes[sigParam[i]]);
 }
 if (sigRet == "v") {
  typeSection.push(0);
 } else {
  typeSection = typeSection.concat([ 1, typeCodes[sigRet] ]);
 }
 typeSection = [ 1 ].concat(uleb128Encode(typeSection.length), typeSection);
 var bytes = new Uint8Array([ 0, 97, 115, 109, 1, 0, 0, 0 ].concat(typeSection, [ 2, 7, 1, 1, 101, 1, 102, 0, 0, 7, 5, 1, 1, 102, 0, 0 ]));
 var module = new WebAssembly.Module(bytes);
 var instance = new WebAssembly.Instance(module, {
  "e": {
   "f": func
  }
 });
 var wrappedFunc = instance.exports["f"];
 return wrappedFunc;
}

var freeTableIndexes = [];

var functionsInTableMap;

function getEmptyTableSlot() {
 if (freeTableIndexes.length) {
  return freeTableIndexes.pop();
 }
 try {
  wasmTable.grow(1);
 } catch (err) {
  if (!(err instanceof RangeError)) {
   throw err;
  }
  throw "Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.";
 }
 return wasmTable.length - 1;
}

function updateTableMap(offset, count) {
 for (var i = offset; i < offset + count; i++) {
  var item = getWasmTableEntry(i);
  if (item) {
   functionsInTableMap.set(item, i);
  }
 }
}

function addFunction(func, sig) {
 assert(typeof func != "undefined");
 if (!functionsInTableMap) {
  functionsInTableMap = new WeakMap();
  updateTableMap(0, wasmTable.length);
 }
 if (functionsInTableMap.has(func)) {
  return functionsInTableMap.get(func);
 }
 var ret = getEmptyTableSlot();
 try {
  setWasmTableEntry(ret, func);
 } catch (err) {
  if (!(err instanceof TypeError)) {
   throw err;
  }
  assert(typeof sig != "undefined", "Missing signature argument to addFunction: " + func);
  var wrapped = convertJsFunctionToWasm(func, sig);
  setWasmTableEntry(ret, wrapped);
 }
 functionsInTableMap.set(func, ret);
 return ret;
}

function removeFunction(index) {
 functionsInTableMap.delete(getWasmTableEntry(index));
 freeTableIndexes.push(index);
}

function legacyModuleProp(prop, newName) {
 if (!Object.getOwnPropertyDescriptor(Module, prop)) {
  Object.defineProperty(Module, prop, {
   configurable: true,
   get: function() {
    abort("Module." + prop + " has been replaced with plain " + newName + " (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
   }
  });
 }
}

function ignoredModuleProp(prop) {
 if (Object.getOwnPropertyDescriptor(Module, prop)) {
  abort("`Module." + prop + "` was supplied but `" + prop + "` not included in INCOMING_MODULE_JS_API");
 }
}

function unexportedMessage(sym, isFSSybol) {
 var msg = "'" + sym + "' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)";
 if (isFSSybol) {
  msg += ". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you";
 }
 return msg;
}

function unexportedRuntimeSymbol(sym, isFSSybol) {
 if (!Object.getOwnPropertyDescriptor(Module, sym)) {
  Object.defineProperty(Module, sym, {
   configurable: true,
   get: function() {
    abort(unexportedMessage(sym, isFSSybol));
   }
  });
 }
}

function unexportedRuntimeFunction(sym, isFSSybol) {
 if (!Object.getOwnPropertyDescriptor(Module, sym)) {
  Module[sym] = (() => abort(unexportedMessage(sym, isFSSybol)));
 }
}

var tempRet0 = 0;

var setTempRet0 = value => {
 tempRet0 = value;
};

var getTempRet0 = () => tempRet0;

var wasmBinary;

if (Module["wasmBinary"]) wasmBinary = Module["wasmBinary"];

legacyModuleProp("wasmBinary", "wasmBinary");

var noExitRuntime = Module["noExitRuntime"] || true;

legacyModuleProp("noExitRuntime", "noExitRuntime");

if (typeof WebAssembly != "object") {
 abort("no native wasm support detected");
}

function setValue(ptr, value, type = "i8", noSafe) {
 if (type.endsWith("*")) type = "i32";
 if (noSafe) {
  switch (type) {
  case "i1":
   HEAP8[ptr >> 0] = value;
   break;

  case "i8":
   HEAP8[ptr >> 0] = value;
   break;

  case "i16":
   HEAP16[ptr >> 1] = value;
   break;

  case "i32":
   HEAP32[ptr >> 2] = value;
   break;

  case "i64":
   tempI64 = [ value >>> 0, (tempDouble = value, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math.min(+Math.floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0) ], 
   HEAP32[ptr >> 2] = tempI64[0], HEAP32[ptr + 4 >> 2] = tempI64[1];
   break;

  case "float":
   HEAPF32[ptr >> 2] = value;
   break;

  case "double":
   HEAPF64[ptr >> 3] = value;
   break;

  default:
   abort("invalid type for setValue: " + type);
  }
  return;
 }
 switch (type) {
 case "i1":
  SAFE_HEAP_STORE(ptr | 0, value | 0, 1);
  break;

 case "i8":
  SAFE_HEAP_STORE(ptr | 0, value | 0, 1);
  break;

 case "i16":
  SAFE_HEAP_STORE(ptr | 0, value | 0, 2);
  break;

 case "i32":
  SAFE_HEAP_STORE(ptr | 0, value | 0, 4);
  break;

 case "i64":
  tempI64 = [ value >>> 0, (tempDouble = value, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math.min(+Math.floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0) ], 
  SAFE_HEAP_STORE(ptr | 0, tempI64[0] | 0, 4), SAFE_HEAP_STORE(ptr + 4 | 0, tempI64[1] | 0, 4);
  break;

 case "float":
  SAFE_HEAP_STORE_D(ptr | 0, Math.fround(value), 4);
  break;

 case "double":
  SAFE_HEAP_STORE_D(ptr | 0, +value, 8);
  break;

 default:
  abort("invalid type for setValue: " + type);
 }
}

function getValue(ptr, type = "i8", noSafe) {
 if (type.endsWith("*")) type = "i32";
 if (noSafe) {
  switch (type) {
  case "i1":
   return HEAP8[ptr >> 0];

  case "i8":
   return HEAP8[ptr >> 0];

  case "i16":
   return HEAP16[ptr >> 1];

  case "i32":
   return HEAP32[ptr >> 2];

  case "i64":
   return HEAP32[ptr >> 2];

  case "float":
   return HEAPF32[ptr >> 2];

  case "double":
   return Number(HEAPF64[ptr >> 3]);

  default:
   abort("invalid type for getValue: " + type);
  }
  return;
 }
 switch (type) {
 case "i1":
  return SAFE_HEAP_LOAD(ptr | 0, 1, 0) | 0;

 case "i8":
  return SAFE_HEAP_LOAD(ptr | 0, 1, 0) | 0;

 case "i16":
  return SAFE_HEAP_LOAD(ptr | 0, 2, 0) | 0;

 case "i32":
  return SAFE_HEAP_LOAD(ptr | 0, 4, 0) | 0;

 case "i64":
  return SAFE_HEAP_LOAD(ptr | 0, 8, 0) | 0;

 case "float":
  return Math.fround(SAFE_HEAP_LOAD_D(ptr | 0, 4, 0));

 case "double":
  return +SAFE_HEAP_LOAD_D(ptr | 0, 8, 0);

 default:
  abort("invalid type for getValue: " + type);
 }
}

function getSafeHeapType(bytes, isFloat) {
 switch (bytes) {
 case 1:
  return "i8";

 case 2:
  return "i16";

 case 4:
  return isFloat ? "float" : "i32";

 case 8:
  return isFloat ? "double" : "i64";

 default:
  assert(0);
 }
}

function SAFE_HEAP_STORE(dest, value, bytes, isFloat) {
 if (dest <= 0) abort("segmentation fault storing " + bytes + " bytes to address " + dest);
 if (dest % bytes !== 0) abort("alignment error storing to address " + dest + ", which was expected to be aligned to a multiple of " + bytes);
 if (runtimeInitialized) {
  var brk = _sbrk() >>> 0;
  if (dest + bytes > brk) abort("segmentation fault, exceeded the top of the available dynamic heap when storing " + bytes + " bytes to address " + dest + ". DYNAMICTOP=" + brk);
  assert(brk >= _emscripten_stack_get_base());
  assert(brk <= HEAP8.length);
 }
 setValue(dest, value, getSafeHeapType(bytes, isFloat), 1);
 return value;
}

function SAFE_HEAP_STORE_D(dest, value, bytes) {
 return SAFE_HEAP_STORE(dest, value, bytes, true);
}

function SAFE_HEAP_LOAD(dest, bytes, unsigned, isFloat) {
 if (dest <= 0) abort("segmentation fault loading " + bytes + " bytes from address " + dest);
 if (dest % bytes !== 0) abort("alignment error loading from address " + dest + ", which was expected to be aligned to a multiple of " + bytes);
 if (runtimeInitialized) {
  var brk = _sbrk() >>> 0;
  if (dest + bytes > brk) abort("segmentation fault, exceeded the top of the available dynamic heap when loading " + bytes + " bytes from address " + dest + ". DYNAMICTOP=" + brk);
  assert(brk >= _emscripten_stack_get_base());
  assert(brk <= HEAP8.length);
 }
 var type = getSafeHeapType(bytes, isFloat);
 var ret = getValue(dest, type, 1);
 if (unsigned) ret = unSign(ret, parseInt(type.substr(1), 10));
 return ret;
}

function SAFE_HEAP_LOAD_D(dest, bytes, unsigned) {
 return SAFE_HEAP_LOAD(dest, bytes, unsigned, true);
}

function SAFE_FT_MASK(value, mask) {
 var ret = value & mask;
 if (ret !== value) {
  abort("Function table mask error: function pointer is " + value + " which is masked by " + mask + ", the likely cause of this is that the function pointer is being called by the wrong type.");
 }
 return ret;
}

function segfault() {
 abort("segmentation fault");
}

function alignfault() {
 abort("alignment fault");
}

var wasmMemory;

var ABORT = false;

var EXITSTATUS;

function assert(condition, text) {
 if (!condition) {
  abort("Assertion failed" + (text ? ": " + text : ""));
 }
}

function getCFunc(ident) {
 var func = Module["_" + ident];
 assert(func, "Cannot call unknown function " + ident + ", make sure it is exported");
 return func;
}

function ccall(ident, returnType, argTypes, args, opts) {
 var toC = {
  "string": function(str) {
   var ret = 0;
   if (str !== null && str !== undefined && str !== 0) {
    var len = (str.length << 2) + 1;
    ret = stackAlloc(len);
    stringToUTF8(str, ret, len);
   }
   return ret;
  },
  "array": function(arr) {
   var ret = stackAlloc(arr.length);
   writeArrayToMemory(arr, ret);
   return ret;
  }
 };
 function convertReturnValue(ret) {
  if (returnType === "string") return UTF8ToString(ret);
  if (returnType === "boolean") return Boolean(ret);
  return ret;
 }
 var func = getCFunc(ident);
 var cArgs = [];
 var stack = 0;
 assert(returnType !== "array", 'Return type should not be "array".');
 if (args) {
  for (var i = 0; i < args.length; i++) {
   var converter = toC[argTypes[i]];
   if (converter) {
    if (stack === 0) stack = stackSave();
    cArgs[i] = converter(args[i]);
   } else {
    cArgs[i] = args[i];
   }
  }
 }
 var ret = func.apply(null, cArgs);
 function onDone(ret) {
  if (stack !== 0) stackRestore(stack);
  return convertReturnValue(ret);
 }
 ret = onDone(ret);
 return ret;
}

function cwrap(ident, returnType, argTypes, opts) {
 return function() {
  return ccall(ident, returnType, argTypes, arguments, opts);
 };
}

var ALLOC_NORMAL = 0;

var ALLOC_STACK = 1;

function allocate(slab, allocator) {
 var ret;
 assert(typeof allocator == "number", "allocate no longer takes a type argument");
 assert(typeof slab != "number", "allocate no longer takes a number as arg0");
 if (allocator == ALLOC_STACK) {
  ret = stackAlloc(slab.length);
 } else {
  ret = _malloc(slab.length);
 }
 if (!slab.subarray && !slab.slice) {
  slab = new Uint8Array(slab);
 }
 HEAPU8.set(slab, ret);
 return ret;
}

var UTF8Decoder = typeof TextDecoder != "undefined" ? new TextDecoder("utf8") : undefined;

function UTF8ArrayToString(heapOrArray, idx, maxBytesToRead) {
 var endIdx = idx + maxBytesToRead;
 var endPtr = idx;
 while (heapOrArray[endPtr] && !(endPtr >= endIdx)) ++endPtr;
 if (endPtr - idx > 16 && heapOrArray.buffer && UTF8Decoder) {
  return UTF8Decoder.decode(heapOrArray.subarray(idx, endPtr));
 } else {
  var str = "";
  while (idx < endPtr) {
   var u0 = heapOrArray[idx++];
   if (!(u0 & 128)) {
    str += String.fromCharCode(u0);
    continue;
   }
   var u1 = heapOrArray[idx++] & 63;
   if ((u0 & 224) == 192) {
    str += String.fromCharCode((u0 & 31) << 6 | u1);
    continue;
   }
   var u2 = heapOrArray[idx++] & 63;
   if ((u0 & 240) == 224) {
    u0 = (u0 & 15) << 12 | u1 << 6 | u2;
   } else {
    if ((u0 & 248) != 240) warnOnce("Invalid UTF-8 leading byte 0x" + u0.toString(16) + " encountered when deserializing a UTF-8 string in wasm memory to a JS string!");
    u0 = (u0 & 7) << 18 | u1 << 12 | u2 << 6 | heapOrArray[idx++] & 63;
   }
   if (u0 < 65536) {
    str += String.fromCharCode(u0);
   } else {
    var ch = u0 - 65536;
    str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
   }
  }
 }
 return str;
}

function UTF8ToString(ptr, maxBytesToRead) {
 return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : "";
}

function stringToUTF8Array(str, heap, outIdx, maxBytesToWrite) {
 if (!(maxBytesToWrite > 0)) return 0;
 var startIdx = outIdx;
 var endIdx = outIdx + maxBytesToWrite - 1;
 for (var i = 0; i < str.length; ++i) {
  var u = str.charCodeAt(i);
  if (u >= 55296 && u <= 57343) {
   var u1 = str.charCodeAt(++i);
   u = 65536 + ((u & 1023) << 10) | u1 & 1023;
  }
  if (u <= 127) {
   if (outIdx >= endIdx) break;
   heap[outIdx++] = u;
  } else if (u <= 2047) {
   if (outIdx + 1 >= endIdx) break;
   heap[outIdx++] = 192 | u >> 6;
   heap[outIdx++] = 128 | u & 63;
  } else if (u <= 65535) {
   if (outIdx + 2 >= endIdx) break;
   heap[outIdx++] = 224 | u >> 12;
   heap[outIdx++] = 128 | u >> 6 & 63;
   heap[outIdx++] = 128 | u & 63;
  } else {
   if (outIdx + 3 >= endIdx) break;
   if (u > 1114111) warnOnce("Invalid Unicode code point 0x" + u.toString(16) + " encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF).");
   heap[outIdx++] = 240 | u >> 18;
   heap[outIdx++] = 128 | u >> 12 & 63;
   heap[outIdx++] = 128 | u >> 6 & 63;
   heap[outIdx++] = 128 | u & 63;
  }
 }
 heap[outIdx] = 0;
 return outIdx - startIdx;
}

function stringToUTF8(str, outPtr, maxBytesToWrite) {
 assert(typeof maxBytesToWrite == "number", "stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!");
 return stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite);
}

function lengthBytesUTF8(str) {
 var len = 0;
 for (var i = 0; i < str.length; ++i) {
  var u = str.charCodeAt(i);
  if (u >= 55296 && u <= 57343) u = 65536 + ((u & 1023) << 10) | str.charCodeAt(++i) & 1023;
  if (u <= 127) ++len; else if (u <= 2047) len += 2; else if (u <= 65535) len += 3; else len += 4;
 }
 return len;
}

function AsciiToString(ptr) {
 var str = "";
 while (1) {
  var ch = SAFE_HEAP_LOAD(ptr++ | 0, 1, 1) >>> 0;
  if (!ch) return str;
  str += String.fromCharCode(ch);
 }
}

function stringToAscii(str, outPtr) {
 return writeAsciiToMemory(str, outPtr, false);
}

var UTF16Decoder = typeof TextDecoder != "undefined" ? new TextDecoder("utf-16le") : undefined;

function UTF16ToString(ptr, maxBytesToRead) {
 assert(ptr % 2 == 0, "Pointer passed to UTF16ToString must be aligned to two bytes!");
 var endPtr = ptr;
 var idx = endPtr >> 1;
 var maxIdx = idx + maxBytesToRead / 2;
 while (!(idx >= maxIdx) && SAFE_HEAP_LOAD(idx * 2, 2, 1)) ++idx;
 endPtr = idx << 1;
 if (endPtr - ptr > 32 && UTF16Decoder) {
  return UTF16Decoder.decode(HEAPU8.subarray(ptr, endPtr));
 } else {
  var str = "";
  for (var i = 0; !(i >= maxBytesToRead / 2); ++i) {
   var codeUnit = SAFE_HEAP_LOAD(ptr + i * 2 | 0, 2, 0) | 0;
   if (codeUnit == 0) break;
   str += String.fromCharCode(codeUnit);
  }
  return str;
 }
}

function stringToUTF16(str, outPtr, maxBytesToWrite) {
 assert(outPtr % 2 == 0, "Pointer passed to stringToUTF16 must be aligned to two bytes!");
 assert(typeof maxBytesToWrite == "number", "stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!");
 if (maxBytesToWrite === undefined) {
  maxBytesToWrite = 2147483647;
 }
 if (maxBytesToWrite < 2) return 0;
 maxBytesToWrite -= 2;
 var startPtr = outPtr;
 var numCharsToWrite = maxBytesToWrite < str.length * 2 ? maxBytesToWrite / 2 : str.length;
 for (var i = 0; i < numCharsToWrite; ++i) {
  var codeUnit = str.charCodeAt(i);
  SAFE_HEAP_STORE(outPtr | 0, codeUnit | 0, 2);
  outPtr += 2;
 }
 SAFE_HEAP_STORE(outPtr | 0, 0 | 0, 2);
 return outPtr - startPtr;
}

function lengthBytesUTF16(str) {
 return str.length * 2;
}

function UTF32ToString(ptr, maxBytesToRead) {
 assert(ptr % 4 == 0, "Pointer passed to UTF32ToString must be aligned to four bytes!");
 var i = 0;
 var str = "";
 while (!(i >= maxBytesToRead / 4)) {
  var utf32 = SAFE_HEAP_LOAD(ptr + i * 4 | 0, 4, 0) | 0;
  if (utf32 == 0) break;
  ++i;
  if (utf32 >= 65536) {
   var ch = utf32 - 65536;
   str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
  } else {
   str += String.fromCharCode(utf32);
  }
 }
 return str;
}

function stringToUTF32(str, outPtr, maxBytesToWrite) {
 assert(outPtr % 4 == 0, "Pointer passed to stringToUTF32 must be aligned to four bytes!");
 assert(typeof maxBytesToWrite == "number", "stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!");
 if (maxBytesToWrite === undefined) {
  maxBytesToWrite = 2147483647;
 }
 if (maxBytesToWrite < 4) return 0;
 var startPtr = outPtr;
 var endPtr = startPtr + maxBytesToWrite - 4;
 for (var i = 0; i < str.length; ++i) {
  var codeUnit = str.charCodeAt(i);
  if (codeUnit >= 55296 && codeUnit <= 57343) {
   var trailSurrogate = str.charCodeAt(++i);
   codeUnit = 65536 + ((codeUnit & 1023) << 10) | trailSurrogate & 1023;
  }
  SAFE_HEAP_STORE(outPtr | 0, codeUnit | 0, 4);
  outPtr += 4;
  if (outPtr + 4 > endPtr) break;
 }
 SAFE_HEAP_STORE(outPtr | 0, 0 | 0, 4);
 return outPtr - startPtr;
}

function lengthBytesUTF32(str) {
 var len = 0;
 for (var i = 0; i < str.length; ++i) {
  var codeUnit = str.charCodeAt(i);
  if (codeUnit >= 55296 && codeUnit <= 57343) ++i;
  len += 4;
 }
 return len;
}

function allocateUTF8(str) {
 var size = lengthBytesUTF8(str) + 1;
 var ret = _malloc(size);
 if (ret) stringToUTF8Array(str, HEAP8, ret, size);
 return ret;
}

function allocateUTF8OnStack(str) {
 var size = lengthBytesUTF8(str) + 1;
 var ret = stackAlloc(size);
 stringToUTF8Array(str, HEAP8, ret, size);
 return ret;
}

function writeStringToMemory(string, buffer, dontAddNull) {
 warnOnce("writeStringToMemory is deprecated and should not be called! Use stringToUTF8() instead!");
 var lastChar, end;
 if (dontAddNull) {
  end = buffer + lengthBytesUTF8(string);
  lastChar = SAFE_HEAP_LOAD(end, 1, 0);
 }
 stringToUTF8(string, buffer, Infinity);
 if (dontAddNull) SAFE_HEAP_STORE(end, lastChar, 1);
}

function writeArrayToMemory(array, buffer) {
 assert(array.length >= 0, "writeArrayToMemory array must have a length (should be an array or typed array)");
 HEAP8.set(array, buffer);
}

function writeAsciiToMemory(str, buffer, dontAddNull) {
 for (var i = 0; i < str.length; ++i) {
  assert(str.charCodeAt(i) === (str.charCodeAt(i) & 255));
  SAFE_HEAP_STORE(buffer++ | 0, str.charCodeAt(i) | 0, 1);
 }
 if (!dontAddNull) SAFE_HEAP_STORE(buffer | 0, 0 | 0, 1);
}

var HEAP, buffer, HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;

function updateGlobalBufferAndViews(buf) {
 buffer = buf;
 Module["HEAP8"] = HEAP8 = new Int8Array(buf);
 Module["HEAP16"] = HEAP16 = new Int16Array(buf);
 Module["HEAP32"] = HEAP32 = new Int32Array(buf);
 Module["HEAPU8"] = HEAPU8 = new Uint8Array(buf);
 Module["HEAPU16"] = HEAPU16 = new Uint16Array(buf);
 Module["HEAPU32"] = HEAPU32 = new Uint32Array(buf);
 Module["HEAPF32"] = HEAPF32 = new Float32Array(buf);
 Module["HEAPF64"] = HEAPF64 = new Float64Array(buf);
}

var TOTAL_STACK = 5242880;

if (Module["TOTAL_STACK"]) assert(TOTAL_STACK === Module["TOTAL_STACK"], "the stack size can no longer be determined at runtime");

var INITIAL_MEMORY = Module["INITIAL_MEMORY"] || 67108864;

legacyModuleProp("INITIAL_MEMORY", "INITIAL_MEMORY");

assert(INITIAL_MEMORY >= TOTAL_STACK, "INITIAL_MEMORY should be larger than TOTAL_STACK, was " + INITIAL_MEMORY + "! (TOTAL_STACK=" + TOTAL_STACK + ")");

assert(typeof Int32Array != "undefined" && typeof Float64Array !== "undefined" && Int32Array.prototype.subarray != undefined && Int32Array.prototype.set != undefined, "JS engine does not provide full typed array support");

assert(!Module["wasmMemory"], "Use of `wasmMemory` detected.  Use -sIMPORTED_MEMORY to define wasmMemory externally");

assert(INITIAL_MEMORY == 67108864, "Detected runtime INITIAL_MEMORY setting.  Use -sIMPORTED_MEMORY to define wasmMemory dynamically");

var wasmTable;

function writeStackCookie() {
 var max = _emscripten_stack_get_end();
 assert((max & 3) == 0);
 SAFE_HEAP_STORE(max | 0, 34821223 | 0, 4);
 SAFE_HEAP_STORE(max + 4 | 0, 2310721022 | 0, 4);
}

function checkStackCookie() {
 if (ABORT) return;
 var max = _emscripten_stack_get_end();
 var cookie1 = SAFE_HEAP_LOAD(max | 0, 4, 1) >>> 0;
 var cookie2 = SAFE_HEAP_LOAD(max + 4 | 0, 4, 1) >>> 0;
 if (cookie1 != 34821223 || cookie2 != 2310721022) {
  abort("Stack overflow! Stack cookie has been overwritten, expected hex dwords 0x89BACDFE and 0x2135467, but received 0x" + cookie2.toString(16) + " 0x" + cookie1.toString(16));
 }
}

(function() {
 var h16 = new Int16Array(1);
 var h8 = new Int8Array(h16.buffer);
 h16[0] = 25459;
 if (h8[0] !== 115 || h8[1] !== 99) throw "Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)";
})();

var __ATPRERUN__ = [];

var __ATINIT__ = [];

var __ATEXIT__ = [];

var __ATPOSTRUN__ = [];

var runtimeInitialized = false;

function keepRuntimeAlive() {
 return noExitRuntime;
}

function preRun() {
 if (Module["preRun"]) {
  if (typeof Module["preRun"] == "function") Module["preRun"] = [ Module["preRun"] ];
  while (Module["preRun"].length) {
   addOnPreRun(Module["preRun"].shift());
  }
 }
 callRuntimeCallbacks(__ATPRERUN__);
}

function initRuntime() {
 checkStackCookie();
 assert(!runtimeInitialized);
 runtimeInitialized = true;
 if (!Module["noFSInit"] && !FS.init.initialized) FS.init();
 FS.ignorePermissions = false;
 TTY.init();
 callRuntimeCallbacks(__ATINIT__);
}

function postRun() {
 checkStackCookie();
 if (Module["postRun"]) {
  if (typeof Module["postRun"] == "function") Module["postRun"] = [ Module["postRun"] ];
  while (Module["postRun"].length) {
   addOnPostRun(Module["postRun"].shift());
  }
 }
 callRuntimeCallbacks(__ATPOSTRUN__);
}

function addOnPreRun(cb) {
 __ATPRERUN__.unshift(cb);
}

function addOnInit(cb) {
 __ATINIT__.unshift(cb);
}

function addOnExit(cb) {}

function addOnPostRun(cb) {
 __ATPOSTRUN__.unshift(cb);
}

assert(Math.imul, "This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");

assert(Math.fround, "This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");

assert(Math.clz32, "This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");

assert(Math.trunc, "This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");

var runDependencies = 0;

var runDependencyWatcher = null;

var dependenciesFulfilled = null;

var runDependencyTracking = {};

function getUniqueRunDependency(id) {
 var orig = id;
 while (1) {
  if (!runDependencyTracking[id]) return id;
  id = orig + Math.random();
 }
}

function addRunDependency(id) {
 runDependencies++;
 if (Module["monitorRunDependencies"]) {
  Module["monitorRunDependencies"](runDependencies);
 }
 if (id) {
  assert(!runDependencyTracking[id]);
  runDependencyTracking[id] = 1;
  if (runDependencyWatcher === null && typeof setInterval != "undefined") {
   runDependencyWatcher = setInterval(function() {
    if (ABORT) {
     clearInterval(runDependencyWatcher);
     runDependencyWatcher = null;
     return;
    }
    var shown = false;
    for (var dep in runDependencyTracking) {
     if (!shown) {
      shown = true;
      err("still waiting on run dependencies:");
     }
     err("dependency: " + dep);
    }
    if (shown) {
     err("(end of list)");
    }
   }, 1e4);
  }
 } else {
  err("warning: run dependency added without ID");
 }
}

function removeRunDependency(id) {
 runDependencies--;
 if (Module["monitorRunDependencies"]) {
  Module["monitorRunDependencies"](runDependencies);
 }
 if (id) {
  assert(runDependencyTracking[id]);
  delete runDependencyTracking[id];
 } else {
  err("warning: run dependency removed without ID");
 }
 if (runDependencies == 0) {
  if (runDependencyWatcher !== null) {
   clearInterval(runDependencyWatcher);
   runDependencyWatcher = null;
  }
  if (dependenciesFulfilled) {
   var callback = dependenciesFulfilled;
   dependenciesFulfilled = null;
   callback();
  }
 }
}

function abort(what) {
 {
  if (Module["onAbort"]) {
   Module["onAbort"](what);
  }
 }
 what = "Aborted(" + what + ")";
 err(what);
 ABORT = true;
 EXITSTATUS = 1;
 var e = new WebAssembly.RuntimeError(what);
 readyPromiseReject(e);
 throw e;
}

var dataURIPrefix = "data:application/octet-stream;base64,";

function isDataURI(filename) {
 return filename.startsWith(dataURIPrefix);
}

function isFileURI(filename) {
 return filename.startsWith("file://");
}

function createExportWrapper(name, fixedasm) {
 return function() {
  var displayName = name;
  var asm = fixedasm;
  if (!fixedasm) {
   asm = Module["asm"];
  }
  assert(runtimeInitialized, "native function `" + displayName + "` called before runtime initialization");
  if (!asm[name]) {
   assert(asm[name], "exported native function `" + displayName + "` not found");
  }
  return asm[name].apply(null, arguments);
 };
}

var wasmBinaryFile;

wasmBinaryFile = "libfluidsynth-2.3.0-debug.wasm";

if (!isDataURI(wasmBinaryFile)) {
 wasmBinaryFile = locateFile(wasmBinaryFile);
}

function getBinary(file) {
 try {
  if (file == wasmBinaryFile && wasmBinary) {
   return new Uint8Array(wasmBinary);
  }
  if (readBinary) {
   return readBinary(file);
  } else {
   throw "both async and sync fetching of the wasm failed";
  }
 } catch (err) {
  abort(err);
 }
}

function getBinaryPromise() {
 if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER)) {
  if (typeof fetch == "function") {
   return fetch(wasmBinaryFile, {
    credentials: "same-origin"
   }).then(function(response) {
    if (!response["ok"]) {
     throw "failed to load wasm binary file at '" + wasmBinaryFile + "'";
    }
    return response["arrayBuffer"]();
   }).catch(function() {
    return getBinary(wasmBinaryFile);
   });
  }
 }
 return Promise.resolve().then(function() {
  return getBinary(wasmBinaryFile);
 });
}

function createWasm() {
 var info = {
  "env": asmLibraryArg,
  "wasi_snapshot_preview1": asmLibraryArg
 };
 function receiveInstance(instance, module) {
  var exports = instance.exports;
  Module["asm"] = exports;
  wasmMemory = Module["asm"]["memory"];
  assert(wasmMemory, "memory not found in wasm exports");
  updateGlobalBufferAndViews(wasmMemory.buffer);
  wasmTable = Module["asm"]["__indirect_function_table"];
  assert(wasmTable, "table not found in wasm exports");
  addOnInit(Module["asm"]["__wasm_call_ctors"]);
  removeRunDependency("wasm-instantiate");
 }
 addRunDependency("wasm-instantiate");
 var trueModule = Module;
 function receiveInstantiationResult(result) {
  assert(Module === trueModule, "the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?");
  trueModule = null;
  receiveInstance(result["instance"]);
 }
 function instantiateArrayBuffer(receiver) {
  return getBinaryPromise().then(function(binary) {
   return WebAssembly.instantiate(binary, info);
  }).then(function(instance) {
   return instance;
  }).then(receiver, function(reason) {
   err("failed to asynchronously prepare wasm: " + reason);
   if (isFileURI(wasmBinaryFile)) {
    err("warning: Loading from a file URI (" + wasmBinaryFile + ") is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing");
   }
   abort(reason);
  });
 }
 function instantiateAsync() {
  if (!wasmBinary && typeof WebAssembly.instantiateStreaming == "function" && !isDataURI(wasmBinaryFile) && typeof fetch == "function") {
   return fetch(wasmBinaryFile, {
    credentials: "same-origin"
   }).then(function(response) {
    var result = WebAssembly.instantiateStreaming(response, info);
    return result.then(receiveInstantiationResult, function(reason) {
     err("wasm streaming compile failed: " + reason);
     err("falling back to ArrayBuffer instantiation");
     return instantiateArrayBuffer(receiveInstantiationResult);
    });
   });
  } else {
   return instantiateArrayBuffer(receiveInstantiationResult);
  }
 }
 if (Module["instantiateWasm"]) {
  try {
   var exports = Module["instantiateWasm"](info, receiveInstance);
   return exports;
  } catch (e) {
   err("Module.instantiateWasm callback failed with error: " + e);
   return false;
  }
 }
 instantiateAsync().catch(readyPromiseReject);
 return {};
}

var tempDouble;

var tempI64;

var ASM_CONSTS = {};

function callRuntimeCallbacks(callbacks) {
 while (callbacks.length > 0) {
  var callback = callbacks.shift();
  if (typeof callback == "function") {
   callback(Module);
   continue;
  }
  var func = callback.func;
  if (typeof func == "number") {
   if (callback.arg === undefined) {
    getWasmTableEntry(func)();
   } else {
    getWasmTableEntry(func)(callback.arg);
   }
  } else {
   func(callback.arg === undefined ? null : callback.arg);
  }
 }
}

function withStackSave(f) {
 var stack = stackSave();
 var ret = f();
 stackRestore(stack);
 return ret;
}

function demangle(func) {
 warnOnce("warning: build with -sDEMANGLE_SUPPORT to link in libcxxabi demangling");
 return func;
}

function demangleAll(text) {
 var regex = /\b_Z[\w\d_]+/g;
 return text.replace(regex, function(x) {
  var y = demangle(x);
  return x === y ? x : y + " [" + x + "]";
 });
}

function getWasmTableEntry(funcPtr) {
 return wasmTable.get(funcPtr);
}

function handleException(e) {
 if (e instanceof ExitStatus || e == "unwind") {
  return EXITSTATUS;
 }
 quit_(1, e);
}

function jsStackTrace() {
 var error = new Error();
 if (!error.stack) {
  try {
   throw new Error();
  } catch (e) {
   error = e;
  }
  if (!error.stack) {
   return "(no stack trace available)";
  }
 }
 return error.stack.toString();
}

function setWasmTableEntry(idx, func) {
 wasmTable.set(idx, func);
}

function stackTrace() {
 var js = jsStackTrace();
 if (Module["extraStackTrace"]) js += "\n" + Module["extraStackTrace"]();
 return demangleAll(js);
}

function unSign(value, bits) {
 if (value >= 0) {
  return value;
 }
 return bits <= 32 ? 2 * Math.abs(1 << bits - 1) + value : Math.pow(2, bits) + value;
}

function ___cxa_allocate_exception(size) {
 return _malloc(size + 24) + 24;
}

function ExceptionInfo(excPtr) {
 this.excPtr = excPtr;
 this.ptr = excPtr - 24;
 this.set_type = function(type) {
  SAFE_HEAP_STORE(this.ptr + 4 | 0, type | 0, 4);
 };
 this.get_type = function() {
  return SAFE_HEAP_LOAD(this.ptr + 4 | 0, 4, 0) | 0;
 };
 this.set_destructor = function(destructor) {
  SAFE_HEAP_STORE(this.ptr + 8 | 0, destructor | 0, 4);
 };
 this.get_destructor = function() {
  return SAFE_HEAP_LOAD(this.ptr + 8 | 0, 4, 0) | 0;
 };
 this.set_refcount = function(refcount) {
  SAFE_HEAP_STORE(this.ptr | 0, refcount | 0, 4);
 };
 this.set_caught = function(caught) {
  caught = caught ? 1 : 0;
  SAFE_HEAP_STORE(this.ptr + 12 | 0, caught | 0, 1);
 };
 this.get_caught = function() {
  return (SAFE_HEAP_LOAD(this.ptr + 12 | 0, 1, 0) | 0) != 0;
 };
 this.set_rethrown = function(rethrown) {
  rethrown = rethrown ? 1 : 0;
  SAFE_HEAP_STORE(this.ptr + 13 | 0, rethrown | 0, 1);
 };
 this.get_rethrown = function() {
  return (SAFE_HEAP_LOAD(this.ptr + 13 | 0, 1, 0) | 0) != 0;
 };
 this.init = function(type, destructor) {
  this.set_adjusted_ptr(0);
  this.set_type(type);
  this.set_destructor(destructor);
  this.set_refcount(0);
  this.set_caught(false);
  this.set_rethrown(false);
 };
 this.add_ref = function() {
  var value = SAFE_HEAP_LOAD(this.ptr | 0, 4, 0) | 0;
  SAFE_HEAP_STORE(this.ptr | 0, value + 1 | 0, 4);
 };
 this.release_ref = function() {
  var prev = SAFE_HEAP_LOAD(this.ptr | 0, 4, 0) | 0;
  SAFE_HEAP_STORE(this.ptr | 0, prev - 1 | 0, 4);
  assert(prev > 0);
  return prev === 1;
 };
 this.set_adjusted_ptr = function(adjustedPtr) {
  SAFE_HEAP_STORE(this.ptr + 16 | 0, adjustedPtr | 0, 4);
 };
 this.get_adjusted_ptr = function() {
  return SAFE_HEAP_LOAD(this.ptr + 16 | 0, 4, 0) | 0;
 };
 this.get_exception_ptr = function() {
  var isPointer = ___cxa_is_pointer_type(this.get_type());
  if (isPointer) {
   return SAFE_HEAP_LOAD(this.excPtr | 0, 4, 0) | 0;
  }
  var adjusted = this.get_adjusted_ptr();
  if (adjusted !== 0) return adjusted;
  return this.excPtr;
 };
}

var exceptionLast = 0;

var uncaughtExceptionCount = 0;

function ___cxa_throw(ptr, type, destructor) {
 var info = new ExceptionInfo(ptr);
 info.init(type, destructor);
 exceptionLast = ptr;
 uncaughtExceptionCount++;
 throw ptr + " - Exception catching is disabled, this exception cannot be caught. Compile with -sNO_DISABLE_EXCEPTION_CATCHING or -sEXCEPTION_CATCHING_ALLOWED=[..] to catch.";
}

function setErrNo(value) {
 SAFE_HEAP_STORE(___errno_location() | 0, value | 0, 4);
 return value;
}

var PATH = {
 isAbs: path => path.charAt(0) === "/",
 splitPath: filename => {
  var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
  return splitPathRe.exec(filename).slice(1);
 },
 normalizeArray: (parts, allowAboveRoot) => {
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
   var last = parts[i];
   if (last === ".") {
    parts.splice(i, 1);
   } else if (last === "..") {
    parts.splice(i, 1);
    up++;
   } else if (up) {
    parts.splice(i, 1);
    up--;
   }
  }
  if (allowAboveRoot) {
   for (;up; up--) {
    parts.unshift("..");
   }
  }
  return parts;
 },
 normalize: path => {
  var isAbsolute = PATH.isAbs(path), trailingSlash = path.substr(-1) === "/";
  path = PATH.normalizeArray(path.split("/").filter(p => !!p), !isAbsolute).join("/");
  if (!path && !isAbsolute) {
   path = ".";
  }
  if (path && trailingSlash) {
   path += "/";
  }
  return (isAbsolute ? "/" : "") + path;
 },
 dirname: path => {
  var result = PATH.splitPath(path), root = result[0], dir = result[1];
  if (!root && !dir) {
   return ".";
  }
  if (dir) {
   dir = dir.substr(0, dir.length - 1);
  }
  return root + dir;
 },
 basename: path => {
  if (path === "/") return "/";
  path = PATH.normalize(path);
  path = path.replace(/\/$/, "");
  var lastSlash = path.lastIndexOf("/");
  if (lastSlash === -1) return path;
  return path.substr(lastSlash + 1);
 },
 join: function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return PATH.normalize(paths.join("/"));
 },
 join2: (l, r) => {
  return PATH.normalize(l + "/" + r);
 }
};

function getRandomDevice() {
 if (typeof crypto == "object" && typeof crypto["getRandomValues"] == "function") {
  var randomBuffer = new Uint8Array(1);
  return function() {
   crypto.getRandomValues(randomBuffer);
   return randomBuffer[0];
  };
 } else return function() {
  abort("no cryptographic support found for randomDevice. consider polyfilling it if you want to use something insecure like Math.random(), e.g. put this in a --pre-js: var crypto = { getRandomValues: function(array) { for (var i = 0; i < array.length; i++) array[i] = (Math.random()*256)|0 } };");
 };
}

var PATH_FS = {
 resolve: function() {
  var resolvedPath = "", resolvedAbsolute = false;
  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
   var path = i >= 0 ? arguments[i] : FS.cwd();
   if (typeof path != "string") {
    throw new TypeError("Arguments to path.resolve must be strings");
   } else if (!path) {
    return "";
   }
   resolvedPath = path + "/" + resolvedPath;
   resolvedAbsolute = PATH.isAbs(path);
  }
  resolvedPath = PATH.normalizeArray(resolvedPath.split("/").filter(p => !!p), !resolvedAbsolute).join("/");
  return (resolvedAbsolute ? "/" : "") + resolvedPath || ".";
 },
 relative: (from, to) => {
  from = PATH_FS.resolve(from).substr(1);
  to = PATH_FS.resolve(to).substr(1);
  function trim(arr) {
   var start = 0;
   for (;start < arr.length; start++) {
    if (arr[start] !== "") break;
   }
   var end = arr.length - 1;
   for (;end >= 0; end--) {
    if (arr[end] !== "") break;
   }
   if (start > end) return [];
   return arr.slice(start, end - start + 1);
  }
  var fromParts = trim(from.split("/"));
  var toParts = trim(to.split("/"));
  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
   if (fromParts[i] !== toParts[i]) {
    samePartsLength = i;
    break;
   }
  }
  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
   outputParts.push("..");
  }
  outputParts = outputParts.concat(toParts.slice(samePartsLength));
  return outputParts.join("/");
 }
};

var TTY = {
 ttys: [],
 init: function() {},
 shutdown: function() {},
 register: function(dev, ops) {
  TTY.ttys[dev] = {
   input: [],
   output: [],
   ops: ops
  };
  FS.registerDevice(dev, TTY.stream_ops);
 },
 stream_ops: {
  open: function(stream) {
   var tty = TTY.ttys[stream.node.rdev];
   if (!tty) {
    throw new FS.ErrnoError(43);
   }
   stream.tty = tty;
   stream.seekable = false;
  },
  close: function(stream) {
   stream.tty.ops.flush(stream.tty);
  },
  flush: function(stream) {
   stream.tty.ops.flush(stream.tty);
  },
  read: function(stream, buffer, offset, length, pos) {
   if (!stream.tty || !stream.tty.ops.get_char) {
    throw new FS.ErrnoError(60);
   }
   var bytesRead = 0;
   for (var i = 0; i < length; i++) {
    var result;
    try {
     result = stream.tty.ops.get_char(stream.tty);
    } catch (e) {
     throw new FS.ErrnoError(29);
    }
    if (result === undefined && bytesRead === 0) {
     throw new FS.ErrnoError(6);
    }
    if (result === null || result === undefined) break;
    bytesRead++;
    buffer[offset + i] = result;
   }
   if (bytesRead) {
    stream.node.timestamp = Date.now();
   }
   return bytesRead;
  },
  write: function(stream, buffer, offset, length, pos) {
   if (!stream.tty || !stream.tty.ops.put_char) {
    throw new FS.ErrnoError(60);
   }
   try {
    for (var i = 0; i < length; i++) {
     stream.tty.ops.put_char(stream.tty, buffer[offset + i]);
    }
   } catch (e) {
    throw new FS.ErrnoError(29);
   }
   if (length) {
    stream.node.timestamp = Date.now();
   }
   return i;
  }
 },
 default_tty_ops: {
  get_char: function(tty) {
   if (!tty.input.length) {
    var result = null;
    if (typeof window != "undefined" && typeof window.prompt == "function") {
     result = window.prompt("Input: ");
     if (result !== null) {
      result += "\n";
     }
    } else if (typeof readline == "function") {
     result = readline();
     if (result !== null) {
      result += "\n";
     }
    }
    if (!result) {
     return null;
    }
    tty.input = intArrayFromString(result, true);
   }
   return tty.input.shift();
  },
  put_char: function(tty, val) {
   if (val === null || val === 10) {
    out(UTF8ArrayToString(tty.output, 0));
    tty.output = [];
   } else {
    if (val != 0) tty.output.push(val);
   }
  },
  flush: function(tty) {
   if (tty.output && tty.output.length > 0) {
    out(UTF8ArrayToString(tty.output, 0));
    tty.output = [];
   }
  }
 },
 default_tty1_ops: {
  put_char: function(tty, val) {
   if (val === null || val === 10) {
    err(UTF8ArrayToString(tty.output, 0));
    tty.output = [];
   } else {
    if (val != 0) tty.output.push(val);
   }
  },
  flush: function(tty) {
   if (tty.output && tty.output.length > 0) {
    err(UTF8ArrayToString(tty.output, 0));
    tty.output = [];
   }
  }
 }
};

function zeroMemory(address, size) {
 HEAPU8.fill(0, address, address + size);
}

function alignMemory(size, alignment) {
 assert(alignment, "alignment argument is required");
 return Math.ceil(size / alignment) * alignment;
}

function mmapAlloc(size) {
 abort("internal error: mmapAlloc called but `emscripten_builtin_memalign` native symbol not exported");
}

var MEMFS = {
 ops_table: null,
 mount: function(mount) {
  return MEMFS.createNode(null, "/", 16384 | 511, 0);
 },
 createNode: function(parent, name, mode, dev) {
  if (FS.isBlkdev(mode) || FS.isFIFO(mode)) {
   throw new FS.ErrnoError(63);
  }
  if (!MEMFS.ops_table) {
   MEMFS.ops_table = {
    dir: {
     node: {
      getattr: MEMFS.node_ops.getattr,
      setattr: MEMFS.node_ops.setattr,
      lookup: MEMFS.node_ops.lookup,
      mknod: MEMFS.node_ops.mknod,
      rename: MEMFS.node_ops.rename,
      unlink: MEMFS.node_ops.unlink,
      rmdir: MEMFS.node_ops.rmdir,
      readdir: MEMFS.node_ops.readdir,
      symlink: MEMFS.node_ops.symlink
     },
     stream: {
      llseek: MEMFS.stream_ops.llseek
     }
    },
    file: {
     node: {
      getattr: MEMFS.node_ops.getattr,
      setattr: MEMFS.node_ops.setattr
     },
     stream: {
      llseek: MEMFS.stream_ops.llseek,
      read: MEMFS.stream_ops.read,
      write: MEMFS.stream_ops.write,
      allocate: MEMFS.stream_ops.allocate,
      mmap: MEMFS.stream_ops.mmap,
      msync: MEMFS.stream_ops.msync
     }
    },
    link: {
     node: {
      getattr: MEMFS.node_ops.getattr,
      setattr: MEMFS.node_ops.setattr,
      readlink: MEMFS.node_ops.readlink
     },
     stream: {}
    },
    chrdev: {
     node: {
      getattr: MEMFS.node_ops.getattr,
      setattr: MEMFS.node_ops.setattr
     },
     stream: FS.chrdev_stream_ops
    }
   };
  }
  var node = FS.createNode(parent, name, mode, dev);
  if (FS.isDir(node.mode)) {
   node.node_ops = MEMFS.ops_table.dir.node;
   node.stream_ops = MEMFS.ops_table.dir.stream;
   node.contents = {};
  } else if (FS.isFile(node.mode)) {
   node.node_ops = MEMFS.ops_table.file.node;
   node.stream_ops = MEMFS.ops_table.file.stream;
   node.usedBytes = 0;
   node.contents = null;
  } else if (FS.isLink(node.mode)) {
   node.node_ops = MEMFS.ops_table.link.node;
   node.stream_ops = MEMFS.ops_table.link.stream;
  } else if (FS.isChrdev(node.mode)) {
   node.node_ops = MEMFS.ops_table.chrdev.node;
   node.stream_ops = MEMFS.ops_table.chrdev.stream;
  }
  node.timestamp = Date.now();
  if (parent) {
   parent.contents[name] = node;
   parent.timestamp = node.timestamp;
  }
  return node;
 },
 getFileDataAsTypedArray: function(node) {
  if (!node.contents) return new Uint8Array(0);
  if (node.contents.subarray) return node.contents.subarray(0, node.usedBytes);
  return new Uint8Array(node.contents);
 },
 expandFileStorage: function(node, newCapacity) {
  var prevCapacity = node.contents ? node.contents.length : 0;
  if (prevCapacity >= newCapacity) return;
  var CAPACITY_DOUBLING_MAX = 1024 * 1024;
  newCapacity = Math.max(newCapacity, prevCapacity * (prevCapacity < CAPACITY_DOUBLING_MAX ? 2 : 1.125) >>> 0);
  if (prevCapacity != 0) newCapacity = Math.max(newCapacity, 256);
  var oldContents = node.contents;
  node.contents = new Uint8Array(newCapacity);
  if (node.usedBytes > 0) node.contents.set(oldContents.subarray(0, node.usedBytes), 0);
 },
 resizeFileStorage: function(node, newSize) {
  if (node.usedBytes == newSize) return;
  if (newSize == 0) {
   node.contents = null;
   node.usedBytes = 0;
  } else {
   var oldContents = node.contents;
   node.contents = new Uint8Array(newSize);
   if (oldContents) {
    node.contents.set(oldContents.subarray(0, Math.min(newSize, node.usedBytes)));
   }
   node.usedBytes = newSize;
  }
 },
 node_ops: {
  getattr: function(node) {
   var attr = {};
   attr.dev = FS.isChrdev(node.mode) ? node.id : 1;
   attr.ino = node.id;
   attr.mode = node.mode;
   attr.nlink = 1;
   attr.uid = 0;
   attr.gid = 0;
   attr.rdev = node.rdev;
   if (FS.isDir(node.mode)) {
    attr.size = 4096;
   } else if (FS.isFile(node.mode)) {
    attr.size = node.usedBytes;
   } else if (FS.isLink(node.mode)) {
    attr.size = node.link.length;
   } else {
    attr.size = 0;
   }
   attr.atime = new Date(node.timestamp);
   attr.mtime = new Date(node.timestamp);
   attr.ctime = new Date(node.timestamp);
   attr.blksize = 4096;
   attr.blocks = Math.ceil(attr.size / attr.blksize);
   return attr;
  },
  setattr: function(node, attr) {
   if (attr.mode !== undefined) {
    node.mode = attr.mode;
   }
   if (attr.timestamp !== undefined) {
    node.timestamp = attr.timestamp;
   }
   if (attr.size !== undefined) {
    MEMFS.resizeFileStorage(node, attr.size);
   }
  },
  lookup: function(parent, name) {
   throw FS.genericErrors[44];
  },
  mknod: function(parent, name, mode, dev) {
   return MEMFS.createNode(parent, name, mode, dev);
  },
  rename: function(old_node, new_dir, new_name) {
   if (FS.isDir(old_node.mode)) {
    var new_node;
    try {
     new_node = FS.lookupNode(new_dir, new_name);
    } catch (e) {}
    if (new_node) {
     for (var i in new_node.contents) {
      throw new FS.ErrnoError(55);
     }
    }
   }
   delete old_node.parent.contents[old_node.name];
   old_node.parent.timestamp = Date.now();
   old_node.name = new_name;
   new_dir.contents[new_name] = old_node;
   new_dir.timestamp = old_node.parent.timestamp;
   old_node.parent = new_dir;
  },
  unlink: function(parent, name) {
   delete parent.contents[name];
   parent.timestamp = Date.now();
  },
  rmdir: function(parent, name) {
   var node = FS.lookupNode(parent, name);
   for (var i in node.contents) {
    throw new FS.ErrnoError(55);
   }
   delete parent.contents[name];
   parent.timestamp = Date.now();
  },
  readdir: function(node) {
   var entries = [ ".", ".." ];
   for (var key in node.contents) {
    if (!node.contents.hasOwnProperty(key)) {
     continue;
    }
    entries.push(key);
   }
   return entries;
  },
  symlink: function(parent, newname, oldpath) {
   var node = MEMFS.createNode(parent, newname, 511 | 40960, 0);
   node.link = oldpath;
   return node;
  },
  readlink: function(node) {
   if (!FS.isLink(node.mode)) {
    throw new FS.ErrnoError(28);
   }
   return node.link;
  }
 },
 stream_ops: {
  read: function(stream, buffer, offset, length, position) {
   var contents = stream.node.contents;
   if (position >= stream.node.usedBytes) return 0;
   var size = Math.min(stream.node.usedBytes - position, length);
   assert(size >= 0);
   if (size > 8 && contents.subarray) {
    buffer.set(contents.subarray(position, position + size), offset);
   } else {
    for (var i = 0; i < size; i++) buffer[offset + i] = contents[position + i];
   }
   return size;
  },
  write: function(stream, buffer, offset, length, position, canOwn) {
   assert(!(buffer instanceof ArrayBuffer));
   if (buffer.buffer === HEAP8.buffer) {
    canOwn = false;
   }
   if (!length) return 0;
   var node = stream.node;
   node.timestamp = Date.now();
   if (buffer.subarray && (!node.contents || node.contents.subarray)) {
    if (canOwn) {
     assert(position === 0, "canOwn must imply no weird position inside the file");
     node.contents = buffer.subarray(offset, offset + length);
     node.usedBytes = length;
     return length;
    } else if (node.usedBytes === 0 && position === 0) {
     node.contents = buffer.slice(offset, offset + length);
     node.usedBytes = length;
     return length;
    } else if (position + length <= node.usedBytes) {
     node.contents.set(buffer.subarray(offset, offset + length), position);
     return length;
    }
   }
   MEMFS.expandFileStorage(node, position + length);
   if (node.contents.subarray && buffer.subarray) {
    node.contents.set(buffer.subarray(offset, offset + length), position);
   } else {
    for (var i = 0; i < length; i++) {
     node.contents[position + i] = buffer[offset + i];
    }
   }
   node.usedBytes = Math.max(node.usedBytes, position + length);
   return length;
  },
  llseek: function(stream, offset, whence) {
   var position = offset;
   if (whence === 1) {
    position += stream.position;
   } else if (whence === 2) {
    if (FS.isFile(stream.node.mode)) {
     position += stream.node.usedBytes;
    }
   }
   if (position < 0) {
    throw new FS.ErrnoError(28);
   }
   return position;
  },
  allocate: function(stream, offset, length) {
   MEMFS.expandFileStorage(stream.node, offset + length);
   stream.node.usedBytes = Math.max(stream.node.usedBytes, offset + length);
  },
  mmap: function(stream, address, length, position, prot, flags) {
   if (address !== 0) {
    throw new FS.ErrnoError(28);
   }
   if (!FS.isFile(stream.node.mode)) {
    throw new FS.ErrnoError(43);
   }
   var ptr;
   var allocated;
   var contents = stream.node.contents;
   if (!(flags & 2) && contents.buffer === buffer) {
    allocated = false;
    ptr = contents.byteOffset;
   } else {
    if (position > 0 || position + length < contents.length) {
     if (contents.subarray) {
      contents = contents.subarray(position, position + length);
     } else {
      contents = Array.prototype.slice.call(contents, position, position + length);
     }
    }
    allocated = true;
    ptr = mmapAlloc(length);
    if (!ptr) {
     throw new FS.ErrnoError(48);
    }
    HEAP8.set(contents, ptr);
   }
   return {
    ptr: ptr,
    allocated: allocated
   };
  },
  msync: function(stream, buffer, offset, length, mmapFlags) {
   if (!FS.isFile(stream.node.mode)) {
    throw new FS.ErrnoError(43);
   }
   if (mmapFlags & 2) {
    return 0;
   }
   var bytesWritten = MEMFS.stream_ops.write(stream, buffer, 0, length, offset, false);
   return 0;
  }
 }
};

function asyncLoad(url, onload, onerror, noRunDep) {
 var dep = !noRunDep ? getUniqueRunDependency("al " + url) : "";
 readAsync(url, function(arrayBuffer) {
  assert(arrayBuffer, 'Loading data file "' + url + '" failed (no arrayBuffer).');
  onload(new Uint8Array(arrayBuffer));
  if (dep) removeRunDependency(dep);
 }, function(event) {
  if (onerror) {
   onerror();
  } else {
   throw 'Loading data file "' + url + '" failed.';
  }
 });
 if (dep) addRunDependency(dep);
}

var ERRNO_MESSAGES = {
 0: "Success",
 1: "Arg list too long",
 2: "Permission denied",
 3: "Address already in use",
 4: "Address not available",
 5: "Address family not supported by protocol family",
 6: "No more processes",
 7: "Socket already connected",
 8: "Bad file number",
 9: "Trying to read unreadable message",
 10: "Mount device busy",
 11: "Operation canceled",
 12: "No children",
 13: "Connection aborted",
 14: "Connection refused",
 15: "Connection reset by peer",
 16: "File locking deadlock error",
 17: "Destination address required",
 18: "Math arg out of domain of func",
 19: "Quota exceeded",
 20: "File exists",
 21: "Bad address",
 22: "File too large",
 23: "Host is unreachable",
 24: "Identifier removed",
 25: "Illegal byte sequence",
 26: "Connection already in progress",
 27: "Interrupted system call",
 28: "Invalid argument",
 29: "I/O error",
 30: "Socket is already connected",
 31: "Is a directory",
 32: "Too many symbolic links",
 33: "Too many open files",
 34: "Too many links",
 35: "Message too long",
 36: "Multihop attempted",
 37: "File or path name too long",
 38: "Network interface is not configured",
 39: "Connection reset by network",
 40: "Network is unreachable",
 41: "Too many open files in system",
 42: "No buffer space available",
 43: "No such device",
 44: "No such file or directory",
 45: "Exec format error",
 46: "No record locks available",
 47: "The link has been severed",
 48: "Not enough core",
 49: "No message of desired type",
 50: "Protocol not available",
 51: "No space left on device",
 52: "Function not implemented",
 53: "Socket is not connected",
 54: "Not a directory",
 55: "Directory not empty",
 56: "State not recoverable",
 57: "Socket operation on non-socket",
 59: "Not a typewriter",
 60: "No such device or address",
 61: "Value too large for defined data type",
 62: "Previous owner died",
 63: "Not super-user",
 64: "Broken pipe",
 65: "Protocol error",
 66: "Unknown protocol",
 67: "Protocol wrong type for socket",
 68: "Math result not representable",
 69: "Read only file system",
 70: "Illegal seek",
 71: "No such process",
 72: "Stale file handle",
 73: "Connection timed out",
 74: "Text file busy",
 75: "Cross-device link",
 100: "Device not a stream",
 101: "Bad font file fmt",
 102: "Invalid slot",
 103: "Invalid request code",
 104: "No anode",
 105: "Block device required",
 106: "Channel number out of range",
 107: "Level 3 halted",
 108: "Level 3 reset",
 109: "Link number out of range",
 110: "Protocol driver not attached",
 111: "No CSI structure available",
 112: "Level 2 halted",
 113: "Invalid exchange",
 114: "Invalid request descriptor",
 115: "Exchange full",
 116: "No data (for no delay io)",
 117: "Timer expired",
 118: "Out of streams resources",
 119: "Machine is not on the network",
 120: "Package not installed",
 121: "The object is remote",
 122: "Advertise error",
 123: "Srmount error",
 124: "Communication error on send",
 125: "Cross mount point (not really error)",
 126: "Given log. name not unique",
 127: "f.d. invalid for this operation",
 128: "Remote address changed",
 129: "Can   access a needed shared lib",
 130: "Accessing a corrupted shared lib",
 131: ".lib section in a.out corrupted",
 132: "Attempting to link in too many libs",
 133: "Attempting to exec a shared library",
 135: "Streams pipe error",
 136: "Too many users",
 137: "Socket type not supported",
 138: "Not supported",
 139: "Protocol family not supported",
 140: "Can't send after socket shutdown",
 141: "Too many references",
 142: "Host is down",
 148: "No medium (in tape drive)",
 156: "Level 2 not synchronized"
};

var ERRNO_CODES = {};

var FS = {
 root: null,
 mounts: [],
 devices: {},
 streams: [],
 nextInode: 1,
 nameTable: null,
 currentPath: "/",
 initialized: false,
 ignorePermissions: true,
 ErrnoError: null,
 genericErrors: {},
 filesystems: null,
 syncFSRequests: 0,
 lookupPath: (path, opts = {}) => {
  path = PATH_FS.resolve(FS.cwd(), path);
  if (!path) return {
   path: "",
   node: null
  };
  var defaults = {
   follow_mount: true,
   recurse_count: 0
  };
  opts = Object.assign(defaults, opts);
  if (opts.recurse_count > 8) {
   throw new FS.ErrnoError(32);
  }
  var parts = PATH.normalizeArray(path.split("/").filter(p => !!p), false);
  var current = FS.root;
  var current_path = "/";
  for (var i = 0; i < parts.length; i++) {
   var islast = i === parts.length - 1;
   if (islast && opts.parent) {
    break;
   }
   current = FS.lookupNode(current, parts[i]);
   current_path = PATH.join2(current_path, parts[i]);
   if (FS.isMountpoint(current)) {
    if (!islast || islast && opts.follow_mount) {
     current = current.mounted.root;
    }
   }
   if (!islast || opts.follow) {
    var count = 0;
    while (FS.isLink(current.mode)) {
     var link = FS.readlink(current_path);
     current_path = PATH_FS.resolve(PATH.dirname(current_path), link);
     var lookup = FS.lookupPath(current_path, {
      recurse_count: opts.recurse_count + 1
     });
     current = lookup.node;
     if (count++ > 40) {
      throw new FS.ErrnoError(32);
     }
    }
   }
  }
  return {
   path: current_path,
   node: current
  };
 },
 getPath: node => {
  var path;
  while (true) {
   if (FS.isRoot(node)) {
    var mount = node.mount.mountpoint;
    if (!path) return mount;
    return mount[mount.length - 1] !== "/" ? mount + "/" + path : mount + path;
   }
   path = path ? node.name + "/" + path : node.name;
   node = node.parent;
  }
 },
 hashName: (parentid, name) => {
  var hash = 0;
  for (var i = 0; i < name.length; i++) {
   hash = (hash << 5) - hash + name.charCodeAt(i) | 0;
  }
  return (parentid + hash >>> 0) % FS.nameTable.length;
 },
 hashAddNode: node => {
  var hash = FS.hashName(node.parent.id, node.name);
  node.name_next = FS.nameTable[hash];
  FS.nameTable[hash] = node;
 },
 hashRemoveNode: node => {
  var hash = FS.hashName(node.parent.id, node.name);
  if (FS.nameTable[hash] === node) {
   FS.nameTable[hash] = node.name_next;
  } else {
   var current = FS.nameTable[hash];
   while (current) {
    if (current.name_next === node) {
     current.name_next = node.name_next;
     break;
    }
    current = current.name_next;
   }
  }
 },
 lookupNode: (parent, name) => {
  var errCode = FS.mayLookup(parent);
  if (errCode) {
   throw new FS.ErrnoError(errCode, parent);
  }
  var hash = FS.hashName(parent.id, name);
  for (var node = FS.nameTable[hash]; node; node = node.name_next) {
   var nodeName = node.name;
   if (node.parent.id === parent.id && nodeName === name) {
    return node;
   }
  }
  return FS.lookup(parent, name);
 },
 createNode: (parent, name, mode, rdev) => {
  assert(typeof parent == "object");
  var node = new FS.FSNode(parent, name, mode, rdev);
  FS.hashAddNode(node);
  return node;
 },
 destroyNode: node => {
  FS.hashRemoveNode(node);
 },
 isRoot: node => {
  return node === node.parent;
 },
 isMountpoint: node => {
  return !!node.mounted;
 },
 isFile: mode => {
  return (mode & 61440) === 32768;
 },
 isDir: mode => {
  return (mode & 61440) === 16384;
 },
 isLink: mode => {
  return (mode & 61440) === 40960;
 },
 isChrdev: mode => {
  return (mode & 61440) === 8192;
 },
 isBlkdev: mode => {
  return (mode & 61440) === 24576;
 },
 isFIFO: mode => {
  return (mode & 61440) === 4096;
 },
 isSocket: mode => {
  return (mode & 49152) === 49152;
 },
 flagModes: {
  "r": 0,
  "r+": 2,
  "w": 577,
  "w+": 578,
  "a": 1089,
  "a+": 1090
 },
 modeStringToFlags: str => {
  var flags = FS.flagModes[str];
  if (typeof flags == "undefined") {
   throw new Error("Unknown file open mode: " + str);
  }
  return flags;
 },
 flagsToPermissionString: flag => {
  var perms = [ "r", "w", "rw" ][flag & 3];
  if (flag & 512) {
   perms += "w";
  }
  return perms;
 },
 nodePermissions: (node, perms) => {
  if (FS.ignorePermissions) {
   return 0;
  }
  if (perms.includes("r") && !(node.mode & 292)) {
   return 2;
  } else if (perms.includes("w") && !(node.mode & 146)) {
   return 2;
  } else if (perms.includes("x") && !(node.mode & 73)) {
   return 2;
  }
  return 0;
 },
 mayLookup: dir => {
  var errCode = FS.nodePermissions(dir, "x");
  if (errCode) return errCode;
  if (!dir.node_ops.lookup) return 2;
  return 0;
 },
 mayCreate: (dir, name) => {
  try {
   var node = FS.lookupNode(dir, name);
   return 20;
  } catch (e) {}
  return FS.nodePermissions(dir, "wx");
 },
 mayDelete: (dir, name, isdir) => {
  var node;
  try {
   node = FS.lookupNode(dir, name);
  } catch (e) {
   return e.errno;
  }
  var errCode = FS.nodePermissions(dir, "wx");
  if (errCode) {
   return errCode;
  }
  if (isdir) {
   if (!FS.isDir(node.mode)) {
    return 54;
   }
   if (FS.isRoot(node) || FS.getPath(node) === FS.cwd()) {
    return 10;
   }
  } else {
   if (FS.isDir(node.mode)) {
    return 31;
   }
  }
  return 0;
 },
 mayOpen: (node, flags) => {
  if (!node) {
   return 44;
  }
  if (FS.isLink(node.mode)) {
   return 32;
  } else if (FS.isDir(node.mode)) {
   if (FS.flagsToPermissionString(flags) !== "r" || flags & 512) {
    return 31;
   }
  }
  return FS.nodePermissions(node, FS.flagsToPermissionString(flags));
 },
 MAX_OPEN_FDS: 4096,
 nextfd: (fd_start = 0, fd_end = FS.MAX_OPEN_FDS) => {
  for (var fd = fd_start; fd <= fd_end; fd++) {
   if (!FS.streams[fd]) {
    return fd;
   }
  }
  throw new FS.ErrnoError(33);
 },
 getStream: fd => FS.streams[fd],
 createStream: (stream, fd_start, fd_end) => {
  if (!FS.FSStream) {
   FS.FSStream = function() {
    this.shared = {};
   };
   FS.FSStream.prototype = {
    object: {
     get: function() {
      return this.node;
     },
     set: function(val) {
      this.node = val;
     }
    },
    isRead: {
     get: function() {
      return (this.flags & 2097155) !== 1;
     }
    },
    isWrite: {
     get: function() {
      return (this.flags & 2097155) !== 0;
     }
    },
    isAppend: {
     get: function() {
      return this.flags & 1024;
     }
    },
    flags: {
     get: function() {
      return this.shared.flags;
     },
     set: function(val) {
      this.shared.flags = val;
     }
    },
    position: {
     get function() {
      return this.shared.position;
     },
     set: function(val) {
      this.shared.position = val;
     }
    }
   };
  }
  stream = Object.assign(new FS.FSStream(), stream);
  var fd = FS.nextfd(fd_start, fd_end);
  stream.fd = fd;
  FS.streams[fd] = stream;
  return stream;
 },
 closeStream: fd => {
  FS.streams[fd] = null;
 },
 chrdev_stream_ops: {
  open: stream => {
   var device = FS.getDevice(stream.node.rdev);
   stream.stream_ops = device.stream_ops;
   if (stream.stream_ops.open) {
    stream.stream_ops.open(stream);
   }
  },
  llseek: () => {
   throw new FS.ErrnoError(70);
  }
 },
 major: dev => dev >> 8,
 minor: dev => dev & 255,
 makedev: (ma, mi) => ma << 8 | mi,
 registerDevice: (dev, ops) => {
  FS.devices[dev] = {
   stream_ops: ops
  };
 },
 getDevice: dev => FS.devices[dev],
 getMounts: mount => {
  var mounts = [];
  var check = [ mount ];
  while (check.length) {
   var m = check.pop();
   mounts.push(m);
   check.push.apply(check, m.mounts);
  }
  return mounts;
 },
 syncfs: (populate, callback) => {
  if (typeof populate == "function") {
   callback = populate;
   populate = false;
  }
  FS.syncFSRequests++;
  if (FS.syncFSRequests > 1) {
   err("warning: " + FS.syncFSRequests + " FS.syncfs operations in flight at once, probably just doing extra work");
  }
  var mounts = FS.getMounts(FS.root.mount);
  var completed = 0;
  function doCallback(errCode) {
   assert(FS.syncFSRequests > 0);
   FS.syncFSRequests--;
   return callback(errCode);
  }
  function done(errCode) {
   if (errCode) {
    if (!done.errored) {
     done.errored = true;
     return doCallback(errCode);
    }
    return;
   }
   if (++completed >= mounts.length) {
    doCallback(null);
   }
  }
  mounts.forEach(mount => {
   if (!mount.type.syncfs) {
    return done(null);
   }
   mount.type.syncfs(mount, populate, done);
  });
 },
 mount: (type, opts, mountpoint) => {
  if (typeof type == "string") {
   throw type;
  }
  var root = mountpoint === "/";
  var pseudo = !mountpoint;
  var node;
  if (root && FS.root) {
   throw new FS.ErrnoError(10);
  } else if (!root && !pseudo) {
   var lookup = FS.lookupPath(mountpoint, {
    follow_mount: false
   });
   mountpoint = lookup.path;
   node = lookup.node;
   if (FS.isMountpoint(node)) {
    throw new FS.ErrnoError(10);
   }
   if (!FS.isDir(node.mode)) {
    throw new FS.ErrnoError(54);
   }
  }
  var mount = {
   type: type,
   opts: opts,
   mountpoint: mountpoint,
   mounts: []
  };
  var mountRoot = type.mount(mount);
  mountRoot.mount = mount;
  mount.root = mountRoot;
  if (root) {
   FS.root = mountRoot;
  } else if (node) {
   node.mounted = mount;
   if (node.mount) {
    node.mount.mounts.push(mount);
   }
  }
  return mountRoot;
 },
 unmount: mountpoint => {
  var lookup = FS.lookupPath(mountpoint, {
   follow_mount: false
  });
  if (!FS.isMountpoint(lookup.node)) {
   throw new FS.ErrnoError(28);
  }
  var node = lookup.node;
  var mount = node.mounted;
  var mounts = FS.getMounts(mount);
  Object.keys(FS.nameTable).forEach(hash => {
   var current = FS.nameTable[hash];
   while (current) {
    var next = current.name_next;
    if (mounts.includes(current.mount)) {
     FS.destroyNode(current);
    }
    current = next;
   }
  });
  node.mounted = null;
  var idx = node.mount.mounts.indexOf(mount);
  assert(idx !== -1);
  node.mount.mounts.splice(idx, 1);
 },
 lookup: (parent, name) => {
  return parent.node_ops.lookup(parent, name);
 },
 mknod: (path, mode, dev) => {
  var lookup = FS.lookupPath(path, {
   parent: true
  });
  var parent = lookup.node;
  var name = PATH.basename(path);
  if (!name || name === "." || name === "..") {
   throw new FS.ErrnoError(28);
  }
  var errCode = FS.mayCreate(parent, name);
  if (errCode) {
   throw new FS.ErrnoError(errCode);
  }
  if (!parent.node_ops.mknod) {
   throw new FS.ErrnoError(63);
  }
  return parent.node_ops.mknod(parent, name, mode, dev);
 },
 create: (path, mode) => {
  mode = mode !== undefined ? mode : 438;
  mode &= 4095;
  mode |= 32768;
  return FS.mknod(path, mode, 0);
 },
 mkdir: (path, mode) => {
  mode = mode !== undefined ? mode : 511;
  mode &= 511 | 512;
  mode |= 16384;
  return FS.mknod(path, mode, 0);
 },
 mkdirTree: (path, mode) => {
  var dirs = path.split("/");
  var d = "";
  for (var i = 0; i < dirs.length; ++i) {
   if (!dirs[i]) continue;
   d += "/" + dirs[i];
   try {
    FS.mkdir(d, mode);
   } catch (e) {
    if (e.errno != 20) throw e;
   }
  }
 },
 mkdev: (path, mode, dev) => {
  if (typeof dev == "undefined") {
   dev = mode;
   mode = 438;
  }
  mode |= 8192;
  return FS.mknod(path, mode, dev);
 },
 symlink: (oldpath, newpath) => {
  if (!PATH_FS.resolve(oldpath)) {
   throw new FS.ErrnoError(44);
  }
  var lookup = FS.lookupPath(newpath, {
   parent: true
  });
  var parent = lookup.node;
  if (!parent) {
   throw new FS.ErrnoError(44);
  }
  var newname = PATH.basename(newpath);
  var errCode = FS.mayCreate(parent, newname);
  if (errCode) {
   throw new FS.ErrnoError(errCode);
  }
  if (!parent.node_ops.symlink) {
   throw new FS.ErrnoError(63);
  }
  return parent.node_ops.symlink(parent, newname, oldpath);
 },
 rename: (old_path, new_path) => {
  var old_dirname = PATH.dirname(old_path);
  var new_dirname = PATH.dirname(new_path);
  var old_name = PATH.basename(old_path);
  var new_name = PATH.basename(new_path);
  var lookup, old_dir, new_dir;
  lookup = FS.lookupPath(old_path, {
   parent: true
  });
  old_dir = lookup.node;
  lookup = FS.lookupPath(new_path, {
   parent: true
  });
  new_dir = lookup.node;
  if (!old_dir || !new_dir) throw new FS.ErrnoError(44);
  if (old_dir.mount !== new_dir.mount) {
   throw new FS.ErrnoError(75);
  }
  var old_node = FS.lookupNode(old_dir, old_name);
  var relative = PATH_FS.relative(old_path, new_dirname);
  if (relative.charAt(0) !== ".") {
   throw new FS.ErrnoError(28);
  }
  relative = PATH_FS.relative(new_path, old_dirname);
  if (relative.charAt(0) !== ".") {
   throw new FS.ErrnoError(55);
  }
  var new_node;
  try {
   new_node = FS.lookupNode(new_dir, new_name);
  } catch (e) {}
  if (old_node === new_node) {
   return;
  }
  var isdir = FS.isDir(old_node.mode);
  var errCode = FS.mayDelete(old_dir, old_name, isdir);
  if (errCode) {
   throw new FS.ErrnoError(errCode);
  }
  errCode = new_node ? FS.mayDelete(new_dir, new_name, isdir) : FS.mayCreate(new_dir, new_name);
  if (errCode) {
   throw new FS.ErrnoError(errCode);
  }
  if (!old_dir.node_ops.rename) {
   throw new FS.ErrnoError(63);
  }
  if (FS.isMountpoint(old_node) || new_node && FS.isMountpoint(new_node)) {
   throw new FS.ErrnoError(10);
  }
  if (new_dir !== old_dir) {
   errCode = FS.nodePermissions(old_dir, "w");
   if (errCode) {
    throw new FS.ErrnoError(errCode);
   }
  }
  FS.hashRemoveNode(old_node);
  try {
   old_dir.node_ops.rename(old_node, new_dir, new_name);
  } catch (e) {
   throw e;
  } finally {
   FS.hashAddNode(old_node);
  }
 },
 rmdir: path => {
  var lookup = FS.lookupPath(path, {
   parent: true
  });
  var parent = lookup.node;
  var name = PATH.basename(path);
  var node = FS.lookupNode(parent, name);
  var errCode = FS.mayDelete(parent, name, true);
  if (errCode) {
   throw new FS.ErrnoError(errCode);
  }
  if (!parent.node_ops.rmdir) {
   throw new FS.ErrnoError(63);
  }
  if (FS.isMountpoint(node)) {
   throw new FS.ErrnoError(10);
  }
  parent.node_ops.rmdir(parent, name);
  FS.destroyNode(node);
 },
 readdir: path => {
  var lookup = FS.lookupPath(path, {
   follow: true
  });
  var node = lookup.node;
  if (!node.node_ops.readdir) {
   throw new FS.ErrnoError(54);
  }
  return node.node_ops.readdir(node);
 },
 unlink: path => {
  var lookup = FS.lookupPath(path, {
   parent: true
  });
  var parent = lookup.node;
  if (!parent) {
   throw new FS.ErrnoError(44);
  }
  var name = PATH.basename(path);
  var node = FS.lookupNode(parent, name);
  var errCode = FS.mayDelete(parent, name, false);
  if (errCode) {
   throw new FS.ErrnoError(errCode);
  }
  if (!parent.node_ops.unlink) {
   throw new FS.ErrnoError(63);
  }
  if (FS.isMountpoint(node)) {
   throw new FS.ErrnoError(10);
  }
  parent.node_ops.unlink(parent, name);
  FS.destroyNode(node);
 },
 readlink: path => {
  var lookup = FS.lookupPath(path);
  var link = lookup.node;
  if (!link) {
   throw new FS.ErrnoError(44);
  }
  if (!link.node_ops.readlink) {
   throw new FS.ErrnoError(28);
  }
  return PATH_FS.resolve(FS.getPath(link.parent), link.node_ops.readlink(link));
 },
 stat: (path, dontFollow) => {
  var lookup = FS.lookupPath(path, {
   follow: !dontFollow
  });
  var node = lookup.node;
  if (!node) {
   throw new FS.ErrnoError(44);
  }
  if (!node.node_ops.getattr) {
   throw new FS.ErrnoError(63);
  }
  return node.node_ops.getattr(node);
 },
 lstat: path => {
  return FS.stat(path, true);
 },
 chmod: (path, mode, dontFollow) => {
  var node;
  if (typeof path == "string") {
   var lookup = FS.lookupPath(path, {
    follow: !dontFollow
   });
   node = lookup.node;
  } else {
   node = path;
  }
  if (!node.node_ops.setattr) {
   throw new FS.ErrnoError(63);
  }
  node.node_ops.setattr(node, {
   mode: mode & 4095 | node.mode & ~4095,
   timestamp: Date.now()
  });
 },
 lchmod: (path, mode) => {
  FS.chmod(path, mode, true);
 },
 fchmod: (fd, mode) => {
  var stream = FS.getStream(fd);
  if (!stream) {
   throw new FS.ErrnoError(8);
  }
  FS.chmod(stream.node, mode);
 },
 chown: (path, uid, gid, dontFollow) => {
  var node;
  if (typeof path == "string") {
   var lookup = FS.lookupPath(path, {
    follow: !dontFollow
   });
   node = lookup.node;
  } else {
   node = path;
  }
  if (!node.node_ops.setattr) {
   throw new FS.ErrnoError(63);
  }
  node.node_ops.setattr(node, {
   timestamp: Date.now()
  });
 },
 lchown: (path, uid, gid) => {
  FS.chown(path, uid, gid, true);
 },
 fchown: (fd, uid, gid) => {
  var stream = FS.getStream(fd);
  if (!stream) {
   throw new FS.ErrnoError(8);
  }
  FS.chown(stream.node, uid, gid);
 },
 truncate: (path, len) => {
  if (len < 0) {
   throw new FS.ErrnoError(28);
  }
  var node;
  if (typeof path == "string") {
   var lookup = FS.lookupPath(path, {
    follow: true
   });
   node = lookup.node;
  } else {
   node = path;
  }
  if (!node.node_ops.setattr) {
   throw new FS.ErrnoError(63);
  }
  if (FS.isDir(node.mode)) {
   throw new FS.ErrnoError(31);
  }
  if (!FS.isFile(node.mode)) {
   throw new FS.ErrnoError(28);
  }
  var errCode = FS.nodePermissions(node, "w");
  if (errCode) {
   throw new FS.ErrnoError(errCode);
  }
  node.node_ops.setattr(node, {
   size: len,
   timestamp: Date.now()
  });
 },
 ftruncate: (fd, len) => {
  var stream = FS.getStream(fd);
  if (!stream) {
   throw new FS.ErrnoError(8);
  }
  if ((stream.flags & 2097155) === 0) {
   throw new FS.ErrnoError(28);
  }
  FS.truncate(stream.node, len);
 },
 utime: (path, atime, mtime) => {
  var lookup = FS.lookupPath(path, {
   follow: true
  });
  var node = lookup.node;
  node.node_ops.setattr(node, {
   timestamp: Math.max(atime, mtime)
  });
 },
 open: (path, flags, mode) => {
  if (path === "") {
   throw new FS.ErrnoError(44);
  }
  flags = typeof flags == "string" ? FS.modeStringToFlags(flags) : flags;
  mode = typeof mode == "undefined" ? 438 : mode;
  if (flags & 64) {
   mode = mode & 4095 | 32768;
  } else {
   mode = 0;
  }
  var node;
  if (typeof path == "object") {
   node = path;
  } else {
   path = PATH.normalize(path);
   try {
    var lookup = FS.lookupPath(path, {
     follow: !(flags & 131072)
    });
    node = lookup.node;
   } catch (e) {}
  }
  var created = false;
  if (flags & 64) {
   if (node) {
    if (flags & 128) {
     throw new FS.ErrnoError(20);
    }
   } else {
    node = FS.mknod(path, mode, 0);
    created = true;
   }
  }
  if (!node) {
   throw new FS.ErrnoError(44);
  }
  if (FS.isChrdev(node.mode)) {
   flags &= ~512;
  }
  if (flags & 65536 && !FS.isDir(node.mode)) {
   throw new FS.ErrnoError(54);
  }
  if (!created) {
   var errCode = FS.mayOpen(node, flags);
   if (errCode) {
    throw new FS.ErrnoError(errCode);
   }
  }
  if (flags & 512 && !created) {
   FS.truncate(node, 0);
  }
  flags &= ~(128 | 512 | 131072);
  var stream = FS.createStream({
   node: node,
   path: FS.getPath(node),
   flags: flags,
   seekable: true,
   position: 0,
   stream_ops: node.stream_ops,
   ungotten: [],
   error: false
  });
  if (stream.stream_ops.open) {
   stream.stream_ops.open(stream);
  }
  if (Module["logReadFiles"] && !(flags & 1)) {
   if (!FS.readFiles) FS.readFiles = {};
   if (!(path in FS.readFiles)) {
    FS.readFiles[path] = 1;
   }
  }
  return stream;
 },
 close: stream => {
  if (FS.isClosed(stream)) {
   throw new FS.ErrnoError(8);
  }
  if (stream.getdents) stream.getdents = null;
  try {
   if (stream.stream_ops.close) {
    stream.stream_ops.close(stream);
   }
  } catch (e) {
   throw e;
  } finally {
   FS.closeStream(stream.fd);
  }
  stream.fd = null;
 },
 isClosed: stream => {
  return stream.fd === null;
 },
 llseek: (stream, offset, whence) => {
  if (FS.isClosed(stream)) {
   throw new FS.ErrnoError(8);
  }
  if (!stream.seekable || !stream.stream_ops.llseek) {
   throw new FS.ErrnoError(70);
  }
  if (whence != 0 && whence != 1 && whence != 2) {
   throw new FS.ErrnoError(28);
  }
  stream.position = stream.stream_ops.llseek(stream, offset, whence);
  stream.ungotten = [];
  return stream.position;
 },
 read: (stream, buffer, offset, length, position) => {
  if (length < 0 || position < 0) {
   throw new FS.ErrnoError(28);
  }
  if (FS.isClosed(stream)) {
   throw new FS.ErrnoError(8);
  }
  if ((stream.flags & 2097155) === 1) {
   throw new FS.ErrnoError(8);
  }
  if (FS.isDir(stream.node.mode)) {
   throw new FS.ErrnoError(31);
  }
  if (!stream.stream_ops.read) {
   throw new FS.ErrnoError(28);
  }
  var seeking = typeof position != "undefined";
  if (!seeking) {
   position = stream.position;
  } else if (!stream.seekable) {
   throw new FS.ErrnoError(70);
  }
  var bytesRead = stream.stream_ops.read(stream, buffer, offset, length, position);
  if (!seeking) stream.position += bytesRead;
  return bytesRead;
 },
 write: (stream, buffer, offset, length, position, canOwn) => {
  if (length < 0 || position < 0) {
   throw new FS.ErrnoError(28);
  }
  if (FS.isClosed(stream)) {
   throw new FS.ErrnoError(8);
  }
  if ((stream.flags & 2097155) === 0) {
   throw new FS.ErrnoError(8);
  }
  if (FS.isDir(stream.node.mode)) {
   throw new FS.ErrnoError(31);
  }
  if (!stream.stream_ops.write) {
   throw new FS.ErrnoError(28);
  }
  if (stream.seekable && stream.flags & 1024) {
   FS.llseek(stream, 0, 2);
  }
  var seeking = typeof position != "undefined";
  if (!seeking) {
   position = stream.position;
  } else if (!stream.seekable) {
   throw new FS.ErrnoError(70);
  }
  var bytesWritten = stream.stream_ops.write(stream, buffer, offset, length, position, canOwn);
  if (!seeking) stream.position += bytesWritten;
  return bytesWritten;
 },
 allocate: (stream, offset, length) => {
  if (FS.isClosed(stream)) {
   throw new FS.ErrnoError(8);
  }
  if (offset < 0 || length <= 0) {
   throw new FS.ErrnoError(28);
  }
  if ((stream.flags & 2097155) === 0) {
   throw new FS.ErrnoError(8);
  }
  if (!FS.isFile(stream.node.mode) && !FS.isDir(stream.node.mode)) {
   throw new FS.ErrnoError(43);
  }
  if (!stream.stream_ops.allocate) {
   throw new FS.ErrnoError(138);
  }
  stream.stream_ops.allocate(stream, offset, length);
 },
 mmap: (stream, address, length, position, prot, flags) => {
  if ((prot & 2) !== 0 && (flags & 2) === 0 && (stream.flags & 2097155) !== 2) {
   throw new FS.ErrnoError(2);
  }
  if ((stream.flags & 2097155) === 1) {
   throw new FS.ErrnoError(2);
  }
  if (!stream.stream_ops.mmap) {
   throw new FS.ErrnoError(43);
  }
  return stream.stream_ops.mmap(stream, address, length, position, prot, flags);
 },
 msync: (stream, buffer, offset, length, mmapFlags) => {
  if (!stream || !stream.stream_ops.msync) {
   return 0;
  }
  return stream.stream_ops.msync(stream, buffer, offset, length, mmapFlags);
 },
 munmap: stream => 0,
 ioctl: (stream, cmd, arg) => {
  if (!stream.stream_ops.ioctl) {
   throw new FS.ErrnoError(59);
  }
  return stream.stream_ops.ioctl(stream, cmd, arg);
 },
 readFile: (path, opts = {}) => {
  opts.flags = opts.flags || 0;
  opts.encoding = opts.encoding || "binary";
  if (opts.encoding !== "utf8" && opts.encoding !== "binary") {
   throw new Error('Invalid encoding type "' + opts.encoding + '"');
  }
  var ret;
  var stream = FS.open(path, opts.flags);
  var stat = FS.stat(path);
  var length = stat.size;
  var buf = new Uint8Array(length);
  FS.read(stream, buf, 0, length, 0);
  if (opts.encoding === "utf8") {
   ret = UTF8ArrayToString(buf, 0);
  } else if (opts.encoding === "binary") {
   ret = buf;
  }
  FS.close(stream);
  return ret;
 },
 writeFile: (path, data, opts = {}) => {
  opts.flags = opts.flags || 577;
  var stream = FS.open(path, opts.flags, opts.mode);
  if (typeof data == "string") {
   var buf = new Uint8Array(lengthBytesUTF8(data) + 1);
   var actualNumBytes = stringToUTF8Array(data, buf, 0, buf.length);
   FS.write(stream, buf, 0, actualNumBytes, undefined, opts.canOwn);
  } else if (ArrayBuffer.isView(data)) {
   FS.write(stream, data, 0, data.byteLength, undefined, opts.canOwn);
  } else {
   throw new Error("Unsupported data type");
  }
  FS.close(stream);
 },
 cwd: () => FS.currentPath,
 chdir: path => {
  var lookup = FS.lookupPath(path, {
   follow: true
  });
  if (lookup.node === null) {
   throw new FS.ErrnoError(44);
  }
  if (!FS.isDir(lookup.node.mode)) {
   throw new FS.ErrnoError(54);
  }
  var errCode = FS.nodePermissions(lookup.node, "x");
  if (errCode) {
   throw new FS.ErrnoError(errCode);
  }
  FS.currentPath = lookup.path;
 },
 createDefaultDirectories: () => {
  FS.mkdir("/tmp");
  FS.mkdir("/home");
  FS.mkdir("/home/web_user");
 },
 createDefaultDevices: () => {
  FS.mkdir("/dev");
  FS.registerDevice(FS.makedev(1, 3), {
   read: () => 0,
   write: (stream, buffer, offset, length, pos) => length
  });
  FS.mkdev("/dev/null", FS.makedev(1, 3));
  TTY.register(FS.makedev(5, 0), TTY.default_tty_ops);
  TTY.register(FS.makedev(6, 0), TTY.default_tty1_ops);
  FS.mkdev("/dev/tty", FS.makedev(5, 0));
  FS.mkdev("/dev/tty1", FS.makedev(6, 0));
  var random_device = getRandomDevice();
  FS.createDevice("/dev", "random", random_device);
  FS.createDevice("/dev", "urandom", random_device);
  FS.mkdir("/dev/shm");
  FS.mkdir("/dev/shm/tmp");
 },
 createSpecialDirectories: () => {
  FS.mkdir("/proc");
  var proc_self = FS.mkdir("/proc/self");
  FS.mkdir("/proc/self/fd");
  FS.mount({
   mount: () => {
    var node = FS.createNode(proc_self, "fd", 16384 | 511, 73);
    node.node_ops = {
     lookup: (parent, name) => {
      var fd = +name;
      var stream = FS.getStream(fd);
      if (!stream) throw new FS.ErrnoError(8);
      var ret = {
       parent: null,
       mount: {
        mountpoint: "fake"
       },
       node_ops: {
        readlink: () => stream.path
       }
      };
      ret.parent = ret;
      return ret;
     }
    };
    return node;
   }
  }, {}, "/proc/self/fd");
 },
 createStandardStreams: () => {
  if (Module["stdin"]) {
   FS.createDevice("/dev", "stdin", Module["stdin"]);
  } else {
   FS.symlink("/dev/tty", "/dev/stdin");
  }
  if (Module["stdout"]) {
   FS.createDevice("/dev", "stdout", null, Module["stdout"]);
  } else {
   FS.symlink("/dev/tty", "/dev/stdout");
  }
  if (Module["stderr"]) {
   FS.createDevice("/dev", "stderr", null, Module["stderr"]);
  } else {
   FS.symlink("/dev/tty1", "/dev/stderr");
  }
  var stdin = FS.open("/dev/stdin", 0);
  var stdout = FS.open("/dev/stdout", 1);
  var stderr = FS.open("/dev/stderr", 1);
  assert(stdin.fd === 0, "invalid handle for stdin (" + stdin.fd + ")");
  assert(stdout.fd === 1, "invalid handle for stdout (" + stdout.fd + ")");
  assert(stderr.fd === 2, "invalid handle for stderr (" + stderr.fd + ")");
 },
 ensureErrnoError: () => {
  if (FS.ErrnoError) return;
  FS.ErrnoError = function ErrnoError(errno, node) {
   this.node = node;
   this.setErrno = function(errno) {
    this.errno = errno;
    for (var key in ERRNO_CODES) {
     if (ERRNO_CODES[key] === errno) {
      this.code = key;
      break;
     }
    }
   };
   this.setErrno(errno);
   this.message = ERRNO_MESSAGES[errno];
   if (this.stack) {
    Object.defineProperty(this, "stack", {
     value: new Error().stack,
     writable: true
    });
    this.stack = demangleAll(this.stack);
   }
  };
  FS.ErrnoError.prototype = new Error();
  FS.ErrnoError.prototype.constructor = FS.ErrnoError;
  [ 44 ].forEach(code => {
   FS.genericErrors[code] = new FS.ErrnoError(code);
   FS.genericErrors[code].stack = "<generic error, no stack>";
  });
 },
 staticInit: () => {
  FS.ensureErrnoError();
  FS.nameTable = new Array(4096);
  FS.mount(MEMFS, {}, "/");
  FS.createDefaultDirectories();
  FS.createDefaultDevices();
  FS.createSpecialDirectories();
  FS.filesystems = {
   "MEMFS": MEMFS
  };
 },
 init: (input, output, error) => {
  assert(!FS.init.initialized, "FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)");
  FS.init.initialized = true;
  FS.ensureErrnoError();
  Module["stdin"] = input || Module["stdin"];
  Module["stdout"] = output || Module["stdout"];
  Module["stderr"] = error || Module["stderr"];
  FS.createStandardStreams();
 },
 quit: () => {
  FS.init.initialized = false;
  ___stdio_exit();
  for (var i = 0; i < FS.streams.length; i++) {
   var stream = FS.streams[i];
   if (!stream) {
    continue;
   }
   FS.close(stream);
  }
 },
 getMode: (canRead, canWrite) => {
  var mode = 0;
  if (canRead) mode |= 292 | 73;
  if (canWrite) mode |= 146;
  return mode;
 },
 findObject: (path, dontResolveLastLink) => {
  var ret = FS.analyzePath(path, dontResolveLastLink);
  if (ret.exists) {
   return ret.object;
  } else {
   return null;
  }
 },
 analyzePath: (path, dontResolveLastLink) => {
  try {
   var lookup = FS.lookupPath(path, {
    follow: !dontResolveLastLink
   });
   path = lookup.path;
  } catch (e) {}
  var ret = {
   isRoot: false,
   exists: false,
   error: 0,
   name: null,
   path: null,
   object: null,
   parentExists: false,
   parentPath: null,
   parentObject: null
  };
  try {
   var lookup = FS.lookupPath(path, {
    parent: true
   });
   ret.parentExists = true;
   ret.parentPath = lookup.path;
   ret.parentObject = lookup.node;
   ret.name = PATH.basename(path);
   lookup = FS.lookupPath(path, {
    follow: !dontResolveLastLink
   });
   ret.exists = true;
   ret.path = lookup.path;
   ret.object = lookup.node;
   ret.name = lookup.node.name;
   ret.isRoot = lookup.path === "/";
  } catch (e) {
   ret.error = e.errno;
  }
  return ret;
 },
 createPath: (parent, path, canRead, canWrite) => {
  parent = typeof parent == "string" ? parent : FS.getPath(parent);
  var parts = path.split("/").reverse();
  while (parts.length) {
   var part = parts.pop();
   if (!part) continue;
   var current = PATH.join2(parent, part);
   try {
    FS.mkdir(current);
   } catch (e) {}
   parent = current;
  }
  return current;
 },
 createFile: (parent, name, properties, canRead, canWrite) => {
  var path = PATH.join2(typeof parent == "string" ? parent : FS.getPath(parent), name);
  var mode = FS.getMode(canRead, canWrite);
  return FS.create(path, mode);
 },
 createDataFile: (parent, name, data, canRead, canWrite, canOwn) => {
  var path = name;
  if (parent) {
   parent = typeof parent == "string" ? parent : FS.getPath(parent);
   path = name ? PATH.join2(parent, name) : parent;
  }
  var mode = FS.getMode(canRead, canWrite);
  var node = FS.create(path, mode);
  if (data) {
   if (typeof data == "string") {
    var arr = new Array(data.length);
    for (var i = 0, len = data.length; i < len; ++i) arr[i] = data.charCodeAt(i);
    data = arr;
   }
   FS.chmod(node, mode | 146);
   var stream = FS.open(node, 577);
   FS.write(stream, data, 0, data.length, 0, canOwn);
   FS.close(stream);
   FS.chmod(node, mode);
  }
  return node;
 },
 createDevice: (parent, name, input, output) => {
  var path = PATH.join2(typeof parent == "string" ? parent : FS.getPath(parent), name);
  var mode = FS.getMode(!!input, !!output);
  if (!FS.createDevice.major) FS.createDevice.major = 64;
  var dev = FS.makedev(FS.createDevice.major++, 0);
  FS.registerDevice(dev, {
   open: stream => {
    stream.seekable = false;
   },
   close: stream => {
    if (output && output.buffer && output.buffer.length) {
     output(10);
    }
   },
   read: (stream, buffer, offset, length, pos) => {
    var bytesRead = 0;
    for (var i = 0; i < length; i++) {
     var result;
     try {
      result = input();
     } catch (e) {
      throw new FS.ErrnoError(29);
     }
     if (result === undefined && bytesRead === 0) {
      throw new FS.ErrnoError(6);
     }
     if (result === null || result === undefined) break;
     bytesRead++;
     buffer[offset + i] = result;
    }
    if (bytesRead) {
     stream.node.timestamp = Date.now();
    }
    return bytesRead;
   },
   write: (stream, buffer, offset, length, pos) => {
    for (var i = 0; i < length; i++) {
     try {
      output(buffer[offset + i]);
     } catch (e) {
      throw new FS.ErrnoError(29);
     }
    }
    if (length) {
     stream.node.timestamp = Date.now();
    }
    return i;
   }
  });
  return FS.mkdev(path, mode, dev);
 },
 forceLoadFile: obj => {
  if (obj.isDevice || obj.isFolder || obj.link || obj.contents) return true;
  if (typeof XMLHttpRequest != "undefined") {
   throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
  } else if (read_) {
   try {
    obj.contents = intArrayFromString(read_(obj.url), true);
    obj.usedBytes = obj.contents.length;
   } catch (e) {
    throw new FS.ErrnoError(29);
   }
  } else {
   throw new Error("Cannot load without read() or XMLHttpRequest.");
  }
 },
 createLazyFile: (parent, name, url, canRead, canWrite) => {
  function LazyUint8Array() {
   this.lengthKnown = false;
   this.chunks = [];
  }
  LazyUint8Array.prototype.get = function LazyUint8Array_get(idx) {
   if (idx > this.length - 1 || idx < 0) {
    return undefined;
   }
   var chunkOffset = idx % this.chunkSize;
   var chunkNum = idx / this.chunkSize | 0;
   return this.getter(chunkNum)[chunkOffset];
  };
  LazyUint8Array.prototype.setDataGetter = function LazyUint8Array_setDataGetter(getter) {
   this.getter = getter;
  };
  LazyUint8Array.prototype.cacheLength = function LazyUint8Array_cacheLength() {
   var xhr = new XMLHttpRequest();
   xhr.open("HEAD", url, false);
   xhr.send(null);
   if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
   var datalength = Number(xhr.getResponseHeader("Content-length"));
   var header;
   var hasByteServing = (header = xhr.getResponseHeader("Accept-Ranges")) && header === "bytes";
   var usesGzip = (header = xhr.getResponseHeader("Content-Encoding")) && header === "gzip";
   var chunkSize = 1024 * 1024;
   if (!hasByteServing) chunkSize = datalength;
   var doXHR = (from, to) => {
    if (from > to) throw new Error("invalid range (" + from + ", " + to + ") or no bytes requested!");
    if (to > datalength - 1) throw new Error("only " + datalength + " bytes available! programmer error!");
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    if (datalength !== chunkSize) xhr.setRequestHeader("Range", "bytes=" + from + "-" + to);
    xhr.responseType = "arraybuffer";
    if (xhr.overrideMimeType) {
     xhr.overrideMimeType("text/plain; charset=x-user-defined");
    }
    xhr.send(null);
    if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
    if (xhr.response !== undefined) {
     return new Uint8Array(xhr.response || []);
    } else {
     return intArrayFromString(xhr.responseText || "", true);
    }
   };
   var lazyArray = this;
   lazyArray.setDataGetter(chunkNum => {
    var start = chunkNum * chunkSize;
    var end = (chunkNum + 1) * chunkSize - 1;
    end = Math.min(end, datalength - 1);
    if (typeof lazyArray.chunks[chunkNum] == "undefined") {
     lazyArray.chunks[chunkNum] = doXHR(start, end);
    }
    if (typeof lazyArray.chunks[chunkNum] == "undefined") throw new Error("doXHR failed!");
    return lazyArray.chunks[chunkNum];
   });
   if (usesGzip || !datalength) {
    chunkSize = datalength = 1;
    datalength = this.getter(0).length;
    chunkSize = datalength;
    out("LazyFiles on gzip forces download of the whole file when length is accessed");
   }
   this._length = datalength;
   this._chunkSize = chunkSize;
   this.lengthKnown = true;
  };
  if (typeof XMLHttpRequest != "undefined") {
   if (!ENVIRONMENT_IS_WORKER) throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
   var lazyArray = new LazyUint8Array();
   Object.defineProperties(lazyArray, {
    length: {
     get: function() {
      if (!this.lengthKnown) {
       this.cacheLength();
      }
      return this._length;
     }
    },
    chunkSize: {
     get: function() {
      if (!this.lengthKnown) {
       this.cacheLength();
      }
      return this._chunkSize;
     }
    }
   });
   var properties = {
    isDevice: false,
    contents: lazyArray
   };
  } else {
   var properties = {
    isDevice: false,
    url: url
   };
  }
  var node = FS.createFile(parent, name, properties, canRead, canWrite);
  if (properties.contents) {
   node.contents = properties.contents;
  } else if (properties.url) {
   node.contents = null;
   node.url = properties.url;
  }
  Object.defineProperties(node, {
   usedBytes: {
    get: function() {
     return this.contents.length;
    }
   }
  });
  var stream_ops = {};
  var keys = Object.keys(node.stream_ops);
  keys.forEach(key => {
   var fn = node.stream_ops[key];
   stream_ops[key] = function forceLoadLazyFile() {
    FS.forceLoadFile(node);
    return fn.apply(null, arguments);
   };
  });
  stream_ops.read = ((stream, buffer, offset, length, position) => {
   FS.forceLoadFile(node);
   var contents = stream.node.contents;
   if (position >= contents.length) return 0;
   var size = Math.min(contents.length - position, length);
   assert(size >= 0);
   if (contents.slice) {
    for (var i = 0; i < size; i++) {
     buffer[offset + i] = contents[position + i];
    }
   } else {
    for (var i = 0; i < size; i++) {
     buffer[offset + i] = contents.get(position + i);
    }
   }
   return size;
  });
  node.stream_ops = stream_ops;
  return node;
 },
 createPreloadedFile: (parent, name, url, canRead, canWrite, onload, onerror, dontCreateFile, canOwn, preFinish) => {
  var fullname = name ? PATH_FS.resolve(PATH.join2(parent, name)) : parent;
  var dep = getUniqueRunDependency("cp " + fullname);
  function processData(byteArray) {
   function finish(byteArray) {
    if (preFinish) preFinish();
    if (!dontCreateFile) {
     FS.createDataFile(parent, name, byteArray, canRead, canWrite, canOwn);
    }
    if (onload) onload();
    removeRunDependency(dep);
   }
   if (Browser.handledByPreloadPlugin(byteArray, fullname, finish, () => {
    if (onerror) onerror();
    removeRunDependency(dep);
   })) {
    return;
   }
   finish(byteArray);
  }
  addRunDependency(dep);
  if (typeof url == "string") {
   asyncLoad(url, byteArray => processData(byteArray), onerror);
  } else {
   processData(url);
  }
 },
 indexedDB: () => {
  return window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
 },
 DB_NAME: () => {
  return "EM_FS_" + window.location.pathname;
 },
 DB_VERSION: 20,
 DB_STORE_NAME: "FILE_DATA",
 saveFilesToDB: (paths, onload, onerror) => {
  onload = onload || (() => {});
  onerror = onerror || (() => {});
  var indexedDB = FS.indexedDB();
  try {
   var openRequest = indexedDB.open(FS.DB_NAME(), FS.DB_VERSION);
  } catch (e) {
   return onerror(e);
  }
  openRequest.onupgradeneeded = (() => {
   out("creating db");
   var db = openRequest.result;
   db.createObjectStore(FS.DB_STORE_NAME);
  });
  openRequest.onsuccess = (() => {
   var db = openRequest.result;
   var transaction = db.transaction([ FS.DB_STORE_NAME ], "readwrite");
   var files = transaction.objectStore(FS.DB_STORE_NAME);
   var ok = 0, fail = 0, total = paths.length;
   function finish() {
    if (fail == 0) onload(); else onerror();
   }
   paths.forEach(path => {
    var putRequest = files.put(FS.analyzePath(path).object.contents, path);
    putRequest.onsuccess = (() => {
     ok++;
     if (ok + fail == total) finish();
    });
    putRequest.onerror = (() => {
     fail++;
     if (ok + fail == total) finish();
    });
   });
   transaction.onerror = onerror;
  });
  openRequest.onerror = onerror;
 },
 loadFilesFromDB: (paths, onload, onerror) => {
  onload = onload || (() => {});
  onerror = onerror || (() => {});
  var indexedDB = FS.indexedDB();
  try {
   var openRequest = indexedDB.open(FS.DB_NAME(), FS.DB_VERSION);
  } catch (e) {
   return onerror(e);
  }
  openRequest.onupgradeneeded = onerror;
  openRequest.onsuccess = (() => {
   var db = openRequest.result;
   try {
    var transaction = db.transaction([ FS.DB_STORE_NAME ], "readonly");
   } catch (e) {
    onerror(e);
    return;
   }
   var files = transaction.objectStore(FS.DB_STORE_NAME);
   var ok = 0, fail = 0, total = paths.length;
   function finish() {
    if (fail == 0) onload(); else onerror();
   }
   paths.forEach(path => {
    var getRequest = files.get(path);
    getRequest.onsuccess = (() => {
     if (FS.analyzePath(path).exists) {
      FS.unlink(path);
     }
     FS.createDataFile(PATH.dirname(path), PATH.basename(path), getRequest.result, true, true, true);
     ok++;
     if (ok + fail == total) finish();
    });
    getRequest.onerror = (() => {
     fail++;
     if (ok + fail == total) finish();
    });
   });
   transaction.onerror = onerror;
  });
  openRequest.onerror = onerror;
 },
 absolutePath: () => {
  abort("FS.absolutePath has been removed; use PATH_FS.resolve instead");
 },
 createFolder: () => {
  abort("FS.createFolder has been removed; use FS.mkdir instead");
 },
 createLink: () => {
  abort("FS.createLink has been removed; use FS.symlink instead");
 },
 joinPath: () => {
  abort("FS.joinPath has been removed; use PATH.join instead");
 },
 mmapAlloc: () => {
  abort("FS.mmapAlloc has been replaced by the top level function mmapAlloc");
 },
 standardizePath: () => {
  abort("FS.standardizePath has been removed; use PATH.normalize instead");
 }
};

var SYSCALLS = {
 DEFAULT_POLLMASK: 5,
 calculateAt: function(dirfd, path, allowEmpty) {
  if (PATH.isAbs(path)) {
   return path;
  }
  var dir;
  if (dirfd === -100) {
   dir = FS.cwd();
  } else {
   var dirstream = FS.getStream(dirfd);
   if (!dirstream) throw new FS.ErrnoError(8);
   dir = dirstream.path;
  }
  if (path.length == 0) {
   if (!allowEmpty) {
    throw new FS.ErrnoError(44);
   }
   return dir;
  }
  return PATH.join2(dir, path);
 },
 doStat: function(func, path, buf) {
  try {
   var stat = func(path);
  } catch (e) {
   if (e && e.node && PATH.normalize(path) !== PATH.normalize(FS.getPath(e.node))) {
    return -54;
   }
   throw e;
  }
  SAFE_HEAP_STORE(buf | 0, stat.dev | 0, 4);
  SAFE_HEAP_STORE(buf + 4 | 0, 0 | 0, 4);
  SAFE_HEAP_STORE(buf + 8 | 0, stat.ino | 0, 4);
  SAFE_HEAP_STORE(buf + 12 | 0, stat.mode | 0, 4);
  SAFE_HEAP_STORE(buf + 16 | 0, stat.nlink | 0, 4);
  SAFE_HEAP_STORE(buf + 20 | 0, stat.uid | 0, 4);
  SAFE_HEAP_STORE(buf + 24 | 0, stat.gid | 0, 4);
  SAFE_HEAP_STORE(buf + 28 | 0, stat.rdev | 0, 4);
  SAFE_HEAP_STORE(buf + 32 | 0, 0 | 0, 4);
  tempI64 = [ stat.size >>> 0, (tempDouble = stat.size, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math.min(+Math.floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0) ], 
  SAFE_HEAP_STORE(buf + 40 | 0, tempI64[0] | 0, 4), SAFE_HEAP_STORE(buf + 44 | 0, tempI64[1] | 0, 4);
  SAFE_HEAP_STORE(buf + 48 | 0, 4096 | 0, 4);
  SAFE_HEAP_STORE(buf + 52 | 0, stat.blocks | 0, 4);
  SAFE_HEAP_STORE(buf + 56 | 0, stat.atime.getTime() / 1e3 | 0 | 0, 4);
  SAFE_HEAP_STORE(buf + 60 | 0, 0 | 0, 4);
  SAFE_HEAP_STORE(buf + 64 | 0, stat.mtime.getTime() / 1e3 | 0 | 0, 4);
  SAFE_HEAP_STORE(buf + 68 | 0, 0 | 0, 4);
  SAFE_HEAP_STORE(buf + 72 | 0, stat.ctime.getTime() / 1e3 | 0 | 0, 4);
  SAFE_HEAP_STORE(buf + 76 | 0, 0 | 0, 4);
  tempI64 = [ stat.ino >>> 0, (tempDouble = stat.ino, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math.min(+Math.floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0) ], 
  SAFE_HEAP_STORE(buf + 80 | 0, tempI64[0] | 0, 4), SAFE_HEAP_STORE(buf + 84 | 0, tempI64[1] | 0, 4);
  return 0;
 },
 doMsync: function(addr, stream, len, flags, offset) {
  var buffer = HEAPU8.slice(addr, addr + len);
  FS.msync(stream, buffer, offset, len, flags);
 },
 varargs: undefined,
 get: function() {
  assert(SYSCALLS.varargs != undefined);
  SYSCALLS.varargs += 4;
  var ret = SAFE_HEAP_LOAD(SYSCALLS.varargs - 4 | 0, 4, 0) | 0;
  return ret;
 },
 getStr: function(ptr) {
  var ret = UTF8ToString(ptr);
  return ret;
 },
 getStreamFromFD: function(fd) {
  var stream = FS.getStream(fd);
  if (!stream) throw new FS.ErrnoError(8);
  return stream;
 }
};

function ___syscall_fcntl64(fd, cmd, varargs) {
 SYSCALLS.varargs = varargs;
 try {
  var stream = SYSCALLS.getStreamFromFD(fd);
  switch (cmd) {
  case 0:
   {
    var arg = SYSCALLS.get();
    if (arg < 0) {
     return -28;
    }
    var newStream;
    newStream = FS.createStream(stream, arg);
    return newStream.fd;
   }

  case 1:
  case 2:
   return 0;

  case 3:
   return stream.flags;

  case 4:
   {
    var arg = SYSCALLS.get();
    stream.flags |= arg;
    return 0;
   }

  case 5:
   {
    var arg = SYSCALLS.get();
    var offset = 0;
    SAFE_HEAP_STORE(arg + offset | 0, 2 | 0, 2);
    return 0;
   }

  case 6:
  case 7:
   return 0;

  case 16:
  case 8:
   return -28;

  case 9:
   setErrNo(28);
   return -1;

  default:
   {
    return -28;
   }
  }
 } catch (e) {
  if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
  return -e.errno;
 }
}

function ___syscall_fstat64(fd, buf) {
 try {
  var stream = SYSCALLS.getStreamFromFD(fd);
  return SYSCALLS.doStat(FS.stat, stream.path, buf);
 } catch (e) {
  if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
  return -e.errno;
 }
}

function ___syscall_ioctl(fd, op, varargs) {
 SYSCALLS.varargs = varargs;
 try {
  var stream = SYSCALLS.getStreamFromFD(fd);
  switch (op) {
  case 21509:
  case 21505:
   {
    if (!stream.tty) return -59;
    return 0;
   }

  case 21510:
  case 21511:
  case 21512:
  case 21506:
  case 21507:
  case 21508:
   {
    if (!stream.tty) return -59;
    return 0;
   }

  case 21519:
   {
    if (!stream.tty) return -59;
    var argp = SYSCALLS.get();
    SAFE_HEAP_STORE(argp | 0, 0 | 0, 4);
    return 0;
   }

  case 21520:
   {
    if (!stream.tty) return -59;
    return -28;
   }

  case 21531:
   {
    var argp = SYSCALLS.get();
    return FS.ioctl(stream, op, argp);
   }

  case 21523:
   {
    if (!stream.tty) return -59;
    return 0;
   }

  case 21524:
   {
    if (!stream.tty) return -59;
    return 0;
   }

  default:
   abort("bad ioctl syscall " + op);
  }
 } catch (e) {
  if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
  return -e.errno;
 }
}

function ___syscall_lstat64(path, buf) {
 try {
  path = SYSCALLS.getStr(path);
  return SYSCALLS.doStat(FS.lstat, path, buf);
 } catch (e) {
  if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
  return -e.errno;
 }
}

function ___syscall_newfstatat(dirfd, path, buf, flags) {
 try {
  path = SYSCALLS.getStr(path);
  var nofollow = flags & 256;
  var allowEmpty = flags & 4096;
  flags = flags & ~4352;
  assert(!flags, flags);
  path = SYSCALLS.calculateAt(dirfd, path, allowEmpty);
  return SYSCALLS.doStat(nofollow ? FS.lstat : FS.stat, path, buf);
 } catch (e) {
  if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
  return -e.errno;
 }
}

function ___syscall_openat(dirfd, path, flags, varargs) {
 SYSCALLS.varargs = varargs;
 try {
  path = SYSCALLS.getStr(path);
  path = SYSCALLS.calculateAt(dirfd, path);
  var mode = varargs ? SYSCALLS.get() : 0;
  return FS.open(path, flags, mode).fd;
 } catch (e) {
  if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
  return -e.errno;
 }
}

function ___syscall_stat64(path, buf) {
 try {
  path = SYSCALLS.getStr(path);
  return SYSCALLS.doStat(FS.stat, path, buf);
 } catch (e) {
  if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
  return -e.errno;
 }
}

function __emscripten_date_now() {
 return Date.now();
}

var nowIsMonotonic = true;

function __emscripten_get_now_is_monotonic() {
 return nowIsMonotonic;
}

function _abort() {
 abort("native code called abort()");
}

function _emscripten_console_error(str) {
 assert(typeof str == "number");
 console.error(UTF8ToString(str));
}

var _emscripten_get_now;

_emscripten_get_now = (() => performance.now());

function _emscripten_get_heap_max() {
 return 2147483648;
}

function emscripten_realloc_buffer(size) {
 try {
  wasmMemory.grow(size - buffer.byteLength + 65535 >>> 16);
  updateGlobalBufferAndViews(wasmMemory.buffer);
  return 1;
 } catch (e) {
  err("emscripten_realloc_buffer: Attempted to grow heap from " + buffer.byteLength + " bytes to " + size + " bytes, but got error: " + e);
 }
}

function _emscripten_resize_heap(requestedSize) {
 var oldSize = HEAPU8.length;
 requestedSize = requestedSize >>> 0;
 assert(requestedSize > oldSize);
 var maxHeapSize = _emscripten_get_heap_max();
 if (requestedSize > maxHeapSize) {
  err("Cannot enlarge memory, asked to go up to " + requestedSize + " bytes, but the limit is " + maxHeapSize + " bytes!");
  return false;
 }
 let alignUp = (x, multiple) => x + (multiple - x % multiple) % multiple;
 for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
  var overGrownHeapSize = oldSize * (1 + .2 / cutDown);
  overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296);
  var newSize = Math.min(maxHeapSize, alignUp(Math.max(requestedSize, overGrownHeapSize), 65536));
  var replacement = emscripten_realloc_buffer(newSize);
  if (replacement) {
   return true;
  }
 }
 err("Failed to grow the heap from " + oldSize + " bytes to " + newSize + " bytes, not enough memory!");
 return false;
}

function _fd_close(fd) {
 try {
  var stream = SYSCALLS.getStreamFromFD(fd);
  FS.close(stream);
  return 0;
 } catch (e) {
  if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
  return e.errno;
 }
}

function doReadv(stream, iov, iovcnt, offset) {
 var ret = 0;
 for (var i = 0; i < iovcnt; i++) {
  var ptr = SAFE_HEAP_LOAD(iov | 0, 4, 0) | 0;
  var len = SAFE_HEAP_LOAD(iov + 4 | 0, 4, 0) | 0;
  iov += 8;
  var curr = FS.read(stream, HEAP8, ptr, len, offset);
  if (curr < 0) return -1;
  ret += curr;
  if (curr < len) break;
 }
 return ret;
}

function _fd_read(fd, iov, iovcnt, pnum) {
 try {
  var stream = SYSCALLS.getStreamFromFD(fd);
  var num = doReadv(stream, iov, iovcnt);
  SAFE_HEAP_STORE(pnum | 0, num | 0, 4);
  return 0;
 } catch (e) {
  if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
  return e.errno;
 }
}

function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {
 try {
  var stream = SYSCALLS.getStreamFromFD(fd);
  var HIGH_OFFSET = 4294967296;
  var offset = offset_high * HIGH_OFFSET + (offset_low >>> 0);
  var DOUBLE_LIMIT = 9007199254740992;
  if (offset <= -DOUBLE_LIMIT || offset >= DOUBLE_LIMIT) {
   return 61;
  }
  FS.llseek(stream, offset, whence);
  tempI64 = [ stream.position >>> 0, (tempDouble = stream.position, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math.min(+Math.floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0) ], 
  SAFE_HEAP_STORE(newOffset | 0, tempI64[0] | 0, 4), SAFE_HEAP_STORE(newOffset + 4 | 0, tempI64[1] | 0, 4);
  if (stream.getdents && offset === 0 && whence === 0) stream.getdents = null;
  return 0;
 } catch (e) {
  if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
  return e.errno;
 }
}

function doWritev(stream, iov, iovcnt, offset) {
 var ret = 0;
 for (var i = 0; i < iovcnt; i++) {
  var ptr = SAFE_HEAP_LOAD(iov | 0, 4, 0) | 0;
  var len = SAFE_HEAP_LOAD(iov + 4 | 0, 4, 0) | 0;
  iov += 8;
  var curr = FS.write(stream, HEAP8, ptr, len, offset);
  if (curr < 0) return -1;
  ret += curr;
 }
 return ret;
}

function _fd_write(fd, iov, iovcnt, pnum) {
 try {
  var stream = SYSCALLS.getStreamFromFD(fd);
  var num = doWritev(stream, iov, iovcnt);
  SAFE_HEAP_STORE(pnum | 0, num | 0, 4);
  return 0;
 } catch (e) {
  if (typeof FS == "undefined" || !(e instanceof FS.ErrnoError)) throw e;
  return e.errno;
 }
}

function _setTempRet0(val) {
 setTempRet0(val);
}

var FSNode = function(parent, name, mode, rdev) {
 if (!parent) {
  parent = this;
 }
 this.parent = parent;
 this.mount = parent.mount;
 this.mounted = null;
 this.id = FS.nextInode++;
 this.name = name;
 this.mode = mode;
 this.node_ops = {};
 this.stream_ops = {};
 this.rdev = rdev;
};

var readMode = 292 | 73;

var writeMode = 146;

Object.defineProperties(FSNode.prototype, {
 read: {
  get: function() {
   return (this.mode & readMode) === readMode;
  },
  set: function(val) {
   val ? this.mode |= readMode : this.mode &= ~readMode;
  }
 },
 write: {
  get: function() {
   return (this.mode & writeMode) === writeMode;
  },
  set: function(val) {
   val ? this.mode |= writeMode : this.mode &= ~writeMode;
  }
 },
 isFolder: {
  get: function() {
   return FS.isDir(this.mode);
  }
 },
 isDevice: {
  get: function() {
   return FS.isChrdev(this.mode);
  }
 }
});

FS.FSNode = FSNode;

FS.staticInit();

ERRNO_CODES = {
 "EPERM": 63,
 "ENOENT": 44,
 "ESRCH": 71,
 "EINTR": 27,
 "EIO": 29,
 "ENXIO": 60,
 "E2BIG": 1,
 "ENOEXEC": 45,
 "EBADF": 8,
 "ECHILD": 12,
 "EAGAIN": 6,
 "EWOULDBLOCK": 6,
 "ENOMEM": 48,
 "EACCES": 2,
 "EFAULT": 21,
 "ENOTBLK": 105,
 "EBUSY": 10,
 "EEXIST": 20,
 "EXDEV": 75,
 "ENODEV": 43,
 "ENOTDIR": 54,
 "EISDIR": 31,
 "EINVAL": 28,
 "ENFILE": 41,
 "EMFILE": 33,
 "ENOTTY": 59,
 "ETXTBSY": 74,
 "EFBIG": 22,
 "ENOSPC": 51,
 "ESPIPE": 70,
 "EROFS": 69,
 "EMLINK": 34,
 "EPIPE": 64,
 "EDOM": 18,
 "ERANGE": 68,
 "ENOMSG": 49,
 "EIDRM": 24,
 "ECHRNG": 106,
 "EL2NSYNC": 156,
 "EL3HLT": 107,
 "EL3RST": 108,
 "ELNRNG": 109,
 "EUNATCH": 110,
 "ENOCSI": 111,
 "EL2HLT": 112,
 "EDEADLK": 16,
 "ENOLCK": 46,
 "EBADE": 113,
 "EBADR": 114,
 "EXFULL": 115,
 "ENOANO": 104,
 "EBADRQC": 103,
 "EBADSLT": 102,
 "EDEADLOCK": 16,
 "EBFONT": 101,
 "ENOSTR": 100,
 "ENODATA": 116,
 "ETIME": 117,
 "ENOSR": 118,
 "ENONET": 119,
 "ENOPKG": 120,
 "EREMOTE": 121,
 "ENOLINK": 47,
 "EADV": 122,
 "ESRMNT": 123,
 "ECOMM": 124,
 "EPROTO": 65,
 "EMULTIHOP": 36,
 "EDOTDOT": 125,
 "EBADMSG": 9,
 "ENOTUNIQ": 126,
 "EBADFD": 127,
 "EREMCHG": 128,
 "ELIBACC": 129,
 "ELIBBAD": 130,
 "ELIBSCN": 131,
 "ELIBMAX": 132,
 "ELIBEXEC": 133,
 "ENOSYS": 52,
 "ENOTEMPTY": 55,
 "ENAMETOOLONG": 37,
 "ELOOP": 32,
 "EOPNOTSUPP": 138,
 "EPFNOSUPPORT": 139,
 "ECONNRESET": 15,
 "ENOBUFS": 42,
 "EAFNOSUPPORT": 5,
 "EPROTOTYPE": 67,
 "ENOTSOCK": 57,
 "ENOPROTOOPT": 50,
 "ESHUTDOWN": 140,
 "ECONNREFUSED": 14,
 "EADDRINUSE": 3,
 "ECONNABORTED": 13,
 "ENETUNREACH": 40,
 "ENETDOWN": 38,
 "ETIMEDOUT": 73,
 "EHOSTDOWN": 142,
 "EHOSTUNREACH": 23,
 "EINPROGRESS": 26,
 "EALREADY": 7,
 "EDESTADDRREQ": 17,
 "EMSGSIZE": 35,
 "EPROTONOSUPPORT": 66,
 "ESOCKTNOSUPPORT": 137,
 "EADDRNOTAVAIL": 4,
 "ENETRESET": 39,
 "EISCONN": 30,
 "ENOTCONN": 53,
 "ETOOMANYREFS": 141,
 "EUSERS": 136,
 "EDQUOT": 19,
 "ESTALE": 72,
 "ENOTSUP": 138,
 "ENOMEDIUM": 148,
 "EILSEQ": 25,
 "EOVERFLOW": 61,
 "ECANCELED": 11,
 "ENOTRECOVERABLE": 56,
 "EOWNERDEAD": 62,
 "ESTRPIPE": 135
};

var ASSERTIONS = true;

function intArrayFromString(stringy, dontAddNull, length) {
 var len = length > 0 ? length : lengthBytesUTF8(stringy) + 1;
 var u8array = new Array(len);
 var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
 if (dontAddNull) u8array.length = numBytesWritten;
 return u8array;
}

function intArrayToString(array) {
 var ret = [];
 for (var i = 0; i < array.length; i++) {
  var chr = array[i];
  if (chr > 255) {
   if (ASSERTIONS) {
    assert(false, "Character code " + chr + " (" + String.fromCharCode(chr) + ")  at offset " + i + " not in 0x00-0xFF.");
   }
   chr &= 255;
  }
  ret.push(String.fromCharCode(chr));
 }
 return ret.join("");
}

function checkIncomingModuleAPI() {
 ignoredModuleProp("fetchSettings");
}

var asmLibraryArg = {
 "__cxa_allocate_exception": ___cxa_allocate_exception,
 "__cxa_throw": ___cxa_throw,
 "__syscall_fcntl64": ___syscall_fcntl64,
 "__syscall_fstat64": ___syscall_fstat64,
 "__syscall_ioctl": ___syscall_ioctl,
 "__syscall_lstat64": ___syscall_lstat64,
 "__syscall_newfstatat": ___syscall_newfstatat,
 "__syscall_openat": ___syscall_openat,
 "__syscall_stat64": ___syscall_stat64,
 "_emscripten_date_now": __emscripten_date_now,
 "_emscripten_get_now_is_monotonic": __emscripten_get_now_is_monotonic,
 "abort": _abort,
 "alignfault": alignfault,
 "emscripten_console_error": _emscripten_console_error,
 "emscripten_get_now": _emscripten_get_now,
 "emscripten_resize_heap": _emscripten_resize_heap,
 "fd_close": _fd_close,
 "fd_read": _fd_read,
 "fd_seek": _fd_seek,
 "fd_write": _fd_write,
 "segfault": segfault,
 "setTempRet0": _setTempRet0
};

var asm = createWasm();

var ___wasm_call_ctors = Module["___wasm_call_ctors"] = createExportWrapper("__wasm_call_ctors");

var _fluid_log = Module["_fluid_log"] = createExportWrapper("fluid_log");

var _fluid_settings_getint = Module["_fluid_settings_getint"] = createExportWrapper("fluid_settings_getint");

var _fluid_settings_getnum = Module["_fluid_settings_getnum"] = createExportWrapper("fluid_settings_getnum");

var _new_fluid_file_renderer = Module["_new_fluid_file_renderer"] = createExportWrapper("new_fluid_file_renderer");

var _fluid_file_renderer_process_block = Module["_fluid_file_renderer_process_block"] = createExportWrapper("fluid_file_renderer_process_block");

var _delete_fluid_file_renderer = Module["_delete_fluid_file_renderer"] = createExportWrapper("delete_fluid_file_renderer");

var _fluid_free = Module["_fluid_free"] = createExportWrapper("fluid_free");

var _new_fluid_settings = Module["_new_fluid_settings"] = createExportWrapper("new_fluid_settings");

var _delete_fluid_settings = Module["_delete_fluid_settings"] = createExportWrapper("delete_fluid_settings");

var _fluid_settings_get_type = Module["_fluid_settings_get_type"] = createExportWrapper("fluid_settings_get_type");

var _fluid_settings_get_hints = Module["_fluid_settings_get_hints"] = createExportWrapper("fluid_settings_get_hints");

var _fluid_settings_is_realtime = Module["_fluid_settings_is_realtime"] = createExportWrapper("fluid_settings_is_realtime");

var _fluid_settings_setstr = Module["_fluid_settings_setstr"] = createExportWrapper("fluid_settings_setstr");

var _fluid_settings_copystr = Module["_fluid_settings_copystr"] = createExportWrapper("fluid_settings_copystr");

var _fluid_settings_dupstr = Module["_fluid_settings_dupstr"] = createExportWrapper("fluid_settings_dupstr");

var _fluid_settings_str_equal = Module["_fluid_settings_str_equal"] = createExportWrapper("fluid_settings_str_equal");

var _fluid_settings_getstr_default = Module["_fluid_settings_getstr_default"] = createExportWrapper("fluid_settings_getstr_default");

var _fluid_settings_setnum = Module["_fluid_settings_setnum"] = createExportWrapper("fluid_settings_setnum");

var _fluid_settings_getnum_range = Module["_fluid_settings_getnum_range"] = createExportWrapper("fluid_settings_getnum_range");

var _fluid_settings_getnum_default = Module["_fluid_settings_getnum_default"] = createExportWrapper("fluid_settings_getnum_default");

var _fluid_settings_setint = Module["_fluid_settings_setint"] = createExportWrapper("fluid_settings_setint");

var _fluid_settings_getint_range = Module["_fluid_settings_getint_range"] = createExportWrapper("fluid_settings_getint_range");

var _fluid_settings_getint_default = Module["_fluid_settings_getint_default"] = createExportWrapper("fluid_settings_getint_default");

var _fluid_settings_foreach_option = Module["_fluid_settings_foreach_option"] = createExportWrapper("fluid_settings_foreach_option");

var _fluid_settings_option_count = Module["_fluid_settings_option_count"] = createExportWrapper("fluid_settings_option_count");

var _fluid_settings_option_concat = Module["_fluid_settings_option_concat"] = createExportWrapper("fluid_settings_option_concat");

var _fluid_settings_foreach = Module["_fluid_settings_foreach"] = createExportWrapper("fluid_settings_foreach");

var _fluid_set_log_function = Module["_fluid_set_log_function"] = createExportWrapper("fluid_set_log_function");

var _fluid_default_log_function = Module["_fluid_default_log_function"] = createExportWrapper("fluid_default_log_function");

var _malloc = Module["_malloc"] = createExportWrapper("malloc");

var _free = Module["_free"] = createExportWrapper("free");

var _new_fluid_defsfloader = Module["_new_fluid_defsfloader"] = createExportWrapper("new_fluid_defsfloader");

var _delete_fluid_sfloader = Module["_delete_fluid_sfloader"] = createExportWrapper("delete_fluid_sfloader");

var _new_fluid_sfloader = Module["_new_fluid_sfloader"] = createExportWrapper("new_fluid_sfloader");

var _fluid_sfloader_set_data = Module["_fluid_sfloader_set_data"] = createExportWrapper("fluid_sfloader_set_data");

var _fluid_sfloader_get_data = Module["_fluid_sfloader_get_data"] = createExportWrapper("fluid_sfloader_get_data");

var _new_fluid_sfont = Module["_new_fluid_sfont"] = createExportWrapper("new_fluid_sfont");

var _fluid_sfont_set_data = Module["_fluid_sfont_set_data"] = createExportWrapper("fluid_sfont_set_data");

var _fluid_sfont_get_data = Module["_fluid_sfont_get_data"] = createExportWrapper("fluid_sfont_get_data");

var _delete_fluid_sfont = Module["_delete_fluid_sfont"] = createExportWrapper("delete_fluid_sfont");

var _delete_fluid_sample = Module["_delete_fluid_sample"] = createExportWrapper("delete_fluid_sample");

var _new_fluid_sample = Module["_new_fluid_sample"] = createExportWrapper("new_fluid_sample");

var _fluid_preset_get_banknum = Module["_fluid_preset_get_banknum"] = createExportWrapper("fluid_preset_get_banknum");

var _fluid_preset_get_num = Module["_fluid_preset_get_num"] = createExportWrapper("fluid_preset_get_num");

var _fluid_preset_get_data = Module["_fluid_preset_get_data"] = createExportWrapper("fluid_preset_get_data");

var _delete_fluid_preset = Module["_delete_fluid_preset"] = createExportWrapper("delete_fluid_preset");

var _fluid_voice_gen_set = Module["_fluid_voice_gen_set"] = createExportWrapper("fluid_voice_gen_set");

var _fluid_voice_gen_incr = Module["_fluid_voice_gen_incr"] = createExportWrapper("fluid_voice_gen_incr");

var _fluid_synth_start_voice = Module["_fluid_synth_start_voice"] = createExportWrapper("fluid_synth_start_voice");

var _fluid_preset_get_name = Module["_fluid_preset_get_name"] = createExportWrapper("fluid_preset_get_name");

var _fluid_voice_optimize_sample = Module["_fluid_voice_optimize_sample"] = createExportWrapper("fluid_voice_optimize_sample");

var _new_fluid_preset = Module["_new_fluid_preset"] = createExportWrapper("new_fluid_preset");

var _fluid_preset_set_data = Module["_fluid_preset_set_data"] = createExportWrapper("fluid_preset_set_data");

var _fluid_mod_test_identity = Module["_fluid_mod_test_identity"] = createExportWrapper("fluid_mod_test_identity");

var _delete_fluid_mod = Module["_delete_fluid_mod"] = createExportWrapper("delete_fluid_mod");

var _new_fluid_mod = Module["_new_fluid_mod"] = createExportWrapper("new_fluid_mod");

var _fluid_sfloader_set_callbacks = Module["_fluid_sfloader_set_callbacks"] = createExportWrapper("fluid_sfloader_set_callbacks");

var _fluid_sfont_get_id = Module["_fluid_sfont_get_id"] = createExportWrapper("fluid_sfont_get_id");

var _fluid_sfont_get_name = Module["_fluid_sfont_get_name"] = createExportWrapper("fluid_sfont_get_name");

var _fluid_sfont_get_preset = Module["_fluid_sfont_get_preset"] = createExportWrapper("fluid_sfont_get_preset");

var _fluid_sfont_iteration_start = Module["_fluid_sfont_iteration_start"] = createExportWrapper("fluid_sfont_iteration_start");

var _fluid_sfont_iteration_next = Module["_fluid_sfont_iteration_next"] = createExportWrapper("fluid_sfont_iteration_next");

var _fluid_preset_get_sfont = Module["_fluid_preset_get_sfont"] = createExportWrapper("fluid_preset_get_sfont");

var _fluid_sample_sizeof = Module["_fluid_sample_sizeof"] = createExportWrapper("fluid_sample_sizeof");

var _fluid_sample_set_name = Module["_fluid_sample_set_name"] = createExportWrapper("fluid_sample_set_name");

var _fluid_sample_set_sound_data = Module["_fluid_sample_set_sound_data"] = createExportWrapper("fluid_sample_set_sound_data");

var _fluid_sample_set_loop = Module["_fluid_sample_set_loop"] = createExportWrapper("fluid_sample_set_loop");

var _fluid_sample_set_pitch = Module["_fluid_sample_set_pitch"] = createExportWrapper("fluid_sample_set_pitch");

var _fluid_is_soundfont = Module["_fluid_is_soundfont"] = createExportWrapper("fluid_is_soundfont");

var _new_fluid_event = Module["_new_fluid_event"] = createExportWrapper("new_fluid_event");

var _delete_fluid_event = Module["_delete_fluid_event"] = createExportWrapper("delete_fluid_event");

var _fluid_event_set_source = Module["_fluid_event_set_source"] = createExportWrapper("fluid_event_set_source");

var _fluid_event_set_dest = Module["_fluid_event_set_dest"] = createExportWrapper("fluid_event_set_dest");

var _fluid_event_timer = Module["_fluid_event_timer"] = createExportWrapper("fluid_event_timer");

var _fluid_event_noteon = Module["_fluid_event_noteon"] = createExportWrapper("fluid_event_noteon");

var _fluid_event_noteoff = Module["_fluid_event_noteoff"] = createExportWrapper("fluid_event_noteoff");

var _fluid_event_note = Module["_fluid_event_note"] = createExportWrapper("fluid_event_note");

var _fluid_event_all_sounds_off = Module["_fluid_event_all_sounds_off"] = createExportWrapper("fluid_event_all_sounds_off");

var _fluid_event_all_notes_off = Module["_fluid_event_all_notes_off"] = createExportWrapper("fluid_event_all_notes_off");

var _fluid_event_bank_select = Module["_fluid_event_bank_select"] = createExportWrapper("fluid_event_bank_select");

var _fluid_event_program_change = Module["_fluid_event_program_change"] = createExportWrapper("fluid_event_program_change");

var _fluid_event_program_select = Module["_fluid_event_program_select"] = createExportWrapper("fluid_event_program_select");

var _fluid_event_pitch_bend = Module["_fluid_event_pitch_bend"] = createExportWrapper("fluid_event_pitch_bend");

var _fluid_event_pitch_wheelsens = Module["_fluid_event_pitch_wheelsens"] = createExportWrapper("fluid_event_pitch_wheelsens");

var _fluid_event_modulation = Module["_fluid_event_modulation"] = createExportWrapper("fluid_event_modulation");

var _fluid_event_sustain = Module["_fluid_event_sustain"] = createExportWrapper("fluid_event_sustain");

var _fluid_event_control_change = Module["_fluid_event_control_change"] = createExportWrapper("fluid_event_control_change");

var _fluid_event_pan = Module["_fluid_event_pan"] = createExportWrapper("fluid_event_pan");

var _fluid_event_volume = Module["_fluid_event_volume"] = createExportWrapper("fluid_event_volume");

var _fluid_event_reverb_send = Module["_fluid_event_reverb_send"] = createExportWrapper("fluid_event_reverb_send");

var _fluid_event_chorus_send = Module["_fluid_event_chorus_send"] = createExportWrapper("fluid_event_chorus_send");

var _fluid_event_unregistering = Module["_fluid_event_unregistering"] = createExportWrapper("fluid_event_unregistering");

var _fluid_event_scale = Module["_fluid_event_scale"] = createExportWrapper("fluid_event_scale");

var _fluid_event_channel_pressure = Module["_fluid_event_channel_pressure"] = createExportWrapper("fluid_event_channel_pressure");

var _fluid_event_key_pressure = Module["_fluid_event_key_pressure"] = createExportWrapper("fluid_event_key_pressure");

var _fluid_event_system_reset = Module["_fluid_event_system_reset"] = createExportWrapper("fluid_event_system_reset");

var _fluid_event_from_midi_event = Module["_fluid_event_from_midi_event"] = createExportWrapper("fluid_event_from_midi_event");

var _fluid_midi_event_get_channel = Module["_fluid_midi_event_get_channel"] = createExportWrapper("fluid_midi_event_get_channel");

var _fluid_midi_event_get_type = Module["_fluid_midi_event_get_type"] = createExportWrapper("fluid_midi_event_get_type");

var _fluid_midi_event_get_key = Module["_fluid_midi_event_get_key"] = createExportWrapper("fluid_midi_event_get_key");

var _fluid_midi_event_get_velocity = Module["_fluid_midi_event_get_velocity"] = createExportWrapper("fluid_midi_event_get_velocity");

var _fluid_midi_event_get_control = Module["_fluid_midi_event_get_control"] = createExportWrapper("fluid_midi_event_get_control");

var _fluid_midi_event_get_value = Module["_fluid_midi_event_get_value"] = createExportWrapper("fluid_midi_event_get_value");

var _fluid_midi_event_get_program = Module["_fluid_midi_event_get_program"] = createExportWrapper("fluid_midi_event_get_program");

var _fluid_midi_event_get_pitch = Module["_fluid_midi_event_get_pitch"] = createExportWrapper("fluid_midi_event_get_pitch");

var _fluid_event_get_type = Module["_fluid_event_get_type"] = createExportWrapper("fluid_event_get_type");

var _fluid_event_get_source = Module["_fluid_event_get_source"] = createExportWrapper("fluid_event_get_source");

var _fluid_event_get_dest = Module["_fluid_event_get_dest"] = createExportWrapper("fluid_event_get_dest");

var _fluid_event_get_channel = Module["_fluid_event_get_channel"] = createExportWrapper("fluid_event_get_channel");

var _fluid_event_get_key = Module["_fluid_event_get_key"] = createExportWrapper("fluid_event_get_key");

var _fluid_event_get_velocity = Module["_fluid_event_get_velocity"] = createExportWrapper("fluid_event_get_velocity");

var _fluid_event_get_control = Module["_fluid_event_get_control"] = createExportWrapper("fluid_event_get_control");

var _fluid_event_get_value = Module["_fluid_event_get_value"] = createExportWrapper("fluid_event_get_value");

var _fluid_event_get_data = Module["_fluid_event_get_data"] = createExportWrapper("fluid_event_get_data");

var _fluid_event_get_duration = Module["_fluid_event_get_duration"] = createExportWrapper("fluid_event_get_duration");

var _fluid_event_get_bank = Module["_fluid_event_get_bank"] = createExportWrapper("fluid_event_get_bank");

var _fluid_event_get_pitch = Module["_fluid_event_get_pitch"] = createExportWrapper("fluid_event_get_pitch");

var _fluid_event_get_program = Module["_fluid_event_get_program"] = createExportWrapper("fluid_event_get_program");

var _fluid_event_get_sfont_id = Module["_fluid_event_get_sfont_id"] = createExportWrapper("fluid_event_get_sfont_id");

var _fluid_event_get_scale = Module["_fluid_event_get_scale"] = createExportWrapper("fluid_event_get_scale");

var _fluid_mod_clone = Module["_fluid_mod_clone"] = createExportWrapper("fluid_mod_clone");

var _fluid_mod_set_source1 = Module["_fluid_mod_set_source1"] = createExportWrapper("fluid_mod_set_source1");

var _fluid_mod_set_source2 = Module["_fluid_mod_set_source2"] = createExportWrapper("fluid_mod_set_source2");

var _fluid_mod_set_dest = Module["_fluid_mod_set_dest"] = createExportWrapper("fluid_mod_set_dest");

var _fluid_mod_set_amount = Module["_fluid_mod_set_amount"] = createExportWrapper("fluid_mod_set_amount");

var _fluid_mod_get_source1 = Module["_fluid_mod_get_source1"] = createExportWrapper("fluid_mod_get_source1");

var _fluid_mod_get_flags1 = Module["_fluid_mod_get_flags1"] = createExportWrapper("fluid_mod_get_flags1");

var _fluid_mod_get_source2 = Module["_fluid_mod_get_source2"] = createExportWrapper("fluid_mod_get_source2");

var _fluid_mod_get_flags2 = Module["_fluid_mod_get_flags2"] = createExportWrapper("fluid_mod_get_flags2");

var _fluid_mod_get_dest = Module["_fluid_mod_get_dest"] = createExportWrapper("fluid_mod_get_dest");

var _fluid_mod_get_amount = Module["_fluid_mod_get_amount"] = createExportWrapper("fluid_mod_get_amount");

var _fluid_voice_get_actual_velocity = Module["_fluid_voice_get_actual_velocity"] = createExportWrapper("fluid_voice_get_actual_velocity");

var _fluid_voice_get_actual_key = Module["_fluid_voice_get_actual_key"] = createExportWrapper("fluid_voice_get_actual_key");

var _fluid_mod_sizeof = Module["_fluid_mod_sizeof"] = createExportWrapper("fluid_mod_sizeof");

var _fluid_mod_has_source = Module["_fluid_mod_has_source"] = createExportWrapper("fluid_mod_has_source");

var _fluid_mod_has_dest = Module["_fluid_mod_has_dest"] = createExportWrapper("fluid_mod_has_dest");

var _fluid_version = Module["_fluid_version"] = createExportWrapper("fluid_version");

var _fluid_version_str = Module["_fluid_version_str"] = createExportWrapper("fluid_version_str");

var _new_fluid_synth = Module["_new_fluid_synth"] = createExportWrapper("new_fluid_synth");

var _fluid_synth_add_default_mod = Module["_fluid_synth_add_default_mod"] = createExportWrapper("fluid_synth_add_default_mod");

var _fluid_synth_add_sfloader = Module["_fluid_synth_add_sfloader"] = createExportWrapper("fluid_synth_add_sfloader");

var _fluid_synth_reverb_on = Module["_fluid_synth_reverb_on"] = createExportWrapper("fluid_synth_reverb_on");

var _fluid_synth_chorus_on = Module["_fluid_synth_chorus_on"] = createExportWrapper("fluid_synth_chorus_on");

var _delete_fluid_synth = Module["_delete_fluid_synth"] = createExportWrapper("delete_fluid_synth");

var _fluid_synth_set_gain = Module["_fluid_synth_set_gain"] = createExportWrapper("fluid_synth_set_gain");

var _fluid_synth_set_polyphony = Module["_fluid_synth_set_polyphony"] = createExportWrapper("fluid_synth_set_polyphony");

var _fluid_voice_is_playing = Module["_fluid_voice_is_playing"] = createExportWrapper("fluid_voice_is_playing");

var _fluid_synth_error = Module["_fluid_synth_error"] = createExportWrapper("fluid_synth_error");

var _fluid_synth_noteon = Module["_fluid_synth_noteon"] = createExportWrapper("fluid_synth_noteon");

var _fluid_synth_noteoff = Module["_fluid_synth_noteoff"] = createExportWrapper("fluid_synth_noteoff");

var _fluid_synth_remove_default_mod = Module["_fluid_synth_remove_default_mod"] = createExportWrapper("fluid_synth_remove_default_mod");

var _fluid_synth_cc = Module["_fluid_synth_cc"] = createExportWrapper("fluid_synth_cc");

var _fluid_synth_activate_tuning = Module["_fluid_synth_activate_tuning"] = createExportWrapper("fluid_synth_activate_tuning");

var _fluid_synth_get_cc = Module["_fluid_synth_get_cc"] = createExportWrapper("fluid_synth_get_cc");

var _fluid_synth_sysex = Module["_fluid_synth_sysex"] = createExportWrapper("fluid_synth_sysex");

var _fluid_synth_tuning_dump = Module["_fluid_synth_tuning_dump"] = createExportWrapper("fluid_synth_tuning_dump");

var _fluid_synth_tune_notes = Module["_fluid_synth_tune_notes"] = createExportWrapper("fluid_synth_tune_notes");

var _fluid_synth_activate_octave_tuning = Module["_fluid_synth_activate_octave_tuning"] = createExportWrapper("fluid_synth_activate_octave_tuning");

var _fluid_synth_set_basic_channel = Module["_fluid_synth_set_basic_channel"] = createExportWrapper("fluid_synth_set_basic_channel");

var _fluid_synth_program_change = Module["_fluid_synth_program_change"] = createExportWrapper("fluid_synth_program_change");

var _fluid_synth_all_notes_off = Module["_fluid_synth_all_notes_off"] = createExportWrapper("fluid_synth_all_notes_off");

var _fluid_voice_get_channel = Module["_fluid_voice_get_channel"] = createExportWrapper("fluid_voice_get_channel");

var _fluid_synth_all_sounds_off = Module["_fluid_synth_all_sounds_off"] = createExportWrapper("fluid_synth_all_sounds_off");

var _fluid_synth_system_reset = Module["_fluid_synth_system_reset"] = createExportWrapper("fluid_synth_system_reset");

var _fluid_synth_channel_pressure = Module["_fluid_synth_channel_pressure"] = createExportWrapper("fluid_synth_channel_pressure");

var _fluid_synth_key_pressure = Module["_fluid_synth_key_pressure"] = createExportWrapper("fluid_synth_key_pressure");

var _fluid_synth_pitch_bend = Module["_fluid_synth_pitch_bend"] = createExportWrapper("fluid_synth_pitch_bend");

var _fluid_synth_get_pitch_bend = Module["_fluid_synth_get_pitch_bend"] = createExportWrapper("fluid_synth_get_pitch_bend");

var _fluid_synth_pitch_wheel_sens = Module["_fluid_synth_pitch_wheel_sens"] = createExportWrapper("fluid_synth_pitch_wheel_sens");

var _fluid_synth_get_pitch_wheel_sens = Module["_fluid_synth_get_pitch_wheel_sens"] = createExportWrapper("fluid_synth_get_pitch_wheel_sens");

var _fluid_synth_bank_select = Module["_fluid_synth_bank_select"] = createExportWrapper("fluid_synth_bank_select");

var _fluid_synth_sfont_select = Module["_fluid_synth_sfont_select"] = createExportWrapper("fluid_synth_sfont_select");

var _fluid_synth_unset_program = Module["_fluid_synth_unset_program"] = createExportWrapper("fluid_synth_unset_program");

var _fluid_synth_get_program = Module["_fluid_synth_get_program"] = createExportWrapper("fluid_synth_get_program");

var _fluid_synth_program_select = Module["_fluid_synth_program_select"] = createExportWrapper("fluid_synth_program_select");

var _fluid_synth_pin_preset = Module["_fluid_synth_pin_preset"] = createExportWrapper("fluid_synth_pin_preset");

var _fluid_synth_unpin_preset = Module["_fluid_synth_unpin_preset"] = createExportWrapper("fluid_synth_unpin_preset");

var _fluid_synth_program_select_by_sfont_name = Module["_fluid_synth_program_select_by_sfont_name"] = createExportWrapper("fluid_synth_program_select_by_sfont_name");

var _fluid_synth_set_sample_rate = Module["_fluid_synth_set_sample_rate"] = createExportWrapper("fluid_synth_set_sample_rate");

var _fluid_synth_get_gain = Module["_fluid_synth_get_gain"] = createExportWrapper("fluid_synth_get_gain");

var _fluid_synth_get_polyphony = Module["_fluid_synth_get_polyphony"] = createExportWrapper("fluid_synth_get_polyphony");

var _fluid_synth_get_active_voice_count = Module["_fluid_synth_get_active_voice_count"] = createExportWrapper("fluid_synth_get_active_voice_count");

var _fluid_synth_get_internal_bufsize = Module["_fluid_synth_get_internal_bufsize"] = createExportWrapper("fluid_synth_get_internal_bufsize");

var _fluid_synth_program_reset = Module["_fluid_synth_program_reset"] = createExportWrapper("fluid_synth_program_reset");

var _fluid_synth_nwrite_float = Module["_fluid_synth_nwrite_float"] = createExportWrapper("fluid_synth_nwrite_float");

var _fluid_synth_process = Module["_fluid_synth_process"] = createExportWrapper("fluid_synth_process");

var _fluid_synth_write_float = Module["_fluid_synth_write_float"] = createExportWrapper("fluid_synth_write_float");

var _fluid_synth_write_s16 = Module["_fluid_synth_write_s16"] = createExportWrapper("fluid_synth_write_s16");

var _fluid_synth_alloc_voice = Module["_fluid_synth_alloc_voice"] = createExportWrapper("fluid_synth_alloc_voice");

var _fluid_voice_get_id = Module["_fluid_voice_get_id"] = createExportWrapper("fluid_voice_get_id");

var _fluid_voice_get_key = Module["_fluid_voice_get_key"] = createExportWrapper("fluid_voice_get_key");

var _fluid_synth_sfload = Module["_fluid_synth_sfload"] = createExportWrapper("fluid_synth_sfload");

var _fluid_synth_sfunload = Module["_fluid_synth_sfunload"] = createExportWrapper("fluid_synth_sfunload");

var _fluid_synth_sfreload = Module["_fluid_synth_sfreload"] = createExportWrapper("fluid_synth_sfreload");

var _fluid_synth_add_sfont = Module["_fluid_synth_add_sfont"] = createExportWrapper("fluid_synth_add_sfont");

var _fluid_synth_remove_sfont = Module["_fluid_synth_remove_sfont"] = createExportWrapper("fluid_synth_remove_sfont");

var _fluid_synth_sfcount = Module["_fluid_synth_sfcount"] = createExportWrapper("fluid_synth_sfcount");

var _fluid_synth_get_sfont = Module["_fluid_synth_get_sfont"] = createExportWrapper("fluid_synth_get_sfont");

var _fluid_synth_get_sfont_by_id = Module["_fluid_synth_get_sfont_by_id"] = createExportWrapper("fluid_synth_get_sfont_by_id");

var _fluid_synth_get_sfont_by_name = Module["_fluid_synth_get_sfont_by_name"] = createExportWrapper("fluid_synth_get_sfont_by_name");

var _fluid_synth_get_channel_preset = Module["_fluid_synth_get_channel_preset"] = createExportWrapper("fluid_synth_get_channel_preset");

var _fluid_synth_get_voicelist = Module["_fluid_synth_get_voicelist"] = createExportWrapper("fluid_synth_get_voicelist");

var _fluid_synth_set_reverb_on = Module["_fluid_synth_set_reverb_on"] = createExportWrapper("fluid_synth_set_reverb_on");

var _fluid_synth_set_reverb = Module["_fluid_synth_set_reverb"] = createExportWrapper("fluid_synth_set_reverb");

var _fluid_synth_set_reverb_roomsize = Module["_fluid_synth_set_reverb_roomsize"] = createExportWrapper("fluid_synth_set_reverb_roomsize");

var _fluid_synth_set_reverb_damp = Module["_fluid_synth_set_reverb_damp"] = createExportWrapper("fluid_synth_set_reverb_damp");

var _fluid_synth_set_reverb_width = Module["_fluid_synth_set_reverb_width"] = createExportWrapper("fluid_synth_set_reverb_width");

var _fluid_synth_set_reverb_level = Module["_fluid_synth_set_reverb_level"] = createExportWrapper("fluid_synth_set_reverb_level");

var _fluid_synth_set_reverb_group_roomsize = Module["_fluid_synth_set_reverb_group_roomsize"] = createExportWrapper("fluid_synth_set_reverb_group_roomsize");

var _fluid_synth_set_reverb_group_damp = Module["_fluid_synth_set_reverb_group_damp"] = createExportWrapper("fluid_synth_set_reverb_group_damp");

var _fluid_synth_set_reverb_group_width = Module["_fluid_synth_set_reverb_group_width"] = createExportWrapper("fluid_synth_set_reverb_group_width");

var _fluid_synth_set_reverb_group_level = Module["_fluid_synth_set_reverb_group_level"] = createExportWrapper("fluid_synth_set_reverb_group_level");

var _fluid_synth_get_reverb_roomsize = Module["_fluid_synth_get_reverb_roomsize"] = createExportWrapper("fluid_synth_get_reverb_roomsize");

var _fluid_synth_get_reverb_damp = Module["_fluid_synth_get_reverb_damp"] = createExportWrapper("fluid_synth_get_reverb_damp");

var _fluid_synth_get_reverb_level = Module["_fluid_synth_get_reverb_level"] = createExportWrapper("fluid_synth_get_reverb_level");

var _fluid_synth_get_reverb_width = Module["_fluid_synth_get_reverb_width"] = createExportWrapper("fluid_synth_get_reverb_width");

var _fluid_synth_get_reverb_group_roomsize = Module["_fluid_synth_get_reverb_group_roomsize"] = createExportWrapper("fluid_synth_get_reverb_group_roomsize");

var _fluid_synth_get_reverb_group_damp = Module["_fluid_synth_get_reverb_group_damp"] = createExportWrapper("fluid_synth_get_reverb_group_damp");

var _fluid_synth_get_reverb_group_width = Module["_fluid_synth_get_reverb_group_width"] = createExportWrapper("fluid_synth_get_reverb_group_width");

var _fluid_synth_get_reverb_group_level = Module["_fluid_synth_get_reverb_group_level"] = createExportWrapper("fluid_synth_get_reverb_group_level");

var _fluid_synth_set_chorus_on = Module["_fluid_synth_set_chorus_on"] = createExportWrapper("fluid_synth_set_chorus_on");

var _fluid_synth_set_chorus = Module["_fluid_synth_set_chorus"] = createExportWrapper("fluid_synth_set_chorus");

var _fluid_synth_set_chorus_nr = Module["_fluid_synth_set_chorus_nr"] = createExportWrapper("fluid_synth_set_chorus_nr");

var _fluid_synth_set_chorus_level = Module["_fluid_synth_set_chorus_level"] = createExportWrapper("fluid_synth_set_chorus_level");

var _fluid_synth_set_chorus_speed = Module["_fluid_synth_set_chorus_speed"] = createExportWrapper("fluid_synth_set_chorus_speed");

var _fluid_synth_set_chorus_depth = Module["_fluid_synth_set_chorus_depth"] = createExportWrapper("fluid_synth_set_chorus_depth");

var _fluid_synth_set_chorus_type = Module["_fluid_synth_set_chorus_type"] = createExportWrapper("fluid_synth_set_chorus_type");

var _fluid_synth_set_chorus_group_nr = Module["_fluid_synth_set_chorus_group_nr"] = createExportWrapper("fluid_synth_set_chorus_group_nr");

var _fluid_synth_set_chorus_group_level = Module["_fluid_synth_set_chorus_group_level"] = createExportWrapper("fluid_synth_set_chorus_group_level");

var _fluid_synth_set_chorus_group_speed = Module["_fluid_synth_set_chorus_group_speed"] = createExportWrapper("fluid_synth_set_chorus_group_speed");

var _fluid_synth_set_chorus_group_depth = Module["_fluid_synth_set_chorus_group_depth"] = createExportWrapper("fluid_synth_set_chorus_group_depth");

var _fluid_synth_set_chorus_group_type = Module["_fluid_synth_set_chorus_group_type"] = createExportWrapper("fluid_synth_set_chorus_group_type");

var _fluid_synth_get_chorus_nr = Module["_fluid_synth_get_chorus_nr"] = createExportWrapper("fluid_synth_get_chorus_nr");

var _fluid_synth_get_chorus_level = Module["_fluid_synth_get_chorus_level"] = createExportWrapper("fluid_synth_get_chorus_level");

var _fluid_synth_get_chorus_speed = Module["_fluid_synth_get_chorus_speed"] = createExportWrapper("fluid_synth_get_chorus_speed");

var _fluid_synth_get_chorus_depth = Module["_fluid_synth_get_chorus_depth"] = createExportWrapper("fluid_synth_get_chorus_depth");

var _fluid_synth_get_chorus_type = Module["_fluid_synth_get_chorus_type"] = createExportWrapper("fluid_synth_get_chorus_type");

var _fluid_synth_get_chorus_group_nr = Module["_fluid_synth_get_chorus_group_nr"] = createExportWrapper("fluid_synth_get_chorus_group_nr");

var _fluid_synth_get_chorus_group_level = Module["_fluid_synth_get_chorus_group_level"] = createExportWrapper("fluid_synth_get_chorus_group_level");

var _fluid_synth_get_chorus_group_speed = Module["_fluid_synth_get_chorus_group_speed"] = createExportWrapper("fluid_synth_get_chorus_group_speed");

var _fluid_synth_get_chorus_group_depth = Module["_fluid_synth_get_chorus_group_depth"] = createExportWrapper("fluid_synth_get_chorus_group_depth");

var _fluid_synth_get_chorus_group_type = Module["_fluid_synth_get_chorus_group_type"] = createExportWrapper("fluid_synth_get_chorus_group_type");

var _fluid_voice_is_sostenuto = Module["_fluid_voice_is_sostenuto"] = createExportWrapper("fluid_voice_is_sostenuto");

var _fluid_synth_set_interp_method = Module["_fluid_synth_set_interp_method"] = createExportWrapper("fluid_synth_set_interp_method");

var _fluid_synth_count_midi_channels = Module["_fluid_synth_count_midi_channels"] = createExportWrapper("fluid_synth_count_midi_channels");

var _fluid_synth_count_audio_channels = Module["_fluid_synth_count_audio_channels"] = createExportWrapper("fluid_synth_count_audio_channels");

var _fluid_synth_count_audio_groups = Module["_fluid_synth_count_audio_groups"] = createExportWrapper("fluid_synth_count_audio_groups");

var _fluid_synth_count_effects_channels = Module["_fluid_synth_count_effects_channels"] = createExportWrapper("fluid_synth_count_effects_channels");

var _fluid_synth_count_effects_groups = Module["_fluid_synth_count_effects_groups"] = createExportWrapper("fluid_synth_count_effects_groups");

var _fluid_synth_get_cpu_load = Module["_fluid_synth_get_cpu_load"] = createExportWrapper("fluid_synth_get_cpu_load");

var _fluid_synth_activate_key_tuning = Module["_fluid_synth_activate_key_tuning"] = createExportWrapper("fluid_synth_activate_key_tuning");

var _fluid_synth_deactivate_tuning = Module["_fluid_synth_deactivate_tuning"] = createExportWrapper("fluid_synth_deactivate_tuning");

var _fluid_synth_tuning_iteration_start = Module["_fluid_synth_tuning_iteration_start"] = createExportWrapper("fluid_synth_tuning_iteration_start");

var _fluid_synth_tuning_iteration_next = Module["_fluid_synth_tuning_iteration_next"] = createExportWrapper("fluid_synth_tuning_iteration_next");

var _fluid_synth_get_settings = Module["_fluid_synth_get_settings"] = createExportWrapper("fluid_synth_get_settings");

var _fluid_synth_set_gen = Module["_fluid_synth_set_gen"] = createExportWrapper("fluid_synth_set_gen");

var _fluid_synth_get_gen = Module["_fluid_synth_get_gen"] = createExportWrapper("fluid_synth_get_gen");

var _fluid_synth_handle_midi_event = Module["_fluid_synth_handle_midi_event"] = createExportWrapper("fluid_synth_handle_midi_event");

var _fluid_synth_start = Module["_fluid_synth_start"] = createExportWrapper("fluid_synth_start");

var _fluid_synth_stop = Module["_fluid_synth_stop"] = createExportWrapper("fluid_synth_stop");

var _fluid_voice_is_on = Module["_fluid_voice_is_on"] = createExportWrapper("fluid_voice_is_on");

var _fluid_synth_set_bank_offset = Module["_fluid_synth_set_bank_offset"] = createExportWrapper("fluid_synth_set_bank_offset");

var _fluid_synth_get_bank_offset = Module["_fluid_synth_get_bank_offset"] = createExportWrapper("fluid_synth_get_bank_offset");

var _fluid_synth_set_channel_type = Module["_fluid_synth_set_channel_type"] = createExportWrapper("fluid_synth_set_channel_type");

var _fluid_synth_get_ladspa_fx = Module["_fluid_synth_get_ladspa_fx"] = createExportWrapper("fluid_synth_get_ladspa_fx");

var _fluid_synth_set_custom_filter = Module["_fluid_synth_set_custom_filter"] = createExportWrapper("fluid_synth_set_custom_filter");

var _fluid_synth_set_legato_mode = Module["_fluid_synth_set_legato_mode"] = createExportWrapper("fluid_synth_set_legato_mode");

var _fluid_synth_get_legato_mode = Module["_fluid_synth_get_legato_mode"] = createExportWrapper("fluid_synth_get_legato_mode");

var _fluid_synth_set_portamento_mode = Module["_fluid_synth_set_portamento_mode"] = createExportWrapper("fluid_synth_set_portamento_mode");

var _fluid_synth_get_portamento_mode = Module["_fluid_synth_get_portamento_mode"] = createExportWrapper("fluid_synth_get_portamento_mode");

var _fluid_synth_set_breath_mode = Module["_fluid_synth_set_breath_mode"] = createExportWrapper("fluid_synth_set_breath_mode");

var _fluid_synth_get_breath_mode = Module["_fluid_synth_get_breath_mode"] = createExportWrapper("fluid_synth_get_breath_mode");

var _fluid_synth_reset_basic_channel = Module["_fluid_synth_reset_basic_channel"] = createExportWrapper("fluid_synth_reset_basic_channel");

var _fluid_synth_get_basic_channel = Module["_fluid_synth_get_basic_channel"] = createExportWrapper("fluid_synth_get_basic_channel");

var _fluid_voice_is_sustained = Module["_fluid_voice_is_sustained"] = createExportWrapper("fluid_voice_is_sustained");

var _fluid_voice_update_param = Module["_fluid_voice_update_param"] = createExportWrapper("fluid_voice_update_param");

var _fluid_voice_gen_get = Module["_fluid_voice_gen_get"] = createExportWrapper("fluid_voice_gen_get");

var _fluid_voice_add_mod = Module["_fluid_voice_add_mod"] = createExportWrapper("fluid_voice_add_mod");

var _fluid_voice_get_velocity = Module["_fluid_voice_get_velocity"] = createExportWrapper("fluid_voice_get_velocity");

var _fluid_is_midifile = Module["_fluid_is_midifile"] = createExportWrapper("fluid_is_midifile");

var _new_fluid_midi_event = Module["_new_fluid_midi_event"] = createExportWrapper("new_fluid_midi_event");

var _delete_fluid_midi_event = Module["_delete_fluid_midi_event"] = createExportWrapper("delete_fluid_midi_event");

var _fluid_midi_event_set_type = Module["_fluid_midi_event_set_type"] = createExportWrapper("fluid_midi_event_set_type");

var _fluid_midi_event_set_channel = Module["_fluid_midi_event_set_channel"] = createExportWrapper("fluid_midi_event_set_channel");

var _fluid_midi_event_set_key = Module["_fluid_midi_event_set_key"] = createExportWrapper("fluid_midi_event_set_key");

var _fluid_midi_event_set_velocity = Module["_fluid_midi_event_set_velocity"] = createExportWrapper("fluid_midi_event_set_velocity");

var _fluid_midi_event_set_control = Module["_fluid_midi_event_set_control"] = createExportWrapper("fluid_midi_event_set_control");

var _fluid_midi_event_set_value = Module["_fluid_midi_event_set_value"] = createExportWrapper("fluid_midi_event_set_value");

var _fluid_midi_event_set_program = Module["_fluid_midi_event_set_program"] = createExportWrapper("fluid_midi_event_set_program");

var _fluid_midi_event_set_pitch = Module["_fluid_midi_event_set_pitch"] = createExportWrapper("fluid_midi_event_set_pitch");

var _fluid_midi_event_set_sysex = Module["_fluid_midi_event_set_sysex"] = createExportWrapper("fluid_midi_event_set_sysex");

var _fluid_midi_event_set_text = Module["_fluid_midi_event_set_text"] = createExportWrapper("fluid_midi_event_set_text");

var _fluid_midi_event_get_text = Module["_fluid_midi_event_get_text"] = createExportWrapper("fluid_midi_event_get_text");

var _fluid_midi_event_set_lyrics = Module["_fluid_midi_event_set_lyrics"] = createExportWrapper("fluid_midi_event_set_lyrics");

var _fluid_midi_event_get_lyrics = Module["_fluid_midi_event_get_lyrics"] = createExportWrapper("fluid_midi_event_get_lyrics");

var _new_fluid_player = Module["_new_fluid_player"] = createExportWrapper("new_fluid_player");

var _fluid_player_set_playback_callback = Module["_fluid_player_set_playback_callback"] = createExportWrapper("fluid_player_set_playback_callback");

var _fluid_player_set_tick_callback = Module["_fluid_player_set_tick_callback"] = createExportWrapper("fluid_player_set_tick_callback");

var _delete_fluid_player = Module["_delete_fluid_player"] = createExportWrapper("delete_fluid_player");

var _fluid_player_get_status = Module["_fluid_player_get_status"] = createExportWrapper("fluid_player_get_status");

var _fluid_player_stop = Module["_fluid_player_stop"] = createExportWrapper("fluid_player_stop");

var _fluid_player_get_current_tick = Module["_fluid_player_get_current_tick"] = createExportWrapper("fluid_player_get_current_tick");

var _fluid_player_seek = Module["_fluid_player_seek"] = createExportWrapper("fluid_player_seek");

var _fluid_player_add = Module["_fluid_player_add"] = createExportWrapper("fluid_player_add");

var _fluid_player_add_mem = Module["_fluid_player_add_mem"] = createExportWrapper("fluid_player_add_mem");

var _fluid_player_play = Module["_fluid_player_play"] = createExportWrapper("fluid_player_play");

var _fluid_player_get_total_ticks = Module["_fluid_player_get_total_ticks"] = createExportWrapper("fluid_player_get_total_ticks");

var _fluid_player_set_loop = Module["_fluid_player_set_loop"] = createExportWrapper("fluid_player_set_loop");

var _fluid_player_set_tempo = Module["_fluid_player_set_tempo"] = createExportWrapper("fluid_player_set_tempo");

var _fluid_player_set_midi_tempo = Module["_fluid_player_set_midi_tempo"] = createExportWrapper("fluid_player_set_midi_tempo");

var _fluid_player_set_bpm = Module["_fluid_player_set_bpm"] = createExportWrapper("fluid_player_set_bpm");

var _fluid_player_join = Module["_fluid_player_join"] = createExportWrapper("fluid_player_join");

var _fluid_player_get_bpm = Module["_fluid_player_get_bpm"] = createExportWrapper("fluid_player_get_bpm");

var _fluid_player_get_midi_tempo = Module["_fluid_player_get_midi_tempo"] = createExportWrapper("fluid_player_get_midi_tempo");

var _new_fluid_midi_router = Module["_new_fluid_midi_router"] = createExportWrapper("new_fluid_midi_router");

var _new_fluid_midi_router_rule = Module["_new_fluid_midi_router_rule"] = createExportWrapper("new_fluid_midi_router_rule");

var _delete_fluid_midi_router = Module["_delete_fluid_midi_router"] = createExportWrapper("delete_fluid_midi_router");

var _fluid_midi_router_set_default_rules = Module["_fluid_midi_router_set_default_rules"] = createExportWrapper("fluid_midi_router_set_default_rules");

var _delete_fluid_midi_router_rule = Module["_delete_fluid_midi_router_rule"] = createExportWrapper("delete_fluid_midi_router_rule");

var _fluid_midi_router_clear_rules = Module["_fluid_midi_router_clear_rules"] = createExportWrapper("fluid_midi_router_clear_rules");

var _fluid_midi_router_add_rule = Module["_fluid_midi_router_add_rule"] = createExportWrapper("fluid_midi_router_add_rule");

var _fluid_midi_router_rule_set_chan = Module["_fluid_midi_router_rule_set_chan"] = createExportWrapper("fluid_midi_router_rule_set_chan");

var _fluid_midi_router_rule_set_param1 = Module["_fluid_midi_router_rule_set_param1"] = createExportWrapper("fluid_midi_router_rule_set_param1");

var _fluid_midi_router_rule_set_param2 = Module["_fluid_midi_router_rule_set_param2"] = createExportWrapper("fluid_midi_router_rule_set_param2");

var _fluid_midi_router_handle_midi_event = Module["_fluid_midi_router_handle_midi_event"] = createExportWrapper("fluid_midi_router_handle_midi_event");

var _fluid_midi_dump_prerouter = Module["_fluid_midi_dump_prerouter"] = createExportWrapper("fluid_midi_dump_prerouter");

var _fluid_midi_dump_postrouter = Module["_fluid_midi_dump_postrouter"] = createExportWrapper("fluid_midi_dump_postrouter");

var _fluid_sequencer_unregister_client = Module["_fluid_sequencer_unregister_client"] = createExportWrapper("fluid_sequencer_unregister_client");

var _fluid_sequencer_register_fluidsynth = Module["_fluid_sequencer_register_fluidsynth"] = createExportWrapper("fluid_sequencer_register_fluidsynth");

var _fluid_sequencer_get_use_system_timer = Module["_fluid_sequencer_get_use_system_timer"] = createExportWrapper("fluid_sequencer_get_use_system_timer");

var _fluid_sequencer_register_client = Module["_fluid_sequencer_register_client"] = createExportWrapper("fluid_sequencer_register_client");

var _fluid_sequencer_process = Module["_fluid_sequencer_process"] = createExportWrapper("fluid_sequencer_process");

var _fluid_sequencer_send_at = Module["_fluid_sequencer_send_at"] = createExportWrapper("fluid_sequencer_send_at");

var _fluid_sequencer_set_time_scale = Module["_fluid_sequencer_set_time_scale"] = createExportWrapper("fluid_sequencer_set_time_scale");

var _fluid_sequencer_add_midi_event_to_buffer = Module["_fluid_sequencer_add_midi_event_to_buffer"] = createExportWrapper("fluid_sequencer_add_midi_event_to_buffer");

var _fluid_sequencer_count_clients = Module["_fluid_sequencer_count_clients"] = createExportWrapper("fluid_sequencer_count_clients");

var _fluid_sequencer_get_client_id = Module["_fluid_sequencer_get_client_id"] = createExportWrapper("fluid_sequencer_get_client_id");

var _fluid_sequencer_get_client_name = Module["_fluid_sequencer_get_client_name"] = createExportWrapper("fluid_sequencer_get_client_name");

var _new_fluid_sequencer = Module["_new_fluid_sequencer"] = createExportWrapper("new_fluid_sequencer");

var _new_fluid_sequencer2 = Module["_new_fluid_sequencer2"] = createExportWrapper("new_fluid_sequencer2");

var _delete_fluid_sequencer = Module["_delete_fluid_sequencer"] = createExportWrapper("delete_fluid_sequencer");

var _fluid_sequencer_get_tick = Module["_fluid_sequencer_get_tick"] = createExportWrapper("fluid_sequencer_get_tick");

var _fluid_sequencer_client_is_dest = Module["_fluid_sequencer_client_is_dest"] = createExportWrapper("fluid_sequencer_client_is_dest");

var _fluid_sequencer_send_now = Module["_fluid_sequencer_send_now"] = createExportWrapper("fluid_sequencer_send_now");

var _fluid_sequencer_remove_events = Module["_fluid_sequencer_remove_events"] = createExportWrapper("fluid_sequencer_remove_events");

var _fluid_sequencer_get_time_scale = Module["_fluid_sequencer_get_time_scale"] = createExportWrapper("fluid_sequencer_get_time_scale");

var _new_fluid_audio_driver = Module["_new_fluid_audio_driver"] = createExportWrapper("new_fluid_audio_driver");

var _new_fluid_audio_driver2 = Module["_new_fluid_audio_driver2"] = createExportWrapper("new_fluid_audio_driver2");

var _delete_fluid_audio_driver = Module["_delete_fluid_audio_driver"] = createExportWrapper("delete_fluid_audio_driver");

var _fluid_audio_driver_register = Module["_fluid_audio_driver_register"] = createExportWrapper("fluid_audio_driver_register");

var _new_fluid_midi_driver = Module["_new_fluid_midi_driver"] = createExportWrapper("new_fluid_midi_driver");

var _delete_fluid_midi_driver = Module["_delete_fluid_midi_driver"] = createExportWrapper("delete_fluid_midi_driver");

var _fluid_file_set_encoding_quality = Module["_fluid_file_set_encoding_quality"] = createExportWrapper("fluid_file_set_encoding_quality");

var ___errno_location = Module["___errno_location"] = createExportWrapper("__errno_location");

var _fluid_ladspa_is_active = Module["_fluid_ladspa_is_active"] = createExportWrapper("fluid_ladspa_is_active");

var _fluid_ladspa_activate = Module["_fluid_ladspa_activate"] = createExportWrapper("fluid_ladspa_activate");

var _fluid_ladspa_deactivate = Module["_fluid_ladspa_deactivate"] = createExportWrapper("fluid_ladspa_deactivate");

var _fluid_ladspa_reset = Module["_fluid_ladspa_reset"] = createExportWrapper("fluid_ladspa_reset");

var _fluid_ladspa_check = Module["_fluid_ladspa_check"] = createExportWrapper("fluid_ladspa_check");

var _fluid_ladspa_host_port_exists = Module["_fluid_ladspa_host_port_exists"] = createExportWrapper("fluid_ladspa_host_port_exists");

var _fluid_ladspa_add_buffer = Module["_fluid_ladspa_add_buffer"] = createExportWrapper("fluid_ladspa_add_buffer");

var _fluid_ladspa_buffer_exists = Module["_fluid_ladspa_buffer_exists"] = createExportWrapper("fluid_ladspa_buffer_exists");

var _fluid_ladspa_add_effect = Module["_fluid_ladspa_add_effect"] = createExportWrapper("fluid_ladspa_add_effect");

var _fluid_ladspa_effect_can_mix = Module["_fluid_ladspa_effect_can_mix"] = createExportWrapper("fluid_ladspa_effect_can_mix");

var _fluid_ladspa_effect_set_mix = Module["_fluid_ladspa_effect_set_mix"] = createExportWrapper("fluid_ladspa_effect_set_mix");

var _fluid_ladspa_effect_port_exists = Module["_fluid_ladspa_effect_port_exists"] = createExportWrapper("fluid_ladspa_effect_port_exists");

var _fluid_ladspa_effect_set_control = Module["_fluid_ladspa_effect_set_control"] = createExportWrapper("fluid_ladspa_effect_set_control");

var _fluid_ladspa_effect_link = Module["_fluid_ladspa_effect_link"] = createExportWrapper("fluid_ladspa_effect_link");

var ___stdio_exit = Module["___stdio_exit"] = createExportWrapper("__stdio_exit");

var _sbrk = Module["_sbrk"] = createExportWrapper("sbrk");

var _emscripten_get_sbrk_ptr = Module["_emscripten_get_sbrk_ptr"] = createExportWrapper("emscripten_get_sbrk_ptr");

var _emscripten_stack_init = Module["_emscripten_stack_init"] = function() {
 return (_emscripten_stack_init = Module["_emscripten_stack_init"] = Module["asm"]["emscripten_stack_init"]).apply(null, arguments);
};

var _emscripten_stack_get_free = Module["_emscripten_stack_get_free"] = function() {
 return (_emscripten_stack_get_free = Module["_emscripten_stack_get_free"] = Module["asm"]["emscripten_stack_get_free"]).apply(null, arguments);
};

var _emscripten_stack_get_base = Module["_emscripten_stack_get_base"] = function() {
 return (_emscripten_stack_get_base = Module["_emscripten_stack_get_base"] = Module["asm"]["emscripten_stack_get_base"]).apply(null, arguments);
};

var _emscripten_stack_get_end = Module["_emscripten_stack_get_end"] = function() {
 return (_emscripten_stack_get_end = Module["_emscripten_stack_get_end"] = Module["asm"]["emscripten_stack_get_end"]).apply(null, arguments);
};

var stackSave = Module["stackSave"] = createExportWrapper("stackSave");

var stackRestore = Module["stackRestore"] = createExportWrapper("stackRestore");

var stackAlloc = Module["stackAlloc"] = createExportWrapper("stackAlloc");

var ___cxa_is_pointer_type = Module["___cxa_is_pointer_type"] = createExportWrapper("__cxa_is_pointer_type");

var dynCall_ji = Module["dynCall_ji"] = createExportWrapper("dynCall_ji");

var dynCall_iiji = Module["dynCall_iiji"] = createExportWrapper("dynCall_iiji");

var dynCall_jiji = Module["dynCall_jiji"] = createExportWrapper("dynCall_jiji");

Module["ccall"] = ccall;

Module["cwrap"] = cwrap;

unexportedRuntimeFunction("setValue", false);

unexportedRuntimeFunction("getValue", false);

unexportedRuntimeFunction("allocate", false);

Module["UTF8ArrayToString"] = UTF8ArrayToString;

Module["UTF8ToString"] = UTF8ToString;

Module["stringToUTF8Array"] = stringToUTF8Array;

Module["stringToUTF8"] = stringToUTF8;

Module["lengthBytesUTF8"] = lengthBytesUTF8;

unexportedRuntimeFunction("addOnPreRun", false);

unexportedRuntimeFunction("addOnInit", false);

unexportedRuntimeFunction("addOnPreMain", false);

unexportedRuntimeFunction("addOnExit", false);

unexportedRuntimeFunction("addOnPostRun", false);

unexportedRuntimeFunction("addRunDependency", true);

unexportedRuntimeFunction("removeRunDependency", true);

unexportedRuntimeFunction("FS_createFolder", false);

unexportedRuntimeFunction("FS_createPath", true);

unexportedRuntimeFunction("FS_createDataFile", true);

unexportedRuntimeFunction("FS_createPreloadedFile", true);

unexportedRuntimeFunction("FS_createLazyFile", true);

unexportedRuntimeFunction("FS_createLink", false);

unexportedRuntimeFunction("FS_createDevice", true);

unexportedRuntimeFunction("FS_unlink", true);

unexportedRuntimeFunction("getLEB", false);

unexportedRuntimeFunction("getFunctionTables", false);

unexportedRuntimeFunction("alignFunctionTables", false);

unexportedRuntimeFunction("registerFunctions", false);

Module["addFunction"] = addFunction;

Module["removeFunction"] = removeFunction;

unexportedRuntimeFunction("prettyPrint", false);

unexportedRuntimeFunction("getCompilerSetting", false);

unexportedRuntimeFunction("print", false);

unexportedRuntimeFunction("printErr", false);

unexportedRuntimeFunction("getTempRet0", false);

unexportedRuntimeFunction("setTempRet0", false);

unexportedRuntimeFunction("callMain", false);

unexportedRuntimeFunction("abort", false);

unexportedRuntimeFunction("keepRuntimeAlive", false);

unexportedRuntimeFunction("wasmMemory", false);

unexportedRuntimeFunction("warnOnce", false);

unexportedRuntimeFunction("stackSave", false);

unexportedRuntimeFunction("stackRestore", false);

unexportedRuntimeFunction("stackAlloc", false);

unexportedRuntimeFunction("AsciiToString", false);

unexportedRuntimeFunction("stringToAscii", false);

unexportedRuntimeFunction("UTF16ToString", false);

unexportedRuntimeFunction("stringToUTF16", false);

unexportedRuntimeFunction("lengthBytesUTF16", false);

unexportedRuntimeFunction("UTF32ToString", false);

unexportedRuntimeFunction("stringToUTF32", false);

unexportedRuntimeFunction("lengthBytesUTF32", false);

unexportedRuntimeFunction("allocateUTF8", false);

unexportedRuntimeFunction("allocateUTF8OnStack", false);

unexportedRuntimeFunction("ExitStatus", false);

unexportedRuntimeFunction("intArrayFromString", false);

unexportedRuntimeFunction("intArrayToString", false);

unexportedRuntimeFunction("writeStringToMemory", false);

unexportedRuntimeFunction("writeArrayToMemory", false);

unexportedRuntimeFunction("writeAsciiToMemory", false);

Module["writeStackCookie"] = writeStackCookie;

Module["checkStackCookie"] = checkStackCookie;

unexportedRuntimeFunction("ptrToString", false);

unexportedRuntimeFunction("zeroMemory", false);

unexportedRuntimeFunction("stringToNewUTF8", false);

unexportedRuntimeFunction("emscripten_realloc_buffer", false);

unexportedRuntimeFunction("ENV", false);

unexportedRuntimeFunction("ERRNO_CODES", false);

unexportedRuntimeFunction("ERRNO_MESSAGES", false);

unexportedRuntimeFunction("setErrNo", false);

unexportedRuntimeFunction("inetPton4", false);

unexportedRuntimeFunction("inetNtop4", false);

unexportedRuntimeFunction("inetPton6", false);

unexportedRuntimeFunction("inetNtop6", false);

unexportedRuntimeFunction("readSockaddr", false);

unexportedRuntimeFunction("writeSockaddr", false);

unexportedRuntimeFunction("DNS", false);

unexportedRuntimeFunction("getHostByName", false);

unexportedRuntimeFunction("Protocols", false);

unexportedRuntimeFunction("Sockets", false);

unexportedRuntimeFunction("getRandomDevice", false);

unexportedRuntimeFunction("traverseStack", false);

unexportedRuntimeFunction("UNWIND_CACHE", false);

unexportedRuntimeFunction("convertPCtoSourceLocation", false);

unexportedRuntimeFunction("readAsmConstArgsArray", false);

unexportedRuntimeFunction("readAsmConstArgs", false);

unexportedRuntimeFunction("mainThreadEM_ASM", false);

unexportedRuntimeFunction("jstoi_q", false);

unexportedRuntimeFunction("jstoi_s", false);

unexportedRuntimeFunction("getExecutableName", false);

unexportedRuntimeFunction("listenOnce", false);

unexportedRuntimeFunction("autoResumeAudioContext", false);

unexportedRuntimeFunction("dynCallLegacy", false);

unexportedRuntimeFunction("getDynCaller", false);

unexportedRuntimeFunction("dynCall", false);

unexportedRuntimeFunction("setWasmTableEntry", false);

unexportedRuntimeFunction("getWasmTableEntry", false);

unexportedRuntimeFunction("handleException", false);

unexportedRuntimeFunction("runtimeKeepalivePush", false);

unexportedRuntimeFunction("runtimeKeepalivePop", false);

unexportedRuntimeFunction("callUserCallback", false);

unexportedRuntimeFunction("maybeExit", false);

unexportedRuntimeFunction("safeSetTimeout", false);

unexportedRuntimeFunction("asmjsMangle", false);

unexportedRuntimeFunction("asyncLoad", false);

unexportedRuntimeFunction("alignMemory", false);

unexportedRuntimeFunction("mmapAlloc", false);

unexportedRuntimeFunction("reallyNegative", false);

unexportedRuntimeFunction("unSign", false);

unexportedRuntimeFunction("reSign", false);

unexportedRuntimeFunction("formatString", false);

unexportedRuntimeFunction("PATH", false);

unexportedRuntimeFunction("PATH_FS", false);

unexportedRuntimeFunction("SYSCALLS", false);

unexportedRuntimeFunction("getSocketFromFD", false);

unexportedRuntimeFunction("getSocketAddress", false);

unexportedRuntimeFunction("JSEvents", false);

unexportedRuntimeFunction("registerKeyEventCallback", false);

unexportedRuntimeFunction("specialHTMLTargets", false);

unexportedRuntimeFunction("maybeCStringToJsString", false);

unexportedRuntimeFunction("findEventTarget", false);

unexportedRuntimeFunction("findCanvasEventTarget", false);

unexportedRuntimeFunction("getBoundingClientRect", false);

unexportedRuntimeFunction("fillMouseEventData", false);

unexportedRuntimeFunction("registerMouseEventCallback", false);

unexportedRuntimeFunction("registerWheelEventCallback", false);

unexportedRuntimeFunction("registerUiEventCallback", false);

unexportedRuntimeFunction("registerFocusEventCallback", false);

unexportedRuntimeFunction("fillDeviceOrientationEventData", false);

unexportedRuntimeFunction("registerDeviceOrientationEventCallback", false);

unexportedRuntimeFunction("fillDeviceMotionEventData", false);

unexportedRuntimeFunction("registerDeviceMotionEventCallback", false);

unexportedRuntimeFunction("screenOrientation", false);

unexportedRuntimeFunction("fillOrientationChangeEventData", false);

unexportedRuntimeFunction("registerOrientationChangeEventCallback", false);

unexportedRuntimeFunction("fillFullscreenChangeEventData", false);

unexportedRuntimeFunction("registerFullscreenChangeEventCallback", false);

unexportedRuntimeFunction("registerRestoreOldStyle", false);

unexportedRuntimeFunction("hideEverythingExceptGivenElement", false);

unexportedRuntimeFunction("restoreHiddenElements", false);

unexportedRuntimeFunction("setLetterbox", false);

unexportedRuntimeFunction("currentFullscreenStrategy", false);

unexportedRuntimeFunction("restoreOldWindowedStyle", false);

unexportedRuntimeFunction("softFullscreenResizeWebGLRenderTarget", false);

unexportedRuntimeFunction("doRequestFullscreen", false);

unexportedRuntimeFunction("fillPointerlockChangeEventData", false);

unexportedRuntimeFunction("registerPointerlockChangeEventCallback", false);

unexportedRuntimeFunction("registerPointerlockErrorEventCallback", false);

unexportedRuntimeFunction("requestPointerLock", false);

unexportedRuntimeFunction("fillVisibilityChangeEventData", false);

unexportedRuntimeFunction("registerVisibilityChangeEventCallback", false);

unexportedRuntimeFunction("registerTouchEventCallback", false);

unexportedRuntimeFunction("fillGamepadEventData", false);

unexportedRuntimeFunction("registerGamepadEventCallback", false);

unexportedRuntimeFunction("registerBeforeUnloadEventCallback", false);

unexportedRuntimeFunction("fillBatteryEventData", false);

unexportedRuntimeFunction("battery", false);

unexportedRuntimeFunction("registerBatteryEventCallback", false);

unexportedRuntimeFunction("setCanvasElementSize", false);

unexportedRuntimeFunction("getCanvasElementSize", false);

unexportedRuntimeFunction("demangle", false);

unexportedRuntimeFunction("demangleAll", false);

unexportedRuntimeFunction("jsStackTrace", false);

unexportedRuntimeFunction("stackTrace", false);

unexportedRuntimeFunction("getEnvStrings", false);

unexportedRuntimeFunction("checkWasiClock", false);

unexportedRuntimeFunction("doReadv", false);

unexportedRuntimeFunction("doWritev", false);

unexportedRuntimeFunction("writeI53ToI64", false);

unexportedRuntimeFunction("writeI53ToI64Clamped", false);

unexportedRuntimeFunction("writeI53ToI64Signaling", false);

unexportedRuntimeFunction("writeI53ToU64Clamped", false);

unexportedRuntimeFunction("writeI53ToU64Signaling", false);

unexportedRuntimeFunction("readI53FromI64", false);

unexportedRuntimeFunction("readI53FromU64", false);

unexportedRuntimeFunction("convertI32PairToI53", false);

unexportedRuntimeFunction("convertU32PairToI53", false);

unexportedRuntimeFunction("dlopenMissingError", false);

unexportedRuntimeFunction("setImmediateWrapped", false);

unexportedRuntimeFunction("clearImmediateWrapped", false);

unexportedRuntimeFunction("polyfillSetImmediate", false);

unexportedRuntimeFunction("uncaughtExceptionCount", false);

unexportedRuntimeFunction("exceptionLast", false);

unexportedRuntimeFunction("exceptionCaught", false);

unexportedRuntimeFunction("ExceptionInfo", false);

unexportedRuntimeFunction("exception_addRef", false);

unexportedRuntimeFunction("exception_decRef", false);

unexportedRuntimeFunction("Browser", false);

unexportedRuntimeFunction("setMainLoop", false);

unexportedRuntimeFunction("wget", false);

Module["FS"] = FS;

Module["MEMFS"] = MEMFS;

unexportedRuntimeFunction("TTY", false);

unexportedRuntimeFunction("PIPEFS", false);

unexportedRuntimeFunction("SOCKFS", false);

unexportedRuntimeFunction("_setNetworkCallback", false);

unexportedRuntimeFunction("tempFixedLengthArray", false);

unexportedRuntimeFunction("miniTempWebGLFloatBuffers", false);

unexportedRuntimeFunction("heapObjectForWebGLType", false);

unexportedRuntimeFunction("heapAccessShiftForWebGLHeap", false);

unexportedRuntimeFunction("GL", false);

unexportedRuntimeFunction("emscriptenWebGLGet", false);

unexportedRuntimeFunction("computeUnpackAlignedImageSize", false);

unexportedRuntimeFunction("emscriptenWebGLGetTexPixelData", false);

unexportedRuntimeFunction("emscriptenWebGLGetUniform", false);

unexportedRuntimeFunction("webglGetUniformLocation", false);

unexportedRuntimeFunction("webglPrepareUniformLocationsBeforeFirstUse", false);

unexportedRuntimeFunction("webglGetLeftBracePos", false);

unexportedRuntimeFunction("emscriptenWebGLGetVertexAttrib", false);

unexportedRuntimeFunction("writeGLArray", false);

unexportedRuntimeFunction("AL", false);

unexportedRuntimeFunction("SDL_unicode", false);

unexportedRuntimeFunction("SDL_ttfContext", false);

unexportedRuntimeFunction("SDL_audio", false);

unexportedRuntimeFunction("SDL", false);

unexportedRuntimeFunction("SDL_gfx", false);

unexportedRuntimeFunction("GLUT", false);

unexportedRuntimeFunction("EGL", false);

unexportedRuntimeFunction("GLFW_Window", false);

unexportedRuntimeFunction("GLFW", false);

unexportedRuntimeFunction("GLEW", false);

unexportedRuntimeFunction("IDBStore", false);

unexportedRuntimeFunction("runAndAbortIfError", false);

unexportedRuntimeSymbol("ALLOC_NORMAL", false);

unexportedRuntimeSymbol("ALLOC_STACK", false);

var calledRun;

function ExitStatus(status) {
 this.name = "ExitStatus";
 this.message = "Program terminated with exit(" + status + ")";
 this.status = status;
}

var calledMain = false;

dependenciesFulfilled = function runCaller() {
 if (!calledRun) run();
 if (!calledRun) dependenciesFulfilled = runCaller;
};

function stackCheckInit() {
 _emscripten_stack_init();
 writeStackCookie();
}

function run(args) {
 args = args || arguments_;
 if (runDependencies > 0) {
  return;
 }
 stackCheckInit();
 preRun();
 if (runDependencies > 0) {
  return;
 }
 function doRun() {
  if (calledRun) return;
  calledRun = true;
  Module["calledRun"] = true;
  if (ABORT) return;
  initRuntime();
  readyPromiseResolve(Module);
  if (Module["onRuntimeInitialized"]) Module["onRuntimeInitialized"]();
  assert(!Module["_main"], 'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]');
  postRun();
 }
 if (Module["setStatus"]) {
  Module["setStatus"]("Running...");
  setTimeout(function() {
   setTimeout(function() {
    Module["setStatus"]("");
   }, 1);
   doRun();
  }, 1);
 } else {
  doRun();
 }
 checkStackCookie();
}

Module["run"] = run;

function checkUnflushedContent() {
 var oldOut = out;
 var oldErr = err;
 var has = false;
 out = err = (x => {
  has = true;
 });
 try {
  ___stdio_exit();
  [ "stdout", "stderr" ].forEach(function(name) {
   var info = FS.analyzePath("/dev/" + name);
   if (!info) return;
   var stream = info.object;
   var rdev = stream.rdev;
   var tty = TTY.ttys[rdev];
   if (tty && tty.output && tty.output.length) {
    has = true;
   }
  });
 } catch (e) {}
 out = oldOut;
 err = oldErr;
 if (has) {
  warnOnce("stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the FAQ), or make sure to emit a newline when you printf etc.");
 }
}

function exit(status, implicit) {
 EXITSTATUS = status;
 checkUnflushedContent();
 if (keepRuntimeAlive() && !implicit) {
  var msg = "program exited (with status: " + status + "), but EXIT_RUNTIME is not set, so halting execution but not exiting the runtime or preventing further async execution (build with EXIT_RUNTIME=1, if you want a true shutdown)";
  readyPromiseReject(msg);
  err(msg);
 }
 procExit(status);
}

function procExit(code) {
 EXITSTATUS = code;
 if (!keepRuntimeAlive()) {
  if (Module["onExit"]) Module["onExit"](code);
  ABORT = true;
 }
 quit_(code, new ExitStatus(code));
}

if (Module["preInit"]) {
 if (typeof Module["preInit"] == "function") Module["preInit"] = [ Module["preInit"] ];
 while (Module["preInit"].length > 0) {
  Module["preInit"].pop()();
 }
}

run();


  return FluidsynthModule.ready
}
);
})();
export default FluidsynthModule;