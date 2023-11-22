import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Ambulancia from 'react-native-vector-icons/FontAwesome5';

const EmergencyHeader = ({navigation}) => {
    return (
        <View style={styles.header}>
            <View style={styles.back}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}><Icon name="arrowleft" size={50} color="#000000" /></TouchableOpacity>
                <View style={{flexGrow: 1}}></View>
            </View>
            <Text style={styles.titulo}>Emergencia</Text>
            <Ambulancia style={{margin: '10%'}} name="ambulance" size={125} color='#FF0000'/>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        alignItems: 'center'
    },
    back: {
        marginTop: '10%',
        flexDirection: 'row',
        paddingLeft: '5%',
    },
    titulo: {
        color: '#FF0000',
        fontSize: 32,
        fontWeight: 'bold'
    }
});

export default EmergencyHeader;