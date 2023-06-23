import axios from 'axios';
import React, { useCallback, useEffect, useState, Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import UserLocation from '../UserLocation';

const LocalizarDEA = ({navigation}) => 
{
  const config = {
    headers:{
      UserLocation: UserLocation(),
    }
  };

  const [firstDeas, setFirstDea] = useState([]);

  const getDEA = () => axios.get('/dea', config).then(res => setFirstDea(res.data)).catch(error => console.log(error));

  useEffect(() => {getDEA();}, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text>*mapa*</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    //fontFamily: 'Poppins'
  }
});

export default LocalizarDEA;
