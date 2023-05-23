import { View, Text } from 'react-native'
import React,  { useEffect } from 'react'
import DefaultPage from '../components/DefaultPage'
import { useDispatch, useSelector } from 'react-redux'
import { loadSounds } from './audio';


const GameLoading = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('home')
    }, 500)
  }, [])


  return (
    <DefaultPage>
      <Text>Chargement des données...</Text>
    </DefaultPage>
  )
}

export default GameLoading