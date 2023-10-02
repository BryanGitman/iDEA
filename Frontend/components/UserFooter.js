import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';

const UserFooter = ({navigation, handle, screen}) => {
    return (
        <View style={styles.footer}>
            <TouchableOpacity onPress={handle}><Text>{screen === "Login" ? 'Registrarse' : 'Iniciar sesión'}</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(screen)}><Text>{screen === "Login" ? 'Ya tengo cuenta' : 'No tengo cuenta'}</Text></TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        justifyContent: 'flex-end'
    }
});

export default UserFooter;