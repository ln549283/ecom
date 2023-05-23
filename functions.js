import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Audio } from 'expo-av';

const useClickSound = () => {
  const [clickSound, setClickSound] = useState(null);

  useEffect(() => {
    async function loadClickSound() {
      const { sound } = await Audio.Sound.createAsync(
        require('./assets/sounds/simple_click.wav')
      );
      console.log("charge son")
      setClickSound(sound);
    }
    loadClickSound();
  }, []);

  const playClickSound = async () => {
    if (clickSound) {
      await clickSound.replayAsync();
    }
  };

  return playClickSound;
};

export default useClickSound;