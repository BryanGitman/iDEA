import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Dimensions } from 'react-native';

const { width : SCREEN_WIDTH } = Dimensions.get('window');

const UserFooter = ({navigation, handle, screen}) => {
    return (
        <View style={{alignItems: 'center'}}>
            <TouchableOpacity style={styles.save} onPress={handle}><Text style={styles.text}>{screen === "Login" ? 'Registrarse' : 'Iniciar sesión'}</Text></TouchableOpacity>
            <TouchableOpacity style={styles.change} onPress={() => navigation.navigate(screen)}><Text style={styles.text}>{screen === "Login" ? 'Ya tengo cuenta' : 'No tengo cuenta'}</Text></TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    save: {
        width: 300,
        paddingVertical: 12,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#0A55B9',
        marginBottom: 148
    },
    change: {
        width: SCREEN_WIDTH,
        height: 52,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        backgroundColor: '#074496'
    },
    text: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    }
});

export default UserFooter;