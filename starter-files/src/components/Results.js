import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loader from './Loader';
import Beer from './Beer';

class Results extends Component {
  render() {

    if (this.props.loading) {
      return (
        <Loader message="Pouring a cold one! 🍻" />
      )
    }

    return (
      <div className="beers">
        {this.props.beers.map(
          details => <Beer key={details.id} details={details} />
        )}
      </div>
    )
  }
}

export default Results;