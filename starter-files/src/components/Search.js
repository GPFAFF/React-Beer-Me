import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Search extends Component {

  static contextTypes = {
    router: PropTypes.object
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const searchTerm = this.q.value;
    console.log(searchTerm);
    this.context.router.history.push(`/search/${searchTerm}`)
  }

  handleChange = (event) => {

    this.setState({
      query: event.target.value
    })
  }

  render() {
    return (
      <div className="search">
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type="text" ref={(q) => this.q = q} placeholder="Hoppy, Malt, Angry, New..." />
          <input type="submit" value="Search"/>
        </form>
      </div>
    )
  }
}

export default Search;