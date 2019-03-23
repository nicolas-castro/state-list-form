import React, { Component } from 'react';


//State can live only inside a class component
class Counter extends Component {
  // 1st way: using constructor and dont forget to use this in front of state
  constructor(){
    super();
    this.state = {
      count: 0
    };
  }

counterPlus(){
  console.log('counting');
  // this.state.count += 1; =====> NEVER USE THIS REACT HAS ITS OWN STATE
  this.setState({
    count: this.state.count + 1
  });
}

  render (){
    return (
      <div>
        <p> { this.state.count } </p>
        <button onClick={ () => this.counterPlus() } > + count</button>
      </div>
    )
  }
}

export default Counter ;