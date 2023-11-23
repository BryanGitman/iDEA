import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import ModalEliminar from './ModalEliminar';

const MiDEA = ({idDEA, direccion, descripcion, navigation}) =>
{
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.ventana}>
      <TouchableOpacity style={styles.contenido} onPress={() => navigation.navigate('InfoDEA', { id : idDEA })}>
        <Text style={{fontSize: 22, paddingBottom: 10}}>{direccion}</Text>
        <Text style={{fontSize: 18}}>{descripcion}</Text>
      </TouchableOpacity>
      <View style={{flexDirection: 'col', justifyContent: 'center'}}>
        <TouchableOpacity style={{...styles.boton, backgroundColor: "#074496", marginBottom: 10}} onPress={() => navigation.navigate('EditarDEA', { id: idDEA })}><Text style={{ color: 'white', fontSize: 16 }}>Editar</Text></TouchableOpacity>
        <TouchableOpacity style={{...styles.boton, backgroundColor: "#F00"}} onPress={() => setModalVisible(true)}><Text style={{ color: 'white', fontSize: 16 }}>Eliminar</Text></TouchableOpacity>
        <ModalEliminar idDEA={idDEA} modalVisible={modalVisible} setModalVisible={setModalVisible} navigation={navigation}></ModalEliminar>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ventana: {
    flex: 1,
    flexDirection:'row',
    marginVertical: 20,
    marginHorizontal: 10,
    width: '90%',
    height: '15%',
    backgroundColor: '#FFF',
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: 'grey',
    shadowColor: "black",
    elevation: 5
  },
  contenido: {
    marginLeft: 25,
    marginRight: 15,
    marginVertical: 25,
    width: '60%'
  },
  boton: {
    width: 90,
    height: 43,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
  
export default MiDEA;