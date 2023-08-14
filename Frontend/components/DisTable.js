import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { Table, Row, Rows } from 'react-native-table-component';

export default class DisTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: [
        ['Lunes', '-', <TouchableOpacity style={{marginRight:'10%'}} onPress={() => props.setDisponibilidad([])}><Icon name="chevron-up" size={30} color="#000000" /></TouchableOpacity>],
        ['Martes', '-', ''],
        ['Miércoles', '-', ''],
        ['Jueves', '-', ''],
        ['Viernes', '-', ''],
        ['Sábado', '-', ''],
        ['Domingo', '-', '']
      ]
    }
  }

  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Rows data={state.tableData} textStyle={styles.text}/>
        </Table>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  text: { margin: 6 }
});