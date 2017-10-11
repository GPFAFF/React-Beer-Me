import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {
  constructor() {
    super()
    this.state = {
      numBeers: 0,
    }
  }
  
  incrementBeers = () => {
   // take copy of current state
   const beerAmount = this.state.numBeers + 1;
   this.setState({
     numBeers: beerAmount
   })
  }

  decrementBeers = () => {
    const beerAmount = this.state.numBeers - 1;
    this.setState({
      numBeers: beerAmount
    })
  }
  render() {
    return (
      <div className="counter">
        <span className='total'>{this.state.numBeers}</span>
        <button onClick={this.incrementBeers}> Moar 🍻🍻🍻🍻 </button>
        <button onClick={this.decrementBeers}> Less 🍻🍻🍻🍻 </button>
      </div>
    )
  }
}

export default Counter;