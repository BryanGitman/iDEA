import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Platform, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Phone = ({telefono}) => {
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
        <View style={styles.seccion}>
            <TouchableOpacity 
                style={styles.container} 
                onPress={() => llamar()}
            >
                <Icon name="phone" size={25} color="#FFF" />
            </TouchableOpacity>
            <Text style={{fontSize: 20, paddingTop: 8, paddingLeft: 10}}>{telefono}</Text>
            <View style={{flexGrow: 1}}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    seccion: {
        flexDirection: 'row',
        marginTop: '5%',
    },
    container: {
        width: 45,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        backgroundColor: '#074496',
        marginLeft: '7%',
        alignSelf: 'flex-start'
    }
});

export default Phone;