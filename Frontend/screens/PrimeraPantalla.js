import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Modal, Platform, Linking } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AndroidOpenSettings from 'react-native-android-open-settings';
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

  const [firstDeas, setFirstDea] = useState([
    {
        "Id": 4,
        "Descripcion": "Edificio 1, planta baja al lado de las escaleras",
        "Calle": "Yatay",
        "Altura": 240,
        "Nombre": "Escuela Ort"
    },
    {
        "Id": 5,
        "Descripcion": "Edificio 1, piso 2, al lado de coordinacion",
        "Calle": "Yatay",
        "Altura": 240,
        "Nombre": "Escuela Ort"
    },
    {
        "Id": 1,
        "Descripcion": "Edificio 2, auditorio",
        "Calle": "Rio de Janeiro",
        "Altura": 509,
        "Nombre": "Escuela Ort"
    }
]);

  const config = {
    data:{
      UserLocation: location,
    }
  };

  const getDEA = () => axios.get('/firstdea', config).then(res => setFirstDea(res.data)).catch(error => console.log(error));

  const [modalVisibility, setModalVisibility] = useState(true);

  const checkIfNeedOpenModal = async () => {
    try {
      const isFirstOpen = await AsyncStorage.getItem('modal');
      if (!isFirstOpen || isFirstOpen !== 'true') {
        setModalVisibility(true);
      }
    } catch (error) {
      alert(error);
    }
  }

  const saveModalOpen = async () => {
    try {
      await AsyncStorage.setItem('modal', 'true');
    } catch (error) {
      alert(error);
    }
  }

  const onModalShow = () => {
    saveModalOpen();
  }

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

    checkIfNeedOpenModal();

    getDEA();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation}></Header>
      <Text style={{margin: '3%', fontWeight: 'bold', color: '#FFF', fontSize: 17}}>MÁS CERCANOS:</Text>
      <List deas={firstDeas}></List>

      <Modal
        animationType='slide'
        onShow={saveModalOpen}
        transparent={true}
        visible={modalVisibility}
        onRequestClose={() => {
            alert('closed');
        }}
      >
        <View style={styles.modal}>
          <Text style={{fontSize: 20, flex: 1, margin: '10%', textAlign: 'center'}}>Agregá un acceso rápido a la aplicación en caso de emergencia</Text>
          <View style={styles.footer}>
            <Button
              title="Configuración"
              onPress={() => Platform.OS==='ios'?Linking.openURL('app-settings:'):Linking.sendIntent('android.settings.SETTINGS')}
            />
            <Button
              style={{backgroundColor: 'grey', marginLeft: '1%'}}
              title="Ahora no"
              onPress={() => setModalVisibility(false)}
            />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF0000',
    alignItems: 'center',
    justifyContent: 'center'
  },
  modal: {
    position: 'absolute',
    top: '20%',
    left: '10%',
    width: '80%',
    height: '50%',
    backgroundColor: '#FFF',
    shadowColor: 'black',
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  footer: {
    justifyContent: "center",
    alignItems: "center",
    padding: '10%',
    flexDirection: "row"
  }
});

export default PrimeraPantalla;
