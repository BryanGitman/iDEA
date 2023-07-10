import React from 'react';
import DEA from './DEA';

const Map = ({deas, navigation}) =>
{
  return (
    <>
      {deas.map(dea => <DEA key={dea.Id} onPress={() => navigation.navigate('infoDEA', { id : dea.Id })}></DEA>)}
    </>
  );
}

export default Map;