import { View} from 'react-native'
import React, {useState, useEffect } from 'react'
import { Button, Portal, Text, Modal, IconButton, TextInput } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux'
import styles from '../styles/style';
import DefaultPage from '../components/DefaultPage'
import { sounds, loadSounds, playClickSound, playErrorClickSound, playSuccessClickSound } from './audio.js';

const Missions = ({navigation}) => {
  return (
    <DefaultPage>
      <View style={[styles.viewButton,{marginHorizontal:5}]}>
        <Button mode="contained" onPress={()=> {playClickSound();navigation.goBack();}}>
          Retour
        </Button>
      </View>

    </DefaultPage>
  )
}

export default Missions