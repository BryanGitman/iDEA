import axios from 'axios';
import React, { useCallback, useEffect, useState, Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import Header from './components/Header';
import List from './components/List';

axios.defaults.baseURL = 'http://localhost:3000';

export default function App() {
  const [firstDeas, setFirstDea] = useState([]);

  getDEA = () => axios.get('/dea').then(res => setFirstDea(res.data));

  useEffect(() => {
    getDEA();
  }, []);

  return (
    <View style={styles.container}>
      <Header></Header>
      <View style={styles.masCercanos}><Text style={{fontWeight: 'bold', color: '#FFF', fontSize: 17}}>MÁS CERCANOS:</Text></View>
      <List deas={firstDeas}></List>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF0000',
    alignItems: 'center',
    justifyContent: 'center',
    //fontFamily: 'Poppins'
  },
  masCercanos: {
    flex: 1,
    width: 168,
    height: 30,
    alignItems: 'center',
    top: 150
  }
});
