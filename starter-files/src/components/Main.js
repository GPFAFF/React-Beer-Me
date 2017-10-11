import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Loader from './Loader';
import Counter from './Counter';
import Beer from './Beer';
import Search from './Search';
import Results from './Results';

class Main extends Component {

  render() {
    return (
      <div className="wrapper">
        <Header siteName="Beer Me!" />
        <Loader message="Pause for a cold one!" />
        <Counter />
        <Search />
        <Beer />
        <Results />
      </div>
    )
  }
}

export default Main;