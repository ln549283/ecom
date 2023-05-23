import React, {useState, useEffect } from 'react'
import { View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Audio } from 'expo-av';
const BackgroundMusic = () => {
    const backgroundSoundStored = useSelector((state) => state.user.backgroundSound);
    const soundStored = useSelector((state) => state.user.sound);


    const [backgroundSound, setBackgroundSound] = useState(null);
    useEffect(() => {
        const loadSound = async () => {
          const { sound } = await Audio.Sound.createAsync(
            require('../assets/sounds/ForestWalk-320bit.mp3'),
            { shouldPlay: true, isLooping: true, volume:1 }
          );
          setBackgroundSound(sound);
        };
        loadSound();
      },
      []
    );
    
    useEffect(() => {
        if (backgroundSound) {
            backgroundSound.setVolumeAsync(backgroundSoundStored);
            backgroundSound.playAsync();
        }
      },
      [backgroundSound, backgroundSoundStored]
    );
  return (
    <View>   
    </View>     
  );
}

export default BackgroundMusic
