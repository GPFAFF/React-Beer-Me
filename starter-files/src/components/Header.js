import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Header extends Component {
  
  static propTypes = {
    siteName: PropTypes.string.isRequired
  }
 
  render() {
    return (
      <h1>{this.props.siteName}</h1>
    )
  }
}

export default Header;