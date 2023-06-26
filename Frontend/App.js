import axios from 'axios';
import React, { useCallback } from 'react';
import { Text } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PrimeraPantalla from './screens/PrimeraPantalla';
import LocalizarDEA from './screens/LocalizarDEA';

axios.defaults.baseURL = 'http://localhost:3000';

const Stack = createNativeStackNavigator();

//SplashScreen.preventAutoHideAsync();

const App = () => {
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

  return (
    <NavigationContainer onLayout={onLayoutRootView}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Index" component={PrimeraPantalla} />
        <Stack.Screen name="Home" component={LocalizarDEA} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
