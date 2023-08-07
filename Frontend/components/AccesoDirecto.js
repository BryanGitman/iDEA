import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal, Platform, Linking } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AccesoDirecto = () => 
{
  const [modalVisibility, setModalVisibility] = useState(false);

  const checkIfNeedOpenModal = async () => {
    try {
      const isFirstOpen = await AsyncStorage.getItem('modal');
      if (!isFirstOpen || isFirstOpen !== 'true') {
        setModalVisibility(true);
      }
    } catch (error) {
      alert(error);
    }
  }

  const saveModalOpen = async () => {
    try {
      await AsyncStorage.setItem('modal', 'true');
    } catch (error) {
      alert(error);
    }
  }

  useEffect(() => 
  {
    checkIfNeedOpenModal();
  }, []);

  return (
    <Modal
      animationType='slide'
      onShow={saveModalOpen}
      transparent={true}
      visible={modalVisibility}
      onRequestClose={() => {
        setModalVisibility(!modalVisibility);
      }}
    >
      <View style={styles.modal}>
        <Text style={{fontSize: 20, flex: 1, margin: '10%', textAlign: 'center'}}>Agregá un acceso rápido a la aplicación en caso de emergencia</Text>
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Platform.OS==='ios'?Linking.openURL('app-settings:'):Linking.sendIntent('android.settings.SETTINGS')}
          >
            <Text style={{color: '#FFF'}}>Configuración</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.closeButton]}
            onPress={() => setModalVisibility(false)}
          >
            <Text style={{color: '#FFF'}}>Ahora no</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    position: 'absolute',
    top: '20%',
    left: '10%',
    width: '80%',
    height: '50%',
    backgroundColor: '#FFF',
    shadowColor: 'black',
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  footer: {
    justifyContent: "center",
    alignItems: "center",
    padding: '10%',
    flexDirection: "row"
  },
  button: {
    flex: 1,
    width: 80,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 70,
    backgroundColor: '#074496',
  },
  closeButton: {
    marginLeft: '3%',
    backgroundColor: 'grey'
  }
});

export default AccesoDirecto;
