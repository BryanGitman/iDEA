import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Platform, Linking } from 'react-native';
import Data from './Data';

const Details = ({ciudad, pais, codPostal}) => {
    return (
        <View style={styles.seccion}>
            <Data descripcion="Ciudad" dato={ciudad}></Data>
            <Data descripcion="Pais" dato={pais}></Data>
            <Data descripcion="Código postal" dato={codPostal}></Data>
        </View>
    );
}

const styles = StyleSheet.create({
    seccion: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Details;