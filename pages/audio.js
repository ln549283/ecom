import { Audio } from 'expo-av';

const sounds = {};

const loadSounds = async (backgroundSoundVolume, interfaceSoundVolume) => {
    console.log('son charge et au top');
    // Arrêter la lecture du son de fond existant s'il est déjà chargé
    if (sounds.backgroundSound) {
        sounds.backgroundSound.setVolumeAsync(backgroundSoundVolume);
        return;
    }
    const [clickSound, errorClickSound, successClickSound, backgroundSound] = await Promise.all([
        Audio.Sound.createAsync(require('../assets/sounds/simple_click.wav')),
        Audio.Sound.createAsync(require('../assets/sounds/error_click.wav')),
        Audio.Sound.createAsync(require('../assets/sounds/shining.wav')),
        Audio.Sound.createAsync(
            require('../assets/sounds/ForestWalk-320bit.mp3'),
            { shouldPlay: true, isLooping: true }
        ),
    ]);

    clickSound.sound.setVolumeAsync(interfaceSoundVolume);
    errorClickSound.sound.setVolumeAsync(interfaceSoundVolume);
    successClickSound.sound.setVolumeAsync(interfaceSoundVolume);
    backgroundSound.sound.setVolumeAsync(backgroundSoundVolume);

    sounds.clickSound = clickSound.sound;
    sounds.errorClickSound = errorClickSound.sound;
    sounds.successClickSound = successClickSound.sound;
    sounds.backgroundSound = backgroundSound.sound;
};

const playClickSound = async () => {
    if (sounds.clickSound) {
      await sounds.clickSound.replayAsync();
    }
};
const playErrorClickSound = async () => {
    if (sounds.errorClickSound) {
      await sounds.errorClickSound.replayAsync();
    }
};
const playSuccessClickSound = async () => {
    if (sounds.successClickSound) {
      await sounds.successClickSound.replayAsync();
    }
};

export { sounds, loadSounds, playClickSound, playErrorClickSound, playSuccessClickSound };
