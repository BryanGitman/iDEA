import React from 'react';
import DEA from './DEA';

const Map = ({deas, navigation}) =>
{
  return (
    <>
      {deas.map(dea => <DEA key={dea.Id} navigation={navigation} id={dea.id}></DEA>)}
    </>
  );
}

export default Map;