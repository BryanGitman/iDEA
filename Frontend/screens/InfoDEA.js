import axios from 'axios';
import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, View, ScrollView, Image, Text } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import AppLoading from 'expo-app-loading';
import NavInfo from '../components/NavInfo';
import FirstInfo from '../components/FirstInfo';
import Phone from '../components/Phone';
import Details from '../components/Details';
import DataH from '../components/DataH';

const InfoDEA = ({route, navigation}) => 
{
    const {id} = route.params;

    const [dea, setDea] = useState({});

    const getDEA = () => axios.get('/dea/' + id).then(res => setDea(res.data)).catch(error => console.log(error));
    
    getDEA();

    return(
        <SafeAreaView style={styles.container}>
            <NavInfo navigation={navigation}></NavInfo>
            <ScrollView style={{width: '100%'}}>
                <FirstInfo establecimiento={dea.Nombre} direccion={dea.Calle + " " + dea.Altura} descripcion={dea.Descripcion} coords={{latitude: dea.Latitud, longitude: dea.Longitud}}></FirstInfo>
                <Image style={styles.imagen} source={require('../assets/default.png')}/>
                <Phone telefono={dea.Telefono}></Phone>
                <View style={styles.line}></View>
                <Details ciudad={dea.Ciudad} pais={dea.Pais} codPostal={dea.CodigoPostal}></Details>
                <View style={styles.line}></View>
                <DataH descripcion="Situación" dato={dea.Accesibilidad === 1? "Interior" : "Exterior"}></DataH>
                <View style={styles.line}></View>
                <DataH descripcion="Disponibilidad" dato={dea.Disponibilidad}></DataH>
                <View style={styles.line}></View>
                <DataH descripcion="Comentarios" dato=""></DataH>
                <Text style={{margin: 20}}>{dea.Comentarios}</Text>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    imagen: {
        flex: 1,
        width: '100%',
        resizeMode: 'cover'
    },
    line: {
        width: '100%',
        height: 3,
        backgroundColor: '#00000040',
        alignSelf: 'center',
        marginVertical: 25,
        borderRadius: 10
    }
});

export default InfoDEA;