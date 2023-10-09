import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Marker } from 'react-native-maps'

const DEA = ({navigation, idDea, latitud, longitud}) =>
{
    return (
        <Marker
            coordinate={{latitude: latitud, longitude: longitud}}
            style={styles.marker}
            onPress={() => navigation.navigate('InfoDEA', { id : idDea })}
        >
            <Image
                source={require('../assets/icono.png')}
                style={{width: 50, height: 50}}
                resizeMode="center"
                resizeMethod="resize"
            />
        </Marker>
    );
}

const styles = StyleSheet.create({
    
});

export default DEA;