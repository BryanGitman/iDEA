import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import GoButton from './GoButton';

const FirstDEA = ({direccion, establecimiento, descripcion, navigation}) =>
{
  return (
    <View style={styles.ventana}>
      <View style={styles.contenido}>
        <Text style={{fontSize: 28, paddingBottom: 10}}>{direccion}</Text>
        <Text style={{fontSize: 24, paddingBottom: 10}}>{establecimiento}</Text>
        <Text style={{fontSize: 20}}>{descripcion}</Text>
      </View>
      <GoButton navigation={navigation}></GoButton>
    </View>
  );
}

const styles = StyleSheet.create({
  ventana: {
    flex: 1,
    flexDirection:'row',
    marginBottom: 15,
    width: '95%',
    height: '25%',
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