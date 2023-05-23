// In App.js in a new project

import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Button, ActivityIndicator } from 'react-native';
import { enableScreens } from 'react-native-screens';
import Routes from './routes'
import { Provider as StoreProvider} from 'react-redux'
import store from './redux/store'
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import styles from './styles/style';

enableScreens();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'red',
    secondary: 'blue'
  },
};

function App(){
  return (
    <StoreProvider store={store}>
      <PaperProvider theme={theme}>
          <Routes />
      </PaperProvider>
    </StoreProvider>
    
  )
   
}

export default App;
