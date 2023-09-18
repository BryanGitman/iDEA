import { useState, useContext } from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, TouchableOpacity } from "react-native";
import axios from "axios";
import UserContext from "../context/userContext";

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
      <TouchableOpacity onPress={handleLogin}><Text>Iniciar Sesion</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Register")}><Text>No tengo cuenta</Text></TouchableOpacity>
      <Text style={{ color: "red" }}>{msj}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Login;
