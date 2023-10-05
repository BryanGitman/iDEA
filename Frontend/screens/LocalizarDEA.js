import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import * as SplashScreen from 'expo-splash-screen';
import AppLoading from 'expo-app-loading';
import Map from '../components/Map';
import BottomSheet from '../components/BottomSheet';
import * as Location from 'expo-location';
import UserContext from '../context/userContext';
/*import MapLibreGL from '@maplibre/maplibre-react-native';

MapLibreGL.setAccessToken(null);

const apiKey = '4f56cf8f-d11b-43fe-859b-786dc252ab0a';
const styleUrl = `https://tiles.stadiamaps.com/styles/alidade_smooth.json?api_key=${apiKey}`;*/

const LocalizarDEA = ({navigation}) => 
{
  const usuario = useContext(UserContext);

  const [location, setLocation] = useState(null);
  const [deas, setDea] = useState([
    {
        "Id": 1,
        "Descripcion": "Edificio 2, auditorio",
        "Calle": "Rio de Janeiro",
        "Altura": 509,
        "Nombre": "Escuela Ort",
        "Latitud": -34.60985040001025,
        "Longitud": -58.430048464633586
    },
    {
        "Id": 4,
        "Descripcion": "Edificio 1, planta baja al lado de las escaleras",
        "Calle": "Yatay",
        "Altura": 240,
        "Nombre": "Escuela Ort",
        "Latitud": -34.609952548530885,
        "Longitud": -58.42916481268707
    },
    {
        "Id": 5,
        "Descripcion": "Edificio 1, piso 2, al lado de coordinacion",
        "Calle": "Yatay",
        "Altura": 240,
        "Nombre": "Escuela Ort",
        "Latitud": -34.609952548530885,
        "Longitud": -58.42916481268707
    }
  ]);

  const getDEA = () => axios.get('/dea').then(res => setDea(res.data)).catch(error => console.log(error));

  useEffect(() => {
    (async () => {
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();

    getDEA();
  }, []);

  return (
    /*<View style={styles.page}>
        <MapLibreGL.MapView
          style={styles.map}
          styleURL={styleUrl}
        />
    </View>*/
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaView style={styles.container}>
        <Text>*mapa*</Text>
        <Text>{Object.keys(usuario.usuario).length === 0 && usuario.usuario.constructor === Object?'Ciudadano':usuario.usuario.Nombre}</Text>
        {
          Object.keys(usuario.usuario).length === 0 && usuario.usuario.constructor === Object?
          <>
            <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate("Login")}><Text>Iniciar sesión</Text></TouchableOpacity>
            <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate("Register")}><Text>Registrarse</Text></TouchableOpacity>
          </>
          :
          <TouchableOpacity style={styles.boton} onPress={() => usuario.setUsuario({})}><Text>Cerrar sesión</Text></TouchableOpacity>
        }
        <Map deas={deas} navigation={navigation}></Map>
      </SafeAreaView>
      {/*<BottomSheet></BottomSheet>*/}
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  boton: {
    backgroundColor: "grey",
    padding: 10,
    borderRadius: 10,
    margin: 12
  },
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  map: {
    flex: 1,
    alignSelf: 'stretch'
  }
});

export default LocalizarDEA;
