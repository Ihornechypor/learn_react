import React, {useState} from 'react';

export default function(){
    let [cnt, setCnt] = useState(0);
    let [other, setOther] = useState(10);

    let increase = () => {
      setCnt(cnt + 1);

    }

    let setother = () => {
      setOther(other + 2);
    }

    return(
        <div>
            <strong>
                {cnt}
            </strong>
            <br/>
            <strong>
                {other}
            </strong>

            <br/>
            <button onClick={increase}>
                some
            </button>
            <button onClick={setother}>
                some
            </button>
        </div>
    );

};
