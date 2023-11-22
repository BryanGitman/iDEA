import { useContext, useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import DEAHeader from '../components/DEAHeader';
import MiDEA from "../components/MiDEA";
import UserContext from "../context/userContext";
import axios from 'axios';

const MisDEA = ({ navigation }) => {
    const usuario = useContext(UserContext);
    
    const [misDea, setMisDea] = useState([]);

    const getDEA = () => axios.get('/misdea/' + usuario.Id).then(res => setMisDea(res.data)).catch(error => console.log(error));

    useEffect(() => {
      getDEA();
    }, []);

    return (
      <SafeAreaView style={styles.container}>
        <DEAHeader navigation={navigation} titulo="Mis DEA"></DEAHeader>
        <ScrollView style={{marginLeft: 20, width: '100%'}}>
          {misDea.map(dea => <MiDEA key={dea.Id} direccion={dea.Calle + " " + dea.Altura} descripcion={dea.Descripcion} navigation={navigation}></MiDEA>)}
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
