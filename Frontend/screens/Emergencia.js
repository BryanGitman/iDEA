import { StyleSheet, SafeAreaView, Text, Image, View } from "react-native";
import EmergencyHeader from "../components/EmergencyHeader";
import EmergencyButton from "../components/EmergencyButton";

const Emergencia = ({ navigation }) => {
        return (
        <SafeAreaView style={styles.container}>
            <EmergencyHeader navigation={navigation}></EmergencyHeader>
            <Text>Comunicate con los servicios de emergencia</Text>
            <View style={{flexDirection: 'row', margin:30}}>
                <Image
                    style={styles.bandera}
                    source={require('../assets/argentina.png')}
                />
                <Text>107</Text>
            </View>
            <EmergencyButton></EmergencyButton>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'column'
    },
    bandera:{
        resizeMode: 'contain',
        width: 20,
        height: 20,
        marginRight: 10,
    },
});

export default Emergencia;
