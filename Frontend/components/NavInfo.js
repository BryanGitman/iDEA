import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import IconE from 'react-native-vector-icons/Entypo';
import IconA from 'react-native-vector-icons/AntDesign';

const NavInfo = ({navigation}) => {
    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}><IconE name="chevron-down" size={50} color="#000000" /></TouchableOpacity>
            <View style={{flexGrow: 1}}></View>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}><IconA name="search1" size={45} color="#000000" style={{marginRight: '5%'}} /></TouchableOpacity>
            <TouchableOpacity><IconE name="warning" size={45} color="#000000" /></TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        marginTop: '5%',
        flexDirection: 'row',
        padding: '5%',
    }
});

export default NavInfo;