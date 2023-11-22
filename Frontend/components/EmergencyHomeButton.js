import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Ambulancia from 'react-native-vector-icons/FontAwesome5';

const EmergencyHomeButton = ({navigation}) => {
    return (
        <View
            style={{
                position: 'absolute',
                bottom: 35,
                right: 40,
                alignSelf: 'flex-end',
                width: '20%'
            }}
        >
            <TouchableOpacity style={styles.nav} onPress={() => navigation.navigate('Emergencia')}><Ambulancia name="ambulance" size={40} color="#FFF" style={{ margin: 5 }}/></TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    nav: {
        backgroundColor: "#F00",
        padding: 10,
        borderRadius: 100,
        width: 76,
        height: 76
    }
})

export default EmergencyHomeButton;