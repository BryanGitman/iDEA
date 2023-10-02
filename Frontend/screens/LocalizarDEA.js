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
//import MapLibreGL from '@rnmapbox/maps';

/*MapLibreGL.setWellKnownTileServer(MapLibreGL.TileServers.MapLibre);
MapLibreGL.setAccessToken(null);

const MAPTILER_API_KEY = "fEiqmpW3iwff7X3070kV";*/

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
      <View style={styles.container}>
        <MapLibreGL.MapView
          style={styles.map}
          styleURL={`https://api.maptiler.com/maps/streets-v2/style.json?key=${MAPTILER_API_KEY}`}
          logoEnabled={false}
          attributionPosition={{bottom: 8, right: 8}}>
          <MapLibreGL.Camera
            defaultSettings={{centerCoordinate: [2, 41.5], zoomLevel: 8}}
          />
        </MapLibreGL.MapView>
      </View>
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
  }
  /*page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '100%',
    height: '100%',
  },
  map: {
    flex: 1,
  },
  image: {
    width: 25,
    height: 25,
  }*/
});

export default LocalizarDEA;
