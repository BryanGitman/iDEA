import { useContext, useState, useCallback } from "react";
import { useFocusEffect } from '@react-navigation/native';
import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import BlueHeader from '../components/BlueHeader';
import MiDEA from "../components/MiDEA";
import UserContext from "../context/userContext";
import axios from 'axios';

const MisDEA = ({ navigation }) => {
    const usuario = useContext(UserContext);
    
    const [misDea, setMisDea] = useState([]);

    const getDEA = () => axios.get('/misdea/' + usuario.usuario.Id).then(res => setMisDea(res.data)).catch(error => console.log(error));

    useFocusEffect(
      useCallback(() => {
        getDEA();
      }, [])
    );

    return (
      <SafeAreaView style={styles.container}>
        <BlueHeader navigation={navigation} titulo="Mis DEA"></BlueHeader>
        <ScrollView style={{marginLeft: 20, marginTop: 20, width: '100%'}}>
          {misDea.map(dea => <MiDEA key={dea.Id} idDEA={dea.Id} direccion={dea.Calle + " " + dea.Altura} descripcion={dea.Descripcion} navigation={navigation}></MiDEA>)}
        </ScrollView>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF',
      alignItems: 'center',
      justifyContent: 'flex-start',
      flexDirection: 'column'
    }
});

export default MisDEA;
