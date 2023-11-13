import { useContext } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import DEAHeader from '../components/DEAHeader';
import UserContext from "../context/userContext";

const MisDEA = ({ navigation }) => {
    const usuario = useContext(UserContext);
       
    return (
      <SafeAreaView style={styles.container}>
        <DEAHeader navigation={navigation} titulo="Mis DEA"></DEAHeader>
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
