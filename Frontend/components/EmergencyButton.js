import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Platform, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const EmergencyButton = ({telefono = 107}) => {
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
        <Icon name="phone" size={25} color="#FFF" style={{alignSelf: 'flex-start'}}/>
        <Text>Llamá</Text>
    </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 92,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 13,
        backgroundColor: '#F00',
        flexDirection:'row',
    }
});

export default EmergencyButton;