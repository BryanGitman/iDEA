import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const DEAHeader = ({navigation}) => {
    return (
        <View style={styles.header}>
            <View style={styles.back}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}><Icon name="arrowleft" size={50} color="#000000" /></TouchableOpacity>
                <View style={{flexGrow: 1}}></View>
            </View>
            <Text style={styles.titulo}>Mis Dea</Text>
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
    }
});

export default DEAHeader;