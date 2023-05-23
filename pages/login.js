import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { Text, TextInput, Button } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import DefaultPage from '../components/DefaultPage'
import { loginUser } from '../redux/slices/user.slice'
import styles from '../styles/style';

const Login = ({ navigation }) => {
    const [name, setName] = useState('')
    const isUserLoggedIn = useSelector((state) => state.user.isLoggedIn);
    const dispatch = useDispatch();

    const handleLogin = () => {
        dispatch(loginUser(name));
    };

    useEffect(() => {
        if (isUserLoggedIn) {
            navigation.navigate('gameLoading');
        }
    }, [isUserLoggedIn, navigation]);

    return (
        <DefaultPage>
            <Text>Se connecter</Text>
            <TextInput
                placeholder="Identifiant de jeu"
                onChangeText={setName}
                value={name}
            />
            <View style={styles.viewButton}>
                <Button mode="contained" onPress={handleLogin}>Connexion</Button>
            </View>

            { isUserLoggedIn ? (<Text>{`Welcome, ${name}!`}</Text>) : undefined}

        </DefaultPage>
    )
}

export default Login
