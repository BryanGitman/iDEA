import axios from 'axios';
import React, { useCallback, useEffect, useState, Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import Header from '../components/Header';
import List from '../components/List';
import UserLocation from '../UserLocation';

const PrimeraPantalla = ({navigation}) => 
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
      <Header navigation={navigation}></Header>
      <Text style={{margin: '3%', fontWeight: 'bold', color: '#FFF', fontSize: 17}}>MÁS CERCANOS:</Text>
      <List deas={firstDeas}></List>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF0000',
    alignItems: 'center',
    justifyContent: 'center',
    //fontFamily: 'Poppins'
  }
});

export default PrimeraPantalla;
