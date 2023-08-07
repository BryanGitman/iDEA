import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import AppLoading from 'expo-app-loading';
import IconE from 'react-native-vector-icons/Entypo';
import IconA from 'react-native-vector-icons/AntDesign';

const InfoDEA = ({navigation, id}) => 
{
    const [dea, setDea] = useState([]);
    const [disponibilidad, setDisponibilidad] = useState([]);

    const getDEA = () => axios.get('/dea/' + id).then(res => setDea(res.data)).catch(error => console.log(error));

    const getDisponibilidad = () => axios.get('/dea/disponibilidad/' + id).then(res => setDisponibilidad(res.data)).catch(error => console.log(error));

    useEffect(() => 
    {
        getDEA();
    }, []);

    return(
        <SafeAreaView style={styles.container}>
            <TouchableOpacity><IconE name="chevron-down" size={45} color="#000000" /></TouchableOpacity>
            <TouchableOpacity><IconA name="search1" size={45} color="#000000" /></TouchableOpacity>
            <TouchableOpacity><IconE name="warning" size={45} color="#000000" /></TouchableOpacity>
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

export default InfoDEA;