import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import Header from '../components/Header';
import List from '../components/List';
import * as Location from 'expo-location';

const PrimeraPantalla = ({navigation}) => 
{
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const [firstDeas, setFirstDea] = useState([{"Id":4,"Descripcion":"Edificio 1, planta baja al lado de las escaleras","Calle":"Yatay","Altura":240,"Nombre":"Escuela Ort"},{"Id":5,"Descripcion":"Edificio 1, piso 2, al lado de coordinacion","Calle":"Yatay","Altura":240,"Nombre":"Escuela Ort"},{"Id":1,"Descripcion":"Edificio 2, auditorio","Calle":"Rio de Janeiro","Altura":509,"Nombre":"Escuela Ort"}]);

  const config = {
    headers:{
      UserLocation: location,
    }
  };

  const getDEA = () => axios.get('/dea', config).then(res => setFirstDea(res.data)).catch(error => console.log(error));

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        console.log(errorMsg);
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();

    getDEA();
  }, []);

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
    justifyContent: 'center'
  }
});

export default PrimeraPantalla;