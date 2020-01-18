import React from 'react';

export default class extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      cnt: 1
    }
  }

  increace(){
    console.log(this);
  }

  render(){
    return(
      <div>
        <strong>
          {this.state.cnt}
        </strong>
        <br/>
        <button onClick={this.increace.bind(this)}>some</button>
      </div>
    )
  }
};
