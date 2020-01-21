import React from 'react';

export default class extends React.Component{

  state = {
        cnt: 0,
        min: 1,
        max: 11
  };

  decrease = () => {
    this.setState({
        cnt: this.state.cnt - 1
    });
  };

  increase = () => {
      this.setState({
          cnt: this.state.cnt + 1
      });
  };



  render(){
    return(
      <div>
        <button onClick={this.decrease}>
          some -
        </button>
          <br/>
        <strong>
            <label >
                <input type="text" value={this.state.cnt} onChange={this.increase || this.decrease}  readOnly="readonly"></input>
            </label>
        </strong>
        <br/>
        <button onClick={this.increase}>
            some +
        </button>
      </div>
    )
  }
};
