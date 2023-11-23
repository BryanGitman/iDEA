import { useState, useContext } from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, View } from "react-native";
import axios from "axios";
import UserContext from "../context/userContext";
import UserHeader from "../components/UserHeader";
import UserFooter from "../components/UserFooter";

const Login = ({ navigation }) => {
  const usuario = useContext(UserContext);

  const [nombre, setNombre] = useState("");
  const [contra, setContra] = useState("");
  const [msj, setMsj] = useState("");

  const handleChangeNombre = (text) => setNombre(text);
  const handleChangeContra = (text) => setContra(text);

  const handleLogin = () => {
    axios
      .post("/login", {
        Nombre: nombre,
        Contraseña: contra,
      })
      .then(async (res) => {
        setMsj("");
        if (res.data.message == "Sesion iniciada correctamente") {
          setNombre("");
          setContra("");
          await usuario.getUsuario(nombre);
          navigation.navigate("Home");
        } else {
          setMsj(res.data.message);
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <SafeAreaView style={styles.container}>
      <UserHeader navigation={navigation} titulo="Iniciar sesión"></UserHeader>
      <TextInput
        style={styles.input}
        onChangeText={handleChangeNombre}
        placeholder="Nombre de la institución"
        value={nombre}
        required
      />
      <TextInput
        style={styles.input}
        onChangeText={handleChangeContra}
        value={contra}
        placeholder="Contraseña"
        secureTextEntry={true}
        required
      />
      <Text style={{ color: "#074496" }}>¿Te olvidaste de tu contraseña?</Text>
      <Text style={{ color: "red" }}>{msj}</Text>
      <View style={{flexGrow: 1}}></View>
      <UserFooter navigation={navigation} handle={handleLogin} screen="Register"></UserFooter>
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
  input: {
    width: 322,
    height: 50,
    margin: 12,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'grey'
  },
});

export default Login;
