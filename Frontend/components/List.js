import React from 'react';
import { ScrollView } from 'react-native';
import FirstDEA from './FirstDEA';

const List = ({deas, navigation}) =>
{
  return (
    <ScrollView style={{marginLeft: 20, width: '100%'}}>
      {deas.map(dea => <FirstDEA key={dea.Id} direccion={dea.Calle + " " + dea.Altura} establecimiento={dea.Nombre} descripcion={dea.Descripcion} navigation={navigation}></FirstDEA>)}
    </ScrollView>
  );
}

export default List;