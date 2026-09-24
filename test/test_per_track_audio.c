#include "test.h"
#include "fluidsynth.h"
#include "fluidsynth_priv.h"
#include "fluid_synth.h"
#include "fluid_chan.h"
#include "fluid_midi.h"

typedef struct
{
    int enabled;
    int notes;
    int controls;
    int bends;
} event_check;

static int check_event(void *data, fluid_midi_event_t *event)
{
    event_check *check = data;
    int track, channel;
    if(event->type == NOTE_ON)
    {
        track = event->param1 - 60;
        check->notes++;
    }
    else if(event->type == CONTROL_CHANGE && event->param1 == 7)
    {
        track = 100 - event->param2;
        check->controls++;
    }
    else if(event->type == PITCH_BEND)
    {
        track = event->param1 - 8192;
        check->bends++;
    }
    else
    {
        return FLUID_OK;
    }
    channel = track == 0 ? 8 : (check->enabled ? track * 10 + 9 : 9);
    TEST_ASSERT(event->channel == channel);
    return FLUID_OK;
}

static void test_events(int enabled)
{
    unsigned char midi[] = {
        'M', 'T', 'h', 'd', 0, 0, 0, 6, 0, 1, 0, 3, 1, 224,
        'M', 'T', 'r', 'k', 0, 0, 0, 33,
        0, 0xff, 0x51, 3, 7, 0xa1, 0x20,
        0, 0xf0, 2, 0x7d, 0xf7,
        1, 0xb8, 7, 100, 0, 0xe8, 0, 64, 0, 0x98, 60, 100,
        0x8f, 0, 0x88, 60, 0, 0, 0xff, 0x2f, 0,
        'M', 'T', 'r', 'k', 0, 0, 0, 21,
        1, 0xb9, 7, 99, 0, 0xe9, 1, 64, 0, 0x99, 61, 100,
        0x8f, 0, 0x89, 61, 0, 0, 0xff, 0x2f, 0,
        'M', 'T', 'r', 'k', 0, 0, 0, 21,
        1, 0xb9, 7, 98, 0, 0xe9, 2, 64, 0, 0x99, 62, 100,
        0x8f, 0, 0x89, 62, 0, 0, 0xff, 0x2f, 0
    };
    event_check check = { enabled, 0, 0, 0 };
    fluid_settings_t *settings = new_fluid_settings();
    fluid_synth_t *synth;
    fluid_player_t *player;
    int default_value;
    TEST_SUCCESS(fluid_settings_getint(settings, "synth.per-track-audio", &default_value));
    TEST_ASSERT(default_value == 0);
    TEST_SUCCESS(fluid_settings_setint(settings, "synth.per-track-audio", enabled));
    TEST_SUCCESS(fluid_settings_setstr(settings, "player.timing-source", "sample"));
    synth = new_fluid_synth(settings);
    TEST_ASSERT(synth != NULL);
    player = new_fluid_player(synth);
    TEST_ASSERT(player != NULL);
    TEST_SUCCESS(fluid_player_set_playback_callback(player, check_event, &check));
    TEST_SUCCESS(fluid_player_add_mem(player, midi, sizeof(midi)));
    TEST_SUCCESS(fluid_player_play(player));
    TEST_SUCCESS(fluid_synth_process(synth, 8192, 0, NULL, 0, NULL));
    TEST_ASSERT(check.notes == 3 && check.controls == 3 && check.bends == 3);
    TEST_SUCCESS(fluid_player_seek(player, 0));
    TEST_SUCCESS(fluid_synth_process(synth, 8192, 0, NULL, 0, NULL));
    TEST_ASSERT(check.notes == 6 && check.controls == 6 && check.bends == 6);
    delete_fluid_player(player);
    delete_fluid_synth(synth);
    delete_fluid_settings(settings);
}

static void test_output_mapping(int enabled, int channel, int group)
{
    fluid_settings_t *settings = new_fluid_settings();
    fluid_synth_t *synth;
    fluid_voice_t *voices[8];
    int i, id;
    TEST_SUCCESS(fluid_settings_setint(settings, "synth.per-track-audio", enabled));
    TEST_SUCCESS(fluid_settings_setint(settings, "synth.audio-channels", 3));
    TEST_SUCCESS(fluid_settings_setint(settings, "synth.audio-groups", 3));
    TEST_SUCCESS(fluid_settings_setint(settings, "synth.effects-groups", 3));
    synth = new_fluid_synth(settings);
    TEST_ASSERT(synth != NULL);
    TEST_SUCCESS(id = fluid_synth_sfload(synth, TEST_SOUNDFONT, 1));
    TEST_SUCCESS(fluid_synth_system_reset(synth));
    TEST_ASSERT(synth->channel[channel]->channel_type ==
        ((enabled ? channel % 10 == 9 : channel == 9) ? CHANNEL_TYPE_DRUM : CHANNEL_TYPE_MELODIC));
    TEST_SUCCESS(fluid_synth_program_select(synth, channel, id, 0, 0));
    TEST_SUCCESS(fluid_synth_noteon(synth, channel, 60, 100));
    TEST_SUCCESS(fluid_synth_process(synth, 1024, 0, NULL, 0, NULL));
    fluid_synth_get_voicelist(synth, voices, 8, -1);
    TEST_ASSERT(voices[0] != NULL);
    for(i = 0; i < 8 && voices[i] != NULL; i++)
    {
        fluid_rvoice_buffers_t *buffers = &voices[i]->rvoice->buffers;
        TEST_ASSERT(buffers->bufs[0].mapping == 2 * group);
        TEST_ASSERT(buffers->bufs[1].mapping == 2 * group + 1);
        TEST_ASSERT(buffers->bufs[2].mapping == 6 + 2 * group);
        TEST_ASSERT(buffers->bufs[3].mapping == 7 + 2 * group);
    }
    delete_fluid_synth(synth);
    delete_fluid_settings(settings);
}

static int count_notes(void *data, fluid_midi_event_t *event)
{
    int *count = data;
    if(event->type == NOTE_ON)
    {
        (*count)++;
    }
    return FLUID_OK;
}

static void test_layout(int enabled, int tracks, int channel, int midi_channels, int accepted)
{
    unsigned char midi[14 + 26 * 21] = {
        'M', 'T', 'h', 'd', 0, 0, 0, 6, 0, 1, 0, 0, 1, 224
    };
    const unsigned char track[] = {
        'M', 'T', 'r', 'k', 0, 0, 0, 13,
        1, 0x90, 60, 100, 0x8f, 0, 0x80, 60, 0, 0, 0xff, 0x2f, 0
    };
    fluid_settings_t *settings = new_fluid_settings();
    fluid_synth_t *synth;
    fluid_player_t *player;
    int i, notes = 0;
    midi[11] = tracks;
    for(i = 0; i < tracks; i++)
    {
        unsigned char *destination = midi + 14 + i * sizeof(track);
        FLUID_MEMCPY(destination, track, sizeof(track));
        destination[9] |= i == tracks - 1 ? channel : 9;
        destination[14] |= i == tracks - 1 ? channel : 9;
    }
    TEST_SUCCESS(fluid_settings_setint(settings, "synth.per-track-audio", enabled));
    TEST_SUCCESS(fluid_settings_setint(settings, "synth.midi-channels", midi_channels));
    TEST_SUCCESS(fluid_settings_setstr(settings, "player.timing-source", "sample"));
    synth = new_fluid_synth(settings);
    TEST_ASSERT(synth != NULL);
    player = new_fluid_player(synth);
    TEST_ASSERT(player != NULL);
    TEST_SUCCESS(fluid_player_set_playback_callback(player, count_notes, &notes));
    TEST_SUCCESS(fluid_player_add_mem(player, midi, 14 + tracks * sizeof(track)));
    TEST_SUCCESS(fluid_player_play(player));
    TEST_SUCCESS(fluid_synth_process(synth, 8192, 0, NULL, 0, NULL));
    TEST_ASSERT(notes == (accepted ? tracks : 0));
    TEST_ASSERT(fluid_player_get_status(player) == (accepted ? FLUID_PLAYER_PLAYING : FLUID_PLAYER_DONE));
    delete_fluid_player(player);
    delete_fluid_synth(synth);
    delete_fluid_settings(settings);
}

int main(void)
{
    int enabled, i;
    const int channels[] = { 0, 8, 9, 10, 18, 19, 240, 248, 249 };
    const int separated_groups[] = { 0, 0, 0, 1, 1, 1, 0, 0, 0 };
    for(enabled = 0; enabled <= 1; enabled++)
    {
        test_events(enabled);
        for(i = 0; i < 9; i++)
        {
            test_output_mapping(enabled, channels[i], enabled ? separated_groups[i] : channels[i] % 3);
        }
    }
    test_layout(1, 25, 9, 256, 1);
    test_layout(1, 26, 9, 256, 0);
    test_layout(1, 1, 10, 256, 0);
    test_layout(1, 1, 15, 256, 0);
    test_layout(1, 2, 15, 256, 0);
    test_layout(1, 1, 9, 16, 1);
    test_layout(1, 2, 9, 16, 0);
    /* Unsupported opt-in layouts must remain accepted on the default path. */
    test_layout(0, 26, 9, 256, 1);
    test_layout(0, 1, 15, 256, 1);
    return 0;
}
