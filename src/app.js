import React from 'react';

import CounterClassSimple from './hw/1-simple.js';

export default function(props){
  return (
    <div>
      <h2>Count of class</h2>
        <h2>
            counter min max
        </h2>
        <CounterClassSimple min={1} max={5} />

    </div>
  );
}
