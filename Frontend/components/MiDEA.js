import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const MiDEA = ({key, direccion, descripcion, navigation}) =>
{
  return (
    <View style={styles.ventana}>
      <View style={styles.contenido}>
        <Text style={{fontSize: 28, paddingBottom: 10}}>{direccion}</Text>
        <Text style={{fontSize: 20}}>{descripcion}</Text>
      </View>
      <TouchableOpacity></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  ventana: {
    flex: 1,
    flexDirection:'row',
    marginBottom: 15,
    width: '95%',
    height: '15%',
    backgroundColor: '#FFF',
    borderRadius: 10
  },
  contenido: {
    flex: 1,
    margin: 25,
    width: '60%'
  }
});
  
export default MiDEA;