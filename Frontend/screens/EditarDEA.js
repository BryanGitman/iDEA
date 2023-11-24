import { useState, useMemo, useCallback } from "react";
import { useFocusEffect } from '@react-navigation/native';
import { SafeAreaView, StyleSheet, TextInput, Text, View, TouchableOpacity, ScrollView } from "react-native";
import RadioGroup from 'react-native-radio-buttons-group';
import axios from "axios";
import BlueHeader from "../components/BlueHeader";

const EditarDEA = ({ route, navigation }) => {
  const {id} = route.params;

  const [dea, setDea] = useState({});

  const [descripcion, setDescripcion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [accesibilidad, setAccesibilidad] = useState('');
  const [disponibilidad, setDisponibilidad] = useState("");
  const [msj, setMsj] = useState("");

  const getDEA = () => {
    axios.get('/dea/' + id).then(res => {
      setDea(res.data);
      mostrarDatos(dea);
    }).catch(error => console.log(error));
  }
  
  useFocusEffect(
    useCallback(() => {
      getDEA();
    }, [])
  );

  const mostrarDatos = dea => {
    setDescripcion(dea.Descripcion);
    setTelefono(dea.Telefono);
    setAccesibilidad(dea.Accesibilidad);
    setDisponibilidad(dea.Disponibilidad);
  }

  const handleChangeDescripcion = (text) => setDescripcion(text);
  const handleChangeTelefono = (text) => setTelefono(text);
  const handleChangeAccesibilidad = (num) => setAccesibilidad(num);
  const handleChangeDisponibilidad = (text) => setDisponibilidad(text);

  const handleEditarDEA = () => {
    if (descripcion && telefono && accesibilidad && disponibilidad) {
      axios
        .put("/dea/" + id, {
          Id: id,
          Descripcion: descripcion,
          Telefono: telefono,
          Accesibilidad: parseInt(accesibilidad, 10),
          Disponibilidad: disponibilidad
        })
        .then(async (res) => {
          setMsj("");
          if (res.data.message == "DEA actualizado") {
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
        <BlueHeader navigation={navigation} titulo="Editar DEA"></BlueHeader>
        <Text style={styles.subTitulo}>Ubicación</Text>
        <Text style={styles.info}>(Para editarla, es necesario eliminar el DEA y crear uno nuevo)</Text>
        <View style={{flexDirection: 'row'}}>
          <TextInput
            style={{...styles.input, width: 165}}
            placeholder="Calle"
            value={dea.Calle}
            editable={false}
          />
          <TextInput
            style={{...styles.input, width: 165}}
            placeholder="Altura"
            value={dea.Altura?.toString()}
            keyboardType="numeric"
            editable={false}
          />
        </View>
        <TextInput
          style={styles.input}
          placeholder="País"
          value={dea.Pais}
          editable={false}
        />
        <TextInput
          style={styles.input}
          placeholder="Ciudad"
          value={dea.Ciudad}
          editable={false}
        />
        <TextInput
          style={styles.input}
          value={dea.CodigoPostal}
          placeholder="Código postal"
          editable={false}
        />
        <View style={{flexDirection: 'row'}}>
          <TextInput
            style={{...styles.input, width: 165}}
            placeholder="Latitud"
            value={dea.Latitud?.toString()}
            keyboardType="numeric"
            editable={false}
          />
          <TextInput
            style={{...styles.input, width: 165}}
            placeholder="Longitud"
            value={dea.Longitud?.toString()}
            keyboardType="numeric"
            editable={false}
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
        <TouchableOpacity style={styles.save} onPress={handleEditarDEA}><Text style={styles.text}>Editar DEA</Text></TouchableOpacity>
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
  },
  info: {
    fontSize: 10,
    color: 'grey',
    marginTop: 20,
    marginLeft: 40,
    alignSelf: 'flex-start'
  }
});

export default EditarDEA;