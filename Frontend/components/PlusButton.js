import { useContext, useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import UserContext from '../context/userContext';
import ModalLogin from './ModalLogin';

const PlusButton = ({navigation}) => {
    const usuario = useContext(UserContext);

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View
            style={{
                position: 'absolute',
                bottom: 35,
                left: 40,
                alignSelf: 'flex-end',
                width: '20%'
            }}
        >
            <TouchableOpacity style={styles.nav} onPress={() => Object.keys(usuario.usuario).length === 0 && usuario.usuario.constructor === Object? setModalVisible(true) : navigation.navigate('AgregarDEA')}><Icon name="plus" size={55} color="#FFF"/></TouchableOpacity>
            <ModalLogin modalVisible={modalVisible} setModalVisible={setModalVisible} navigation={navigation}></ModalLogin>
        </View>
    );
}

const styles = StyleSheet.create({
    nav: {
        backgroundColor: "#074496",
        padding: 10,
        borderRadius: 100,
        width: 76,
        height: 76
    }
})

export default PlusButton;