import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet, Text, SafeAreaView, TouchableOpacity, Dimensions } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import * as SplashScreen from 'expo-splash-screen';
import AppLoading from 'expo-app-loading';
import Map from '../components/Map';
import BottomSheet from '../components/BottomSheet';
import * as Location from 'expo-location';
import UserContext from '../context/userContext';
import MapView from 'react-native-maps';
import Search from '../components/Search';

const LocalizarDEA = ({navigation}) => 
{
  const usuario = useContext(UserContext);

  const [location, setLocation] = useState(null);
  const [mapRegion, setMapRegion] = useState({});
  const [deas, setDea] = useState([]);

  const getDEA = () => axios.get('/dea').then(res => setDea(res.data)).catch(error => console.log(error));

  useEffect(() => {
    (async () => {
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setMapRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.01922,
        longitudeDelta: 0.01421
      });
    })();

    getDEA();
  }, []);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaView style={styles.container}>
        <Search/>
        <MapView 
          style={styles.map}
          region={mapRegion}
          showsUserLocation={true}
        >
          <Map deas={deas} navigation={navigation}></Map>
        </MapView>
        {/*<Text>{Object.keys(usuario.usuario).length === 0 && usuario.usuario.constructor === Object?'Ciudadano':usuario.usuario.Nombre}</Text>
        {
          Object.keys(usuario.usuario).length === 0 && usuario.usuario.constructor === Object?
          <>
            <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate("Login")}><Text>Iniciar sesión</Text></TouchableOpacity>
            <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate("Register")}><Text>Registrarse</Text></TouchableOpacity>
          </>
          :
          <TouchableOpacity style={styles.boton} onPress={() => usuario.setUsuario({})}><Text>Cerrar sesión</Text></TouchableOpacity>
        }
      <Map deas={deas} navigation={navigation}></Map>*/}
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
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    marginTop: 25
  }
});

export default LocalizarDEA;
