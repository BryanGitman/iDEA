import React from 'react';
import GoButton from './GoButton';
import { StyleSheet, Text, View} from 'react-native';

const FirstInfo = ({direccion, establecimiento, descripcion, navigation}) =>
{
  return (
    <View style={styles.ventana}>
      <View style={styles.contenido}>
        <Text style={{fontSize: 24, paddingBottom: 10}}>{establecimiento}</Text>
        <Text style={{fontSize: 20, paddingBottom: 10}}>{direccion}</Text>
        <Text style={{fontSize: 20}}>{descripcion}</Text>
      </View>
      <GoButton navigation={navigation}></GoButton>
    </View>
  );
}

const styles = StyleSheet.create({
  ventana: {
    marginTop: -30,
    width: '100%',
    height: '17%',
    flexDirection: 'row',
    marginBottom: '5%'
  },
  contenido: {
    flex: 1,
    margin: '8%',
    width: '85%'
  }
});
 
export default FirstInfo;


