import React from 'react';
import { StyleSheet, Image, Pressable } from 'react-native';

const DEA = ({navigation, idDea}) =>
{
    return (
        <Pressable style={styles.container} onPress={() => navigation.navigate('infoDEA', { id : idDea })}>
            <Image
                style={styles.dea}
                source={require('../assets/icono.png')}
            />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width:'20%'
    },
    dea: {
        flex: 1,
        resizeMode: 'contain',
        width: '100%',
    }
});

export default DEA;