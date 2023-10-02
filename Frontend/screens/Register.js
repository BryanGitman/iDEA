import { useState, useContext } from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, TouchableOpacity } from "react-native";
import axios from "axios";
import UserContext from "../context/userContext";
import UserHeader from "../components/UserHeader";
import UserFooter from "../components/UserFooter";

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
          CUIT: CUIT
        })
        .then(async (res) => {
          setMsj("");
          if (res.data.message == "Usuario creado") {
            await usuario.getUsuario(nombre);
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
      <Text style={{ color: "#074496" }}>¿Te olvidaste de tu contraseña?</Text>
      <Text style={{ color: "red" }}>{msj}</Text>
      <UserFooter navigation={navigation} handle={handleRegister} screen="Login"></UserFooter>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'flex-start'
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

export default Register;
