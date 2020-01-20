import React from 'react';

export default class extends React.Component{

  state = {
        cnt: 1
  };

  increace = () => {
      this.setState({
          cnt: this.state.cnt + 1
      });
  };

  render(){
    return(
      <div>
        <strong>
          {this.state.cnt}
        </strong>
        <br/>
        <button onClick={this.increace}>
            some
        </button>
      </div>
    )
  }
};
