import React, {useState, useEffect, useRef } from 'react'
import { View } from 'react-native'
import { Button, Portal, Text, Modal, IconButton, TextInput } from 'react-native-paper';
import styles from '../styles/style';
import { createShop } from '../redux/slices/shop.slice'
import { useDispatch, useSelector } from 'react-redux'
import { sounds, loadSounds, playClickSound, playErrorClickSound, playSuccessClickSound } from './audio.js';

const ModalNewShop = () => {

    const dispatch = useDispatch();

    const [newShopName, setNewShopName] = useState('');
    const [modalMissionsVisible, setModalMissionsVisible] = useState(false);

    function handleNewShop(newShopName){
        if(newShopName != ''){
            console.log('la boutique '+newShopName+" a été créé !");
            dispatch(createShop(newShopName));
            playSuccessClickSound();
            setModalMissionsVisible(!modalMissionsVisible);

            setNewShopName('');
        }
        else{
            playErrorClickSound();
        }
    }
    
  return (
    <View>
        <View style={styles.viewButton}>
          <Button mode="outlined"
            onPress={() => {playClickSound();setModalMissionsVisible(true);}}>
            Créer une boutique
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
                    <View style={{position: 'relative',borderRadius:15, padding: 15}}>
                        <Text style={{
                                fontSize: 18,
                                fontWeight: 'bold',
                            }}
                        >
                            Création d'une nouvelle boutique
                        </Text>
                        <IconButton
                            icon="close"
                            size={20}
                            onPress={() => setModalMissionsVisible(!modalMissionsVisible)}
                            mode="contained"
                            style={{position: 'absolute', right: 0, top:0}}
                        />
                    </View>            
                    <View style={{padding:20}}>
                        <Text>Choississez le nom de votre nouvelle boutique</Text>
                        <TextInput
                            value={newShopName}
                            onChangeText={text => setNewShopName(text)}
                            autoFocus={true}
                        />
                        <View style={styles.viewBuviewCenterButtontton}>
                            <Button
                            onPress={() => {handleNewShop(newShopName);}}>
                                Créer ma boutique
                            </Button>
                        </View>
                    </View>              
                </View>
            </Modal>
        </Portal>    
    </View>     
  );
}

export default ModalNewShop
