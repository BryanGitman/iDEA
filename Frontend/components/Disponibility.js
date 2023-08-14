import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { StyleSheet, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import DataH from './DataH';
import DisTable from './DisTable';

const Disponibility = ({id}) => {
    const [disponibilidad, setDisponibilidad] = useState([]);

    const getDisponibilidad = () => 
    {
        axios.get('/dea/disponibilidad/' + id).then(res => setDisponibilidad(res.data)).catch(error => console.log(error));
        setDisponibilidad(["hola","chau"]);
    }

    useEffect(() => 
    {

    }, [disponibilidad]);

    return (
        <>
            {
                disponibilidad?
                <View style={{flexDirection: 'row'}}>
                    <DataH descripcion="Disponibilidad" dato="ABIERTO" tColor="#128100"></DataH>
                    <View style={{flexGrow: 1}}></View>
                    <TouchableOpacity style={{marginRight:'10%'}} onPress={() => getDisponibilidad()}><Icon name="chevron-down" size={30} color="#000000" /></TouchableOpacity>
                </View>:<DisTable disponibilidad={disponibilidad} setDisponibilidad={setDisponibilidad}></DisTable>
            }
        </>
    );
}

const styles = StyleSheet.create({
    
});

export default Disponibility;