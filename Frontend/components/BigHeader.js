import React, { useState } from 'react';
import { StyleSheet, Text, Image, Pressable, Modal } from 'react-native';

const BigHeader = ({modalVisible, setModalVisible, navigation}) =>
{
  const entrar = (cerrado) =>
  {
    navigation.navigate('Home');
    setModalVisible(cerrado);
  }
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <Pressable style={styles.background} onPress={() => setModalVisible(!modalVisible)}>
        <Pressable style={styles.bigHeader} onPress={() => entrar(!modalVisible)}>
          <Image
            style={styles.bigIndexLogo}
            source={require('../assets/logo.png')}
          />
          <Text style={{fontSize: 20, flex: 1, marginBottom: '-30%'}}>Presioná para ir a la aplicación</Text>
        </Pressable>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  bigHeader: {
    position: 'relative',
    width: '100%',
    height: '30%',
    backgroundColor: '#FFF',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bigIndexLogo: {
    flex: 1,
    resizeMode: 'contain',
    marginTop: '5%',
    width: '60%',
  },
  background: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.4)'
  }
});
  
export default BigHeader;