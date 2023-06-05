import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import FirstDEA from './FirstDEA';

const List = ({deas}) =>
{
  return (
    <>
      {deas.map(dea => <FirstDEA key={dea.Id} direccion={dea.Calle + " " + dea.Altura} establecimiento={dea.Nombre} descripcion={dea.Descripcion}></FirstDEA>)}
    </>
  );
}

export default List;