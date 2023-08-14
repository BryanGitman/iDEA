import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, View, ScrollView, Image } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import AppLoading from 'expo-app-loading';
import NavInfo from '../components/NavInfo';
import FirstInfo from '../components/FirstInfo';
import Phone from '../components/Phone';
import Details from '../components/Details';
import DataH from '../components/DataH';
import Disponibility from '../components/Disponibility';

const InfoDEA = ({route, navigation}) => 
{
    const id = route.params;

    const [dea, setDea] = useState({
        
        "Id": 1,
        "Calle": "Rio de Janeiro",
        "Altura": 509,
        "Ciudad": "Buenos Aires",
        "Pais": "ARG",
        "CodigoPostal": "C1405",
        "Descripcion": "Edificio 2, auditorio",
        "Telefono": "011 4883 9134",
        "Accesibilidad": "Interior",
        "Nombre": "Escuela Ort"
        
    });

    const getDEA = () => axios.get('/dea/' + id).then(res => setDea(res.data)).catch(error => console.log(error));

    useEffect(() => 
    {
        getDEA();
    }, []);

    return(
        <SafeAreaView style={styles.container}>
            <NavInfo navigation={navigation}></NavInfo>
            <ScrollView style={{width: '100%'}}>
                <FirstInfo establecimiento={dea.Nombre} direccion={dea.Calle + " " + dea.Altura} descripcion={dea.Descripcion}></FirstInfo>
                <Image style={styles.imagen} source={require(`../assets/riodj.png`)}/>
                <Phone telefono={dea.Telefono}></Phone>
                <View style={styles.line}></View>
                <Details ciudad={dea.Ciudad} pais={dea.Pais} codPostal={dea.CodigoPostal}></Details>
                <View style={styles.line}></View>
                <DataH descripcion="Situación" dato={dea.Accesibilidad}></DataH>
                <View style={styles.line}></View>
                <Disponibility id={id}></Disponibility>
                <View style={styles.line}></View>
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