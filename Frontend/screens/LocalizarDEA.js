import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import * as Location from 'expo-location';

const LocalizarDEA = ({navigation}) => 
{
  const [location, setLocation] = useState(null);
  const [firstDeas, setFirstDea] = useState([]);

  const config = {
    headers:{
      UserLocation: location,
    }
  };

  const getDEA = () => axios.get('/dea', config).then(res => setFirstDea(res.data)).catch(error => console.log(error));

  useEffect(() => {
    (async () => {
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();

    getDEA();
  }, []);

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
    justifyContent: 'center'
  }
});

export default LocalizarDEA;
