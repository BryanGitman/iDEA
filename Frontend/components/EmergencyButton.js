import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Platform, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const EmergencyButton = ({telefono}) => {
    const llamar = () =>
    {
        if(Platform.OS==='ios')
        {
            Linking.openURL(`telprompt:${telefono}`);
        }
        else{
            Linking.openURL(`tel:${telefono}`)
        }
    }

    return (
        <TouchableOpacity 
            style={styles.container} 
            onPress={() => llamar()}
        >
            <Icon name="phone" size={30} color="#FFF" style={{marginStart: '15%'}}/>
            <Text style={styles.text}>Llamá</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 92,
        alignItems: 'center',
        borderRadius: 13,
        backgroundColor: '#F00',
        flexDirection:'row',
    },
    text: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginStart: '17%'
    }
});

export default EmergencyButton;