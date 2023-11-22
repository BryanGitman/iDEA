import { createDrawerNavigator } from "@react-navigation/drawer";
import { useNavigation } from '@react-navigation/native';
import DrawerContent from "./DrawerContent";
import PrimeraPantalla from '../screens/PrimeraPantalla';
import LocalizarDEA from '../screens/LocalizarDEA';
import InfoDEA from '../screens/InfoDEA';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Emergencia from '../screens/Emergencia';
import MisDEA from '../screens/MisDEA';
import AgregarDEA from '../screens/AgregarDEA';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  const navigation = useNavigation();

  return (
    <Drawer.Navigator
      initialRouteName="Index"
      drawerContent={() => <DrawerContent navigation={navigation} />}
      screenOptions={{
        drawerStyle: {
          marginTop: 35,
          backgroundColor: "#074496",
          width: 320,
          height: 380,
          borderBottomEndRadius: 20,
        },
        swipeEnabled: false,
        headerShown: false
      }}
    >
      <Drawer.Screen name="Index" component={PrimeraPantalla} />
      <Drawer.Screen name="Home" component={LocalizarDEA} />
      <Drawer.Screen name="InfoDEA" component={InfoDEA} />
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="Register" component={Register} />
      <Drawer.Screen name="Emergencia" component={Emergencia} />
      <Drawer.Screen name="MisDEA" component={MisDEA} />
      <Drawer.Screen name="AgregarDEA" component={AgregarDEA} />
    </Drawer.Navigator>
  );
};

export default DrawerNav;
