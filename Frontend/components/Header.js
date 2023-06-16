import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Header = () =>
{
  return (
    <View style={styles.header}>
      <Image
        style={styles.indexLogo}
        source={require('../assets/logo.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    position: 'relative',
    width: '100%',
    height: '15%',
    backgroundColor: '#FFF',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  indexLogo: {
    flex: 1,
    resizeMode: 'contain',
    marginTop: '5%',
    marginLeft: '27%',
    width: '45%',
  }
});
  
export default Header;