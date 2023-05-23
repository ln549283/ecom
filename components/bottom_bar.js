import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from '../pages/home';
import Shop from '../pages/shop';
import Missions from '../pages/missions';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <NavigationContainer>
        <Tab.Navigator 
            initialRouteName="Feed"
            activeColor="#e91e63"
            barStyle={{ backgroundColor: 'tomato' }}
        >
            <Tab.Screen 
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Accueil',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen 
                name="Shop"
                component={Shop}
                options={{
                    tabBarLabel: 'Boutique',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="shop" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen 
                name="Missions"
                component={Missions}
                options={{
                    tabBarLabel: 'Missions',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="list" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MyTabs;