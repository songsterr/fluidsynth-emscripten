#include "test.h"
#include "fluidsynth.h"
#include "fluidsynth_priv.h"
#include "fluid_synth.h"
#include "fluid_midi.h"

#include <math.h>

/* Three tracks over the Songsterr channel diet: melodic channels 0-2, drums on 9. */
static const unsigned char midi[] =
{
    'M', 'T', 'h', 'd', 0, 0, 0, 6, 0, 1, 0, 3, 0, 96,
    'M', 'T', 'r', 'k', 0, 0, 0, 16,
    0, 0xb0, 7, 100,           /* CC7 100 on channel 0 */
    0, 0x90, 60, 100,          /* note on channel 0 */
    96, 0x80, 60, 0,           /* note off */
    0, 0xff, 0x2f, 0,
    'M', 'T', 'r', 'k', 0, 0, 0, 16,
    0, 0xb9, 7, 100,           /* CC7 100 on the shared drum channel 9 */
    0, 0x99, 36, 100,          /* drum hit */
    96, 0x89, 36, 0,
    0, 0xff, 0x2f, 0,
    'M', 'T', 'r', 'k', 0, 0, 0, 16,
    0, 0xb2, 7, 50,            /* CC7 50 on channel 2 */
    0, 0x92, 62, 100,          /* note on channel 2 */
    96, 0x82, 62, 0,
    0, 0xff, 0x2f, 0
};

#define NTRACKS 3
#define BLOCKS 64
#define FRAMES 256
#define SAMPLES (BLOCKS * FRAMES * 2)

/* The legacy T*10 layout as midi-player builds it: melodic t*10 + channel
 * (ten through fifteen included), drums shared on channel 9. */
static void legacy_table(int *map)
{
    int track, channel;

    for(track = 0; track < NTRACKS; track++)
    {
        for(channel = 0; channel < 16; channel++)
        {
            map[track * 16 + channel] = channel == 9 ? 9 : track * 10 + channel;
        }
    }
}

static void render(float *pcm)
{
    fluid_settings_t *settings = new_fluid_settings();
    fluid_synth_t *synth;
    fluid_player_t *player;
    int map[NTRACKS * 16];
    int i;

    TEST_SUCCESS(fluid_settings_setint(settings, "synth.midi-channels", 256));
    TEST_SUCCESS(fluid_settings_setnum(settings, "synth.sample-rate", 44100.0));
    TEST_SUCCESS(fluid_settings_setstr(settings, "player.timing-source", "sample"));
    synth = new_fluid_synth(settings);
    TEST_ASSERT(synth != NULL);
    TEST_SUCCESS(fluid_synth_sfload(synth, TEST_SOUNDFONT, 1));
    player = new_fluid_player(synth);
    TEST_ASSERT(player != NULL);

    legacy_table(map);
    TEST_SUCCESS(fluid_player_set_channel_map(player, map, NTRACKS));

    TEST_SUCCESS(fluid_player_add_mem(player, midi, sizeof(midi)));
    TEST_SUCCESS(fluid_player_play(player));

    for(i = 0; i < BLOCKS; i++)
    {
        TEST_SUCCESS(fluid_synth_write_float(synth, FRAMES, pcm + i * FRAMES * 2, 0, 2,
                                              pcm + i * FRAMES * 2 + 1, 0, 2));
    }

    delete_fluid_player(player);
    delete_fluid_synth(synth);
    delete_fluid_settings(settings);
}

int main(void)
{
    static float with_map[SAMPLES];
    static float expected[SAMPLES];
    FILE *fixture;
    double rms = 0;
    float max_diff = 0;
    int i;

    /* the fixture is the engine's own T*10 rewriting, rendered before that
     * rewriting was removed; the map must reproduce it exactly */
    fixture = fopen(TEST_LEGACY_LAYOUT_PCM, "rb");
    TEST_ASSERT(fixture != NULL);
    TEST_ASSERT(fread(expected, sizeof(float), SAMPLES, fixture) == SAMPLES);
    fclose(fixture);

    render(with_map);

    for(i = 0; i < SAMPLES; i++)
    {
        float diff = fabsf(with_map[i] - expected[i]);

        if(diff > max_diff)
        {
            max_diff = diff;
        }

        rms += (double)expected[i] * expected[i];
    }

    rms = sqrt(rms / SAMPLES);
    TEST_ASSERT(rms > 1e-2);   /* the comparison must run over audible audio */
    TEST_ASSERT(max_diff < 1e-6);
    printf("legacy layout parity: max diff %g over rms %g\n", max_diff, rms);
    return 0;
}
