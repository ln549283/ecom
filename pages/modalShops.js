import React, {useState, useEffect, useCallback } from 'react'
import { View } from 'react-native'
import { Button, Portal, Text, Modal, IconButton, TextInput, Divider } from 'react-native-paper';
import styles from '../styles/style';
import { useDispatch, useSelector } from 'react-redux'
import { sounds, loadSounds, playClickSound, playErrorClickSound, playSuccessClickSound } from './audio.js';


const ModalShops = () => {
    const [modalShopsVisible, setModalShopsVisible] = useState(false);
    
    const listShops = useSelector((state) => state.shops.shops);
    const CountShops = useSelector((state) => state.shops.count);
    console.log('shops')
    console.log(CountShops)
    return (
        <View>
            <View style={styles.viewButton}>
                <Button mode="outlined"
                    onPress={() => {playClickSound();setModalShopsVisible(true);}}
                >
                    Gestion de site e-commerce {CountShops}

                </Button>
            </View>
            <Portal>
                <Modal        
                visible={modalShopsVisible}
                onDismiss={() => {
                    setModalShopsVisible(!modalShopsVisible);
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
                                    Mes boutiques
                                </Text>                                
                            </View> 
                            <Divider bold='true' horizontalInset='true'/>          
                            <View style={{padding:10}}>
                                {CountShops > 0 ? (
                                    listShops.map((shop) => (
                                        <View key={shop.id} style={{background:'oldlace', alignItems:'center', padding:5, margin:5, borderRadius:10, flex:1}}>
                                            <Text>{shop.name}</Text>
                                        </View>
                                    ))
                                )
                                : (
                                    <View style={{background:'oldlace', alignItems:'center', padding:5, margin:5, borderRadius:10, flex:1}}>
                                        <Text>Aucune boutique pour le moment !</Text>
                                    </View>
                                )}      
                          </View>
                        </View>
                        <IconButton
                            icon="close"
                            size={20}
                            onPress={() => setModalShopsVisible(!modalShopsVisible)}
                            mode="contained"
                            style={{position: 'absolute', right: 0, top:0}}
                        /> 
                    </View>
                </Modal>
            </Portal>    
        </View>     
    );
}

export default ModalShops
