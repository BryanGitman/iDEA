import { useContext } from 'react';
import { Text, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem} from "@react-navigation/drawer";
import UserContext from '../context/userContext';

const DrawerContent = ({navigation}) => {
    const usuario = useContext(UserContext);

    return (
        <DrawerContentScrollView>
            <Text style={styles.title}>
                {Object.keys(usuario.usuario).length === 0 && usuario.usuario.constructor === Object? 'Ciudadano' : usuario.usuario.Nombre}
            </Text>
            <DrawerItem style={styles.drawerItemStyle}
                label={() => <Text style={styles.text}>Emergencia</Text>}
                onPress={() => navigation.navigate('Emergencia')}
            />
            {
                Object.keys(usuario.usuario).length === 0 && usuario.usuario.constructor === Object?
                <>
                    <DrawerItem style={styles.drawerItemStyle}
                        label={() => <Text style={styles.text}>Registrarse</Text>}
                        onPress={() => navigation.navigate('Register')}
                    />
                    <DrawerItem style={styles.drawerItemStyle}
                        label={() => <Text style={styles.text}>Iniciar sesion</Text>}
                        onPress={() => navigation.navigate('Login')}
                    />
                </>
                :
                <>
                    <DrawerItem style={styles.drawerItemStyle}
                        label={() => <Text style={styles.text}>Agregar DEA</Text>}
                        onPress={() => navigation.navigate('AgregarDEA')}
                    />
                    <DrawerItem style={styles.drawerItemStyle}
                        label={() => <Text style={styles.text}>Mis DEA</Text>}
                        onPress={() => navigation.navigate('MisDEA')}
                    />
                    <DrawerItem style={styles.drawerItemStyle}
                        label={() => <Text style={styles.text}>Cerrar sesión</Text>}
                        onPress={() => usuario.setUsuario({})}
                    />
                </>
            }
        </DrawerContentScrollView>
    );
};

const styles = StyleSheet.create({
    drawerItemStyle: {
        width: 300,
        height: 60,
        borderRadius: 10,
        backgroundColor: "#0A55B9"
    },
    text: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: '5%'
    },
    title: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginBottom: '5%'
    }
});

export default DrawerContent;
