import React from 'react';
import { StyleSheet, View, Text} from 'react-native';

const DataH = ({descripcion, dato, tColor = "black"}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.descripcion}>{descripcion}</Text>
            <Text style={{fontSize: 16, paddingLeft: '5%', color: tColor}}>{dato}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingLeft: '8%'
    },
    descripcion: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#074496'
    }
});

export default DataH;