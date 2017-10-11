import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  render() {
    return (
      <div className="search">
        <input placeholder="Search a Beer" type="text" />
      </div>
    )
  }
}

export default Search;