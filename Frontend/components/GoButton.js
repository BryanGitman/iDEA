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
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: '#074496',
    marginRight: '7%',
    marginBottom: '7%',
    alignSelf: 'flex-end'
  }
});

export default GoButton;