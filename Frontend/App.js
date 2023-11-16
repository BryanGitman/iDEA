import axios from 'axios';
import React, { useCallback, useState, useEffect } from 'react';
import { Text } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import UserContext from "./context/userContext";
import DrawerNav from './components/DrawerNav';

axios.defaults.baseURL = 'https://adelaide-wombat-jerk.2.us-1.fl0.io';

//SplashScreen.preventAutoHideAsync();

const App = () => {
  const [usuario, setUsuario] = useState({});

  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('./assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-SemiBold': require('./assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Italic': require('./assets/fonts/Poppins-Italic.ttf')
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
      Text.defaultProps.style.fontFamily = 'Poppins-Regular';
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const getUsuario = nomUsuario =>
  {
    axios.post('/user', {
    Nombre: nomUsuario
    }).then(res => {
        setUsuario(res.data);
    }).catch(error => console.log(error));
  }

  return (
    <UserContext.Provider value={{usuario, setUsuario, getUsuario}}>
      <NavigationContainer onLayout={onLayoutRootView}>
        <DrawerNav></DrawerNav>
      </NavigationContainer>
    </UserContext.Provider>
  );
};

export default App;
