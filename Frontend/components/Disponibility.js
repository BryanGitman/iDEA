import React from 'react';
import { StyleSheet, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import DataH from './DataH';

const Disponibility = ({disponibilidad, getDisponibilidad}) => {
    const mostrarDisponibilidad = () =>
    {
        getDisponibilidad();
    }

    return (
        <View style={{flexDirection: 'row'}}>
            <DataH descripcion="Disponibilidad" dato="ABIERTO" tColor="#128100"></DataH>
            <View style={{flexGrow: 1}}></View>
            <TouchableOpacity style={{marginRight:'10%'}} onPress={() => mostrarDisponibilidad()}><Icon name="chevron-down" size={30} color="#000000" /></TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    
});

export default Disponibility;