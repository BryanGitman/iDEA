import { useContext } from 'react';
import { Text } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem, useDrawerProgress } from "@react-navigation/drawer";
import Animated , { interpolate } from 'react-native-reanimated';
import UserContext from '../context/userContext';

const DrawerContent = ({navigation}) => {
    const usuario = useContext(UserContext);

    const progress = useDrawerProgress();

    const translateX = interpolate(progress, {
        inputRange: [0, 1],
        outputRange: [-100, 0],
    });

    return (
        <Animated.View style={{ transform: [{ translateX }] }}>
            <DrawerContentScrollView>
                <DrawerItemList />
                <DrawerItem
                    label={() => <Text style={{ color: 'white' }}>Emergencia</Text>}
                    onPress={() => navigation.navigate('Emergencia')}
                />
                {
                    !usuario.usuario?
                    <>
                        <DrawerItem
                            label={() => <Text style={{ color: 'white' }}>Registrarse</Text>}
                            onPress={() => navigation.navigate('Register')}
                        />
                        <DrawerItem
                            label={() => <Text style={{ color: 'white' }}>Iniciar sesion</Text>}
                            onPress={() => navigation.navigate('Login')}
                        />
                    </>
                    :
                    <>
                        <DrawerItem
                            label={() => <Text style={{ color: 'white' }}>Agregar DEA</Text>}
                            onPress={() => navigation.navigate('AgregarDEA')}
                        />
                        <DrawerItem
                            label={() => <Text style={{ color: 'white' }}>Mis DEA</Text>}
                            onPress={() => navigation.navigate('MisDEA')}
                        />
                        <DrawerItem
                            label={() => <Text style={{ color: 'white' }}>Cerrar sesión</Text>}
                            onPress={() => usuario.setUsuario({})}
                        />
                    </>
                }
            </DrawerContentScrollView>
        </Animated.View>
    );
};

export default DrawerContent;
