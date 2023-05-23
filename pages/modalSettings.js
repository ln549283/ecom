import React, {useState, useEffect, useCallback } from 'react'
import { View } from 'react-native'
import { Button, Portal, Text, Modal, IconButton, TextInput, Divider } from 'react-native-paper';
import styles from '../styles/style';
import Slider from '@react-native-community/slider';
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser, setBackgroundSound, setInterfaceSound } from '../redux/slices/user.slice'
import { sounds, loadSounds, playClickSound, playErrorClickSound, playSuccessClickSound } from './audio.js';


const ModalSettings = () => {
    const [modalMissionsVisible, setModalMissionsVisible] = useState(false);
    const backgroundSoundStored = useSelector((state) => state.user.backgroundSound);
    const interfaceSoundStored = useSelector((state) => state.user.interfaceSound);

    const [backgroundSoundVolume, setBackgroundSoundVolume] = useState(backgroundSoundStored);
    const [interfaceSoundVolume, setInterfaceSoundVolume] = useState(interfaceSoundStored);

    const dispatch = useDispatch();
    
    const handleLogout = () => {
        // sound.stopAsync();

        dispatch(logoutUser());
    };

    const handleBackgroundSound = (value) => { 
        setBackgroundSoundVolume(value);
        dispatch(setBackgroundSound(value));
    };

    const handleInterfaceSound = (value) => { 
        setInterfaceSoundVolume(value);
        dispatch(setInterfaceSound(value));
    };

    return (
        <View>
            <View style={styles.viewButton}>
            <Button mode="outlined"
                onPress={() => {playClickSound();setModalMissionsVisible(true);}}>
                Paramètres
            </Button>
            </View>
            <Portal>
                <Modal        
                visible={modalMissionsVisible}
                onDismiss={() => {
                    setModalMissionsVisible(!modalMissionsVisible);
                }}
                style={{alignSelf:'center', alignItems:'center'}}
                contentContainerStyle={{borderRadius:15}}
                dismissable={false}
                >            
                    <View style={{backgroundColor:'#fff',borderRadius:15}}>
                        
                        <View style={{width:500}}>
                            <View style={{position: 'relative',borderRadius:15, padding: 15}}>
                                <Text style={{
                                        fontSize: 18,
                                        fontWeight: 'bold',
                                        textAlign:'center'
                                    }}
                                >
                                    Paramètres
                                </Text>
                                <Text style={{textAlign:'center', padding:10}}>
                                    Version du jeu 0.0.1
                                </Text>
                                
                            </View> 
                            <Divider bold='true' horizontalInset='true'/>          
                            <View style={{padding:10}}>
                                <View style={{flexDirection:'row', alignItems:'center', marginHorizontal:100}}>
                                    <Text style={{textAlignVertical :'center', width:100}}>Musique</Text>
                                    <Slider
                                        style={{maxWidth: 150, height: 40}}
                                        minimumValue={0}
                                        maximumValue={1}
                                        step={0.01}
                                        minimumTrackTintColor="green"
                                        maximumTrackTintColor="blue"
                                        onValueChange={handleBackgroundSound}
                                        value={backgroundSoundVolume}
                                    />
                                </View>
                            </View>
                            <View style={{padding:10}}>
                                <View style={{flexDirection:'row', alignItems:'center', marginHorizontal:100}}>
                                    <Text style={{textAlignVertical :'center', width:100}}>Effet Sonore</Text>
                                    <Slider
                                        style={{maxWidth: 150, height: 40}}
                                        minimumValue={0}
                                        maximumValue={1}
                                        step={0.01}
                                        minimumTrackTintColor="green"
                                        maximumTrackTintColor="blue"                                        
                                        onValueChange={handleInterfaceSound}
                                        value={interfaceSoundVolume}
                                    />
                                </View>
                            </View>
                            <View style={styles.viewButton}>
                                <Button mode="contained" onPress={handleLogout}>Déconnexion</Button>
                            </View>
                        </View>
                        <IconButton
                            icon="close"
                            size={20}
                            onPress={() => setModalMissionsVisible(!modalMissionsVisible)}
                            mode="contained"
                            style={{position: 'absolute', right: 0, top:0}}
                        /> 
                    </View>
                </Modal>
            </Portal>    
        </View>     
    );
}

export default ModalSettings
