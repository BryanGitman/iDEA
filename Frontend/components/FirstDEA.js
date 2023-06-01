import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import GoButton from './GoButton';

FirstDEA = ({direccion, establecimiento, descripcion}) =>
{
  return (
    <View style={styles.ventana}>
      <View style={styles.contenido}>
        <Text style={{fontSize: 28, paddingBottom: 10}}>{direccion}</Text>
        <Text style={{fontSize: 24, paddingBottom: 10}}>{establecimiento}</Text>
        <Text style={{fontSize: 20}}>{descripcion}</Text>
        <GoButton></GoButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ventana: {
    flex: 1,
    marginTop: 20,
    width: '95%',
    height: '25%',
    top: -30,
    backgroundColor: '#FFF',
    borderRadius: 10
  },
  contenido: {
    flex: 1,
    margin: 25,
    width: '60%'
  }
});
  
export default FirstDEA;