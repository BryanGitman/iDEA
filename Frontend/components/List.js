import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import FirstDEA from './FirstDEA';

List = ({deas}) =>
{
  return (
    <>
      {deas.map(dea => <FirstDEA direccion={dea.Calle + " " + dea.Altura} establecimiento={dea.Nombre} descripcion={dea.Descripcion}></FirstDEA>)}
    </>
  );
}

export default List;