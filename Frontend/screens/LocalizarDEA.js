import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import Map from '../components/Map';
import * as Location from 'expo-location';
import MapLibreGL from '@rnmapbox/maps';

const LocalizarDEA = ({navigation}) => 
{
  const [location, setLocation] = useState(null);
  const [deas, setDea] = useState([{"Id":4,"Descripcion":"Edificio 1, planta baja al lado de las escaleras","Calle":"Yatay","Altura":240,"Nombre":"Escuela Ort", "Latitud":-34.609952548530885, "Longitud":-58.42916481268707},{"Id":5,"Descripcion":"Edificio 1, piso 2, al lado de coordinacion","Calle":"Yatay","Altura":240,"Nombre":"Escuela Ort", "Latitud":-34.609952548530885, "Longitud":-58.42916481268707},{"Id":1,"Descripcion":"Edificio 2, auditorio","Calle":"Rio de Janeiro","Altura":509,"Nombre":"Escuela Ort", "Latitud":-34.609850400010252, "Longitud":-58.430048464633586}]);

  const getDEA = () => axios.get('/dea').then(res => setDea(res.data)).catch(error => console.log(error));

  useEffect(() => {
    (async () => {
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();

    getDEA();
  }, []);

  /*function cargarMapa(location) {
    maptilersdk.config.apiKey = 'fEiqmpW3iwff7X3070kV';
    const map = new maptilersdk.Map({
      container: 'map',
      style: maptilersdk.MapStyle.STREETS,
      center: [location.coords.longitude, location.coords.latitude],
      zoom: 18,
    });
    
    setMarkers(map);
  }
  
  function setMarkers(map) {
    deas.map(dea => {
      new maptilersdk.Marker()
        .setLngLat([dea.Longitud, dea.Latitud])
        .addTo(map);
    });
  }*/

  MapLibreGL.setWellKnownTileServer(MapLibreGL.TileServers.MapLibre);
  MapLibreGL.setAccessToken(null);

  const MAPTILER_API_KEY = "fEiqmpW3iwff7X3070kV";

  return (
    //cargarMapa(location)
    /*<SafeAreaView style={styles.container}>
      <Text>*mapa*</Text>
      <Map deas={deas} navigation={navigation}></Map>
    </SafeAreaView>*/
    <SafeAreaView style={styles.container}>
      <MapLibreGL.MapView
          style={styles.map}
          styleURL={`https://api.maptiler.com/maps/streets-v2/style.json?key=${MAPTILER_API_KEY}`}
          logoEnabled={false}
          attributionPosition={{bottom: 8, right: 8}}>
          <MapLibreGL.Camera
            defaultSettings={{centerCoordinate: [location.coords.longitude, location.coords.latitude], zoomLevel: 18}}
          />
      </MapLibreGL.MapView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  map: {
    flex: 1,
  }
});

export default LocalizarDEA;
