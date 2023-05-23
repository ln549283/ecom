import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/home';
import Login from '../pages/login';
import Splash from '../pages/splash';
import GameLoading from '../pages/gameLoading';
import Missions from '../pages/missions';
import Shop from '../pages/shop';
import Products from '../pages/products';
import Settings from '../pages/settings';
import Profile from '../pages/profile';
import { navigationRef } from './RootNavigation'

const Stack = createNativeStackNavigator()

const Routes = () => (
    <NavigationContainer ref={navigationRef}>
        <Stack.Navigator  initialRouteName="splash" screenOptions={{ headerShown: false }} >
            <Stack.Screen name="home" component={Home} />
            <Stack.Screen name="splash" component={Splash} />
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="gameLoading" component={GameLoading} />
            <Stack.Screen name="missions" component={Missions} />
            <Stack.Screen name="shop" component={Shop} />
            <Stack.Screen name="settings" component={Settings} />
            <Stack.Screen name="profile" component={Profile} />
            <Stack.Screen name="products" component={Products} />
        </Stack.Navigator>
    </NavigationContainer>
)

export default Routes