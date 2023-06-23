import axios from 'axios';
import * as React from 'react';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PrimeraPantalla from './screens/PrimeraPantalla';
import LocalizarDEA from './screens/LocalizarDEA';

axios.defaults.baseURL = 'https://d499-200-73-176-50.ngrok-free.app';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Index" component={PrimeraPantalla} />
        <Stack.Screen name="Home" component={LocalizarDEA} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
