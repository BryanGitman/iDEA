import React, { useCallback, useEffect, useState, Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import Header from './components/Header';
import FirstDEA from './components/FirstDEA';

export default function App() {
  return (
    <View style={styles.container}>
      <Header></Header>
      <View style={styles.masCercanos}><Text style={{fontWeight: 'bold', color: '#FFF', fontSize: 17}}>MÁS CERCANOS:</Text></View>
      <FirstDEA direccion="Yatay 240" establecimiento="ORT" descripcion="Edificio 1, planta baja al lado de las escaleras"></FirstDEA>
      <FirstDEA direccion="Yatay 240" establecimiento="ORT" descripcion="Edificio 1, piso 2, al lado de coordinación"></FirstDEA>
      <FirstDEA direccion="Rio de Janeiro 509" establecimiento="ORT" descripcion="Edificio 2, auditorio"></FirstDEA>
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
