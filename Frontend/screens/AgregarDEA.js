import { useState, useContext, useMemo } from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, View, TouchableOpacity, ScrollView } from "react-native";
import RadioGroup from 'react-native-radio-buttons-group';
import axios from "axios";
import UserContext from "../context/userContext";
import BlueHeader from "../components/BlueHeader";

const AgregarDEA = ({ navigation }) => {
  const usuario = useContext(UserContext);

  const [calle, setCalle] = useState("");
  const [altura, setAltura] = useState('');
  const [ciudad, setCiudad] = useState("");
  const [pais, setPais] = useState("");
  const [codPostal, setCodPostal] = useState("");
  const [latitud, setLatitud] = useState('');
  const [longitud, setLongitud] = useState('');
  const [descripcion, setDescripcion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [accesibilidad, setAccesibilidad] = useState('');
  const [disponibilidad, setDisponibilidad] = useState("");
  const [msj, setMsj] = useState("");

  const handleChangeCalle = (text) => setCalle(text);
  const handleChangeAltura = (num) => setAltura(num);
  const handleChangeCiudad = (text) => setCiudad(text);
  const handleChangePais = (text) => setPais(text);
  const handleChangeCodPostal = (text) => setCodPostal(text);
  const handleChangeLatitud = (num) => setLatitud(num);
  const handleChangeLongitud = (num) => setLongitud(num);
  const handleChangeDescripcion = (text) => setDescripcion(text);
  const handleChangeTelefono = (text) => setTelefono(text);
  const handleChangeAccesibilidad = (num) => setAccesibilidad(num);
  const handleChangeDisponibilidad = (text) => setDisponibilidad(text);

  const handleAgregarDEA = () => {
    if (calle && altura && ciudad && pais && codPostal && latitud && longitud && descripcion && telefono && accesibilidad && disponibilidad) {
      axios
        .post("/dea", {
          DEA: {
            Descripcion: descripcion,
            Telefono: telefono,
            Accesibilidad: parseInt(accesibilidad, 10),
            Disponibilidad: disponibilidad
          },
          Ubicacion: {
              Calle: calle,
              Altura: parseInt(altura, 10),
              Ciudad: ciudad,
              Pais: pais,
              CodigoPostal: codPostal,
              Latitud: parseFloat(latitud),
              Longitud: parseFloat(longitud),
              IdEstablecimiento: usuario.usuario.Id
          }
        })
        .then(async (res) => {
          setMsj("");
          if (res.data.message == "DEA creado") {
            setCalle("");
            setAltura('');
            setCiudad("");
            setPais("");
            setCodPostal("");
            setLatitud('');
            setLongitud('');
            setDescripcion("");
            setTelefono("");
            setAccesibilidad('');
            setDisponibilidad("");
            navigation.navigate("MisDEA");
          } else {
            setMsj(res.data.message);
          }
        })
        .catch((error) => console.log(error));
    } else {
      setMsj("Completá todos los datos");
    }
  };

  const radioButtons = useMemo(() => ([
    {
        id: '1',
        label: 'Interior',
        value: 1
    },
    {
        id: '2',
        label: 'Exterior',
        value: 2
    }
  ]), []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{width: '100%'}} contentContainerStyle={{alignItems: 'center'}}>
        <BlueHeader navigation={navigation} titulo="Agregar DEA"></BlueHeader>
        <Text style={styles.subTitulo}>Ubicación</Text>
        <View style={{flexDirection: 'row'}}>
          <TextInput
            style={{...styles.input, width: 165}}
            onChangeText={handleChangeCalle}
            placeholder="Calle"
            value={calle}
            required
          />
          <TextInput
            style={{...styles.input, width: 165}}
            onChangeText={handleChangeAltura}
            placeholder="Altura"
            value={altura}
            keyboardType="numeric"
            required
          />
        </View>
        <TextInput
          style={styles.input}
          onChangeText={handleChangePais}
          placeholder="País"
          value={pais}
          required
        />
        <TextInput
          style={styles.input}
          onChangeText={handleChangeCiudad}
          placeholder="Ciudad"
          value={ciudad}
          required
        />
        <TextInput
          style={styles.input}
          onChangeText={handleChangeCodPostal}
          value={codPostal}
          placeholder="Código postal"
          required
        />
        <View style={{flexDirection: 'row'}}>
          <TextInput
            style={{...styles.input, width: 165}}
            onChangeText={handleChangeLatitud}
            placeholder="Latitud"
            value={latitud}
            keyboardType="numeric"
            required
          />
          <TextInput
            style={{...styles.input, width: 165}}
            onChangeText={handleChangeLongitud}
            placeholder="Longitud"
            value={longitud}
            keyboardType="numeric"
            required
          />
        </View>
        <Text style={styles.subTitulo}>Contacto</Text>
        <TextInput
          style={styles.input}
          onChangeText={handleChangeTelefono}
          value={telefono}
          placeholder="Teléfono"
          keyboardType="phone-pad"
          required
        />
        <Text style={styles.subTitulo}>Situación</Text>
        <RadioGroup 
          radioButtons={radioButtons} 
          onPress={handleChangeAccesibilidad}
          selectedId={accesibilidad}
          layout='row'
          containerStyle={{alignSelf: 'flex-start', marginLeft: 30, marginTop: 20}}
        />
        <Text style={styles.subTitulo}>Descripción detallada</Text>
        <TextInput
          style={styles.input}
          onChangeText={handleChangeDescripcion}
          value={descripcion}
          placeholder="Ej: Edificio 1, piso 2, al lado de coordinación."
          required
        />
        <Text style={styles.subTitulo}>Disponibilidad</Text>
        <TextInput
          style={styles.input}
          onChangeText={handleChangeDisponibilidad}
          value={disponibilidad}
          placeholder="Ej: Lunes a Viernes de 6:00 a 19:00"
          required
        />
        <Text style={{ color: "red" }}>{msj}</Text>
        <TouchableOpacity style={styles.save} onPress={handleAgregarDEA}><Text style={styles.text}>Agregar DEA</Text></TouchableOpacity>
      </ScrollView>
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
    width: 344,
    height: 50,
    margin: 6,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'grey'
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },
  save: {
    width: 300,
    paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#0A55B9',
    marginVertical: 50
  },
  subTitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#074496',
    marginTop: 20,
    marginLeft: 40,
    alignSelf: 'flex-start'
  }
});

export default AgregarDEA;