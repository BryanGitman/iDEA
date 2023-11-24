import React from 'react';
import { StyleSheet, TouchableOpacity, Linking} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const GoButton = ({coords}) =>
{
  return (
    <TouchableOpacity
      onPress={() => Linking.openURL(`https://www.google.com/maps/dir/?api=1&destination=${coords.latitude},${coords.longitude}&travelmode=walking`)}
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