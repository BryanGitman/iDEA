import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const DEAHeader = ({navigation, logo}) => {
    return (
        <View style={styles.header}>
            <View style={styles.back}>
                <TouchableOpacity onPress={() => navigation.goBack()}><Icon name="arrowleft" size={50} color="#000000" /></TouchableOpacity>
                <View style={{flexGrow: 1}}></View>
            </View>
            <Text style={styles.titulo}>Mis Dea</Text>
            <Image
                style={styles.logo}
                source={require('../assets/ort.jpg')}
            />
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
        color: '#074496',
        fontSize: 32,
        fontWeight: 'bold'
    },
    logo: {
        resizeMode: 'contain',
        width: 178,
        height: 178
    }
});

export default DEAHeader;