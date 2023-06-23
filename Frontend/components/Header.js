import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable, Modal } from 'react-native';

const Header = ({navigation}) =>
{
  const [modalVisible, setModalVisible] = useState(false);

  const entrar = (cerrado) =>
  {
    navigation.navigate('Home');
    setModalVisible(cerrado);
  }
  return (
    <Pressable style={styles.header} onPress={() => setModalVisible(true)}>
      <Image
        style={styles.indexLogo}
        source={require('../assets/logo.png')}
      />
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <Pressable style={styles.bigHeader} onPress={() => entrar(!modalVisible)}>
          <Image
            style={styles.bigIndexLogo}
            source={require('../assets/logo.png')}
          />
          <Text style={{fontSize: 20, flex: 1, marginBottom: '-30%'}}>Presioná para ir a la aplicación</Text>
        </Pressable>
      </Modal>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  header: {
    position: 'relative',
    width: '100%',
    height: '15%',
    backgroundColor: '#FFF',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bigHeader: {
    position: 'relative',
    width: '100%',
    height: '35%',
    backgroundColor: '#FFF',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  indexLogo: {
    flex: 1,
    resizeMode: 'contain',
    marginTop: '5%',
    width: '45%',
  },
  bigIndexLogo: {
    flex: 1,
    resizeMode: 'contain',
    marginTop: '5%',
    width: '60%',
  }
});
  
export default Header;