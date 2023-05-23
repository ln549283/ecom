import React, {useState, useEffect } from 'react'
import {  View, Image, Pressable } from 'react-native'
import { Button, Portal, Text, Modal, IconButton, TextInput } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux'
import styles from '../styles/style';
import GameHour from './game_hour';
import ModalNewShop from './modalNewShop';
import ModalSettings from './modalSettings';
import ModalMissions from './modalMissions';
import ModalShops from './modalShops';
import DefaultPage from '../components/DefaultPage'
import { sounds, loadSounds, playClickSound, playErrorClickSound, playSuccessClickSound } from './audio.js';

const Home = ({navigation}) => {
  
  // DEBUT CONTROLE CONNEXION
  const isUserLoggedIn = useSelector((state) => state.user.isLoggedIn);
  if (!isUserLoggedIn) {
    navigation.navigate('login');
  }
  // FIN CONTROLE CONNEXION

  // DEBUT CHARGEMENT AUDIO
  const backgroundSoundStored = useSelector((state) => state.user.backgroundSound);
  const interfaceSoundStored = useSelector((state) => state.user.interfaceSound);

  useEffect(() => {
    loadSounds(backgroundSoundStored, interfaceSoundStored);
    // console.log(getStatusAsync(sounds.backgroundSound))


  }, [backgroundSoundStored, interfaceSoundStored]);

  if (sounds.backgroundSound) {
     sounds.backgroundSound.playAsync();
  }
  // FIN CHARGEMENT AUDIO

  const numShops = useSelector(state => state.shops.count);
  
  const {name, balance, activeStores, expenses, revenue} = useSelector((state) => state.user);
  const missions = useSelector((state) => state.missions);
  
  return (
    <DefaultPage>
        {/* <BackgroundMusic/> */}
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <ModalSettings/>

        <View style={styles.balanceContainer}>
          <Text>Solde actuel: {balance}</Text>
        </View>
        <View>
          <Text style={{paddingVertical:10}}>Nombre de e-commerce actifs: {numShops}</Text>
          <Text style={{paddingVertical:10}}>Dépenses globales: {expenses}</Text>
          <Text style={{paddingVertical:10}}>Chiffre d'affaires: {revenue}</Text>
        </View>
      </View>
      <View>
        <ModalMissions/>
      </View>
      
      <View style={{alignItems: 'flex-start', position: 'absolute', bottom: 0, left: 0, right: 0, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 10}}>
        <View>
          <GameHour/>
        </View>
        <View style={{flexDirection:'row'}}>
          <ModalNewShop/>
          <View style={[styles.viewButton,{marginHorizontal:5}]}>
            <Button mode="outlined" onPress={()=> {playClickSound();}}>
              Gestion de pub
            </Button>
          </View>
          <View  style={[styles.viewButton,{marginHorizontal:5}]}>
            <ModalShops/>
          </View>
          <View  style={[styles.viewButton,{marginHorizontal:5}]}>
            <Button mode="outlined" onPress={()=> {playClickSound(); navigation.navigate('products')}}>
              Gestion de catalogue produit
            </Button>
          </View>
        </View>
      </View>     
    </DefaultPage>
  );
}

export default Home
