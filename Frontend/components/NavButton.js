import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const NavButton = ({navigation}) => {
    return (
        <View
            style={{
                position: 'absolute',
                top: 35,
                alignSelf: 'flex-start',
                width: '20%'
            }}
        >
            <TouchableOpacity style={styles.nav} onPress={() => navigation.openDrawer()}><Icon name="menu" size={50} color="#FFF" style={{ marginTop: -5 }}/></TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    nav: {
        backgroundColor: "#074496",
        padding: 10,
        borderBottomEndRadius: 20,
        borderTopEndRadius: 20,
        width: 81,
        height: 58
    }
})

export default NavButton;