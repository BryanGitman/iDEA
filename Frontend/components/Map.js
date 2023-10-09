import React from 'react';
import DEA from './DEA';

const Map = ({deas, navigation}) =>
{
  return (
    <>
      {deas.map(dea => <DEA key={dea.Id} navigation={navigation} idDea={dea.Id} latitud={dea.Latitud} longitud={dea.Longitud}></DEA>)}
    </>
  );
}

export default Map;