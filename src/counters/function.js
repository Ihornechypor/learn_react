import React, {useState} from 'react';

export default function(props){

    let [other, setOther] = useState(5);


    //
    // const decrese = (e) => {
    //     console.log(e.target.value);
    //     other = other - 1;
    //
    //
    // };

    const increase = (e) => {
        console.log(e);
        other = other + 1;
    };


    return(
        <div>
            {/*<button onClick={decrese}>*/}
                {/*some -*/}
            {/*</button>*/}
            <label >
              <input type="text" value={other} onChange={increase}></input>
            </label>
            <button onClick={increase}>
                some +
            </button>

            <br/>
        </div>
    );

};
