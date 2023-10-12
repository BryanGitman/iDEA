import axios from 'axios';
import React, { useCallback, useState } from 'react';
import { Text } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PrimeraPantalla from './screens/PrimeraPantalla';
import LocalizarDEA from './screens/LocalizarDEA';
import InfoDEA from './screens/InfoDEA';
import Login from './screens/Login';
import Register from './screens/Register';
import Emergencia from './screens/Emergencia';
import UserContext from "./context/userContext";

axios.defaults.baseURL = 'https://adelaide-wombat-jerk.2.us-1.fl0.io';

const Stack = createNativeStackNavigator();

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
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Index" component={PrimeraPantalla} />
          <Stack.Screen name="Home" component={LocalizarDEA} />
          <Stack.Screen name="InfoDEA" component={InfoDEA} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Emergencia" component={Emergencia} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserContext.Provider>
  );
};

export default App;
