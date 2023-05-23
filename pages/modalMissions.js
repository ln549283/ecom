import React, {useState, useEffect, useCallback } from 'react'
import { View } from 'react-native'
import { Button, Portal, Text, Modal, IconButton, TextInput, Divider } from 'react-native-paper';
import styles from '../styles/style';
import Slider from '@react-native-community/slider';
import { useDispatch, useSelector } from 'react-redux'
import { sounds, loadSounds, playClickSound, playErrorClickSound, playSuccessClickSound } from './audio.js';

const ModalMissions = () => {
    const [modalMissionsVisible, setModalMissionsVisible] = useState(false);
    const missions = useSelector((state) => state.missions);

    return (
        <View>
            <View style={styles.viewButton}>
            <IconButton
                icon="format-list-bulleted"
                size={20}
                onPress={() => {playClickSound();setModalMissionsVisible(true)}}
                mode="contained"
                style={{position: 'absolute', right: 0, top:0}}
            />
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
                                    Missions
                                </Text>
                                <Text style={{textAlign:'center', padding:10}}>
                                    Complétez pour gagner des récompenses !
                                </Text>                                
                            </View> 
                            <Divider bold='true' horizontalInset='true'/>          
                            <View style={{padding:10}}>
                                {missions.filter(m => !m.completed).slice(0,5).map((mission) => (
                                    <View key={mission.id} style={{flexDirection:'row', background:'gold', padding:5, margin:5, borderRadius:15}}>
                                        <View>
                                            <IconButton
                                                icon="camera"
                                                size={30}
                                                iconColor="goldenrod"
                                            />
                                        </View>
                                        <View style={{justifyContent:'center', flex:1, paddingStart:20}}>
                                            <View>
                                                <Text>
                                                    {mission.title}
                                                </Text>
                                            </View>
                                            <View style={{flexDirection:'row', fontSize:14, fontWeight:'bold'}}>
                                                <Text style={{color:'goldenrod'}}> Récompense : {mission.gain}</Text>
                                                <IconButton
                                                    icon="diamond-stone"
                                                    size={15}
                                                    iconColor="goldenrod"
                                                    padding={0}
                                                    style={{width:20, height:20, marginVertical:0, marginHorizontal:5}}
                                                />
                                            </View>
                                        </View>
                                        <View style={{justifyContent:'center'}}>
                                            <Button 
                                                mode="contained" 
                                                style={{alignItems: 'flex-start', ...(mission.completed ? {} : {background:'grey'})}} 
                                                onPress={()=> { mission.completed ? playClickSound() : playErrorClickSound();}}
                                            >
                                                Récupérer
                                            </Button>
                                        </View>
                                    </View>
                                    
                                    ))}
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

export default ModalMissions
