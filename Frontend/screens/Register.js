import { useState, useContext } from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, TouchableOpacity } from "react-native";
import axios from "axios";
import UserContext from "../context/userContext";

const Register = ({ navigation }) => {
  const usuario = useContext(UserContext);

  const [mail, setMail] = useState("");
  const [contra, setContra] = useState("");
  const [nombre, setNombre] = useState("");
  const [foto, setFoto] = useState("foto");
  const [CUIT, setCUIT] = useState("");
  const [msj, setMsj] = useState("");

  const handleChangeMail = (text) => setMail(text);
  const handleChangeContra = (text) => setContra(text);
  const handleChangeNombre = (text) => setNombre(text);
  const handleChangeCUIT = (text) => setCUIT(text);

  const handleRegister = () => {
    if (mail && contra && nombre && CUIT) {
      axios
        .post("/register", {
          Mail: mail,
          Contraseña: contra,
          Nombre: nombre,
          FotoPerfil: foto,
        })
        .then(async (res) => {
          setMsj("");
          if (res.data.message == "Usuario creado") {
            await usuario.getUsuario(user);
            navigation.navigate("Home");
          } else {
            setMsj(res.data.message);
          }
        })
        .catch((error) => console.log(error));
    } else {
      setMsj("Completá todos los datos");
    }
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
        onChangeText={handleChangeCUIT}
        placeholder="CUIT"
        value={CUIT}
        required
      />
      <TextInput
        style={styles.input}
        onChangeText={handleChangeMail}
        placeholder="Mail"
        value={mail}
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
      <TouchableOpacity onPress={handleRegister}><Text>Registrarse</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}><Text>Ya tengo cuenta</Text></TouchableOpacity>
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

export default Register;
