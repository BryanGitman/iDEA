import React from 'react';
import { StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const GoButton = () =>
{
  return (
    <TouchableOpacity
      //onPress={}
      style={styles.container}>
      <Icon name="arrowright" size={45} color="#FFF" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 80,
    height: 80,
    position: 'absolute',
    right: -100,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: '#074496',
  }
});

export default GoButton;