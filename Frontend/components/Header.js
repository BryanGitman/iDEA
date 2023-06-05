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
    position: 'absolute',
    width: '100%',
    height: '15%',
    left: 0,
    top: 0,
    backgroundColor: '#FFF',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  indexLogo: {
    flex: 1,
    resizeMode: 'contain',
    marginTop: '3%',
    marginLeft: '27%',
    width: '45%',
  }
});
  
export default Header;