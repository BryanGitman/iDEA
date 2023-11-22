import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Modal, Pressable } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';

const ModalLogin = ({ modalVisible, setModalVisible, navigation }) => {
    const iniciarSesion = (cerrado) => {
        navigation.navigate("Login");
        setModalVisible(cerrado);
    };

    const registrarse = (cerrado) => {
        navigation.navigate("Register");
        setModalVisible(cerrado);
    };

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}
        >
            <Pressable style={styles.background} onPress={() => setModalVisible(!modalVisible)}>
                <View style={styles.modal}>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ flexGrow: 1 }}></View>
                        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}><Icon style={styles.exit} name="close" size={30} color="#000000" /></TouchableOpacity>
                    </View>
                    <Text style={{ fontSize: 20, margin: "10%", textAlign: "center", fontWeight: 'bold' }}>Para agregar un DEA, tenés que ser directivo de alguna institución o establecimiento</Text>
                    <Text style={{ fontSize: 20, margin: "10%", textAlign: "center" }}>Si este es tu caso,</Text>
                    <TouchableOpacity style={styles.button} onPress={() => iniciarSesion(!modalVisible)}><Text style={{ color: "#FFF", fontSize: 20, fontWeight: 'bold' }}>Iniciar sesion</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => registrarse(!modalVisible)}><Text style={{ color: "#FFF", fontSize: 20, fontWeight: 'bold' }}>Registrarse</Text></TouchableOpacity>
                </View>
            </Pressable>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        position: "absolute",
        top: "20%",
        left: "10%",
        width: "80%",
        height: "60%",
        backgroundColor: "#FFF",
        shadowColor: "black",
        elevation: 5,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10
    },
    button: {
        width: 244,
        height: 60,
        borderRadius: 10,
        backgroundColor: "#0A55B9",
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '10%'
    },
    closeButton: {
        marginLeft: "3%",
        backgroundColor: "grey",
    },
    exit: {
        alignSelf: "flex-end",
        paddingLeft: 5,
        paddingRight: 5,
        margin: 10,
    },
    background: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0.4)'
    }
});

export default ModalLogin;
