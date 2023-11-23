import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Modal, Pressable } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import axios from 'axios';

const ModalEliminar = ({ idDEA, modalVisible, setModalVisible, navigation }) => {
    const eliminarDEA = (cerrado) => {
        axios.delete('/dea/' + idDEA).then(() => {
            navigation.navigate("MisDEA");
            setModalVisible(cerrado);
        }).catch(error => console.log(error));
    }

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
                    <Text style={{ fontSize: 20, margin: "10%", textAlign: "center", fontWeight: 'bold' }}>¿Seguro deseas eliminar este DEA?</Text>
                    <TouchableOpacity style={styles.deleteButton} onPress={() => eliminarDEA(!modalVisible)}><Text style={{ color: "#FFF", fontSize: 20, fontWeight: 'bold' }}>Eliminar</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.cancelButton} onPress={() => setModalVisible(!modalVisible)}><Text style={{ color: "#074496", fontSize: 20, fontWeight: 'bold' }}>Cancelar</Text></TouchableOpacity>
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
        height: "45%",
        backgroundColor: "#FFF",
        shadowColor: "black",
        elevation: 5,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10
    },
    deleteButton: {
        width: 179,
        height: 60,
        borderRadius: 10,
        backgroundColor: "#F00",
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '10%'
    },
    cancelButton: {
        width: 179,
        height: 60,
        borderRadius: 10,
        backgroundColor: "#FFF",
        borderWidth: 2,
        borderColor: "#074496",
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

export default ModalEliminar;
