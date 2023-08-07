import React, {useState} from 'react';
import { StyleSheet, Image, Pressable } from 'react-native';
import BigHeader from './BigHeader';

const Header = ({navigation}) =>
{
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Pressable style={styles.header} onPress={() => setModalVisible(true)}>
      <Image
        style={styles.indexLogo}
        source={require('../assets/logo.png')}
      />
      <BigHeader modalVisible={modalVisible} setModalVisible={setModalVisible} navigation={navigation}></BigHeader>
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
  indexLogo: {
    flex: 1,
    resizeMode: 'contain',
    marginTop: '5%',
    width: '45%',
  }
});
  
export default Header;