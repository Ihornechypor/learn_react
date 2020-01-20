import React, {useState} from 'react';

export default function(props){

    let [other, setOther] = useState(5);

    console.log(setOther);

    let vl = {value: other}

    const decrese = () => {
      // console.log(vl.value = useState.value);
    }

    const increase = () => {
      // console.log(vl.value);
    }


    return(
        <div>
            <button onClick={decrese}>
                some -
            </button>
            <label >
              <input type="text" value={vl.value} onChange={increase || decrese}></input>
            </label>
            <button onClick={increase}>
                some +
            </button>

            <br/>
        </div>
    );

};
