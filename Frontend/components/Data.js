import React from 'react';
import { StyleSheet, View, Text} from 'react-native';

const Data = ({descripcion, dato}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.descripcion}>{descripcion}</Text>
            <Text style={{fontSize: 16}}>{dato}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        marginHorizontal: '5%'
    },
    descripcion: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#074496'
    }
});

export default Data;