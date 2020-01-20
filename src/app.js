import React from 'react';
import CounterClass from './counters/class.js';
import CounterFunction from './counters/function.js';

export default function(props){
  return (
    <div>
      <h2>Count of class</h2>
      <CounterClass />
        <h2>
            counter of function
        </h2>
      <CounterFunction />
    </div>
  );
}
