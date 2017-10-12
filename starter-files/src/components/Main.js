import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Loader from './Loader';
import Counter from './Counter';
import Search from './Search';
import Results from './Results';

class Main extends Component {
  constructor() {
    super()
    this.state = {
      beers: [],
      loading: true
    }
  }

  componentDidMount() {
    console.log("DID MOUNT 💩");
    this.loadBeers();
  }

  loadBeers = async (searchTerm = 'hops' ) => {

    // turn on loader
    this.setState({
      loading: true
    });

    const response = await fetch(`http://api.react.beer/v2/search?q=${searchTerm}&type=beer`)
    .then(res => res.json());
    
    const filteredBeers = response.data.filter(beer => beer.labels);

    this.setState({
      beers: filteredBeers, 
      loading: false
    });

  }

  render() {

    return (
      <div className="wrapper">
        <Header siteName="Beer Me!" />
        <Counter />
        <Search />
        <Results beers={this.state.beers} loading={this.state.loading} />
      </div>
    )
  }
}

export default Main;