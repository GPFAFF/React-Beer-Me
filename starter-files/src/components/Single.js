import React, {Component} from 'react';
import Loader from './Loader';
import Header from './Header';
import Beer from './Beer'
import PropTypes from 'prop-types';

class Single extends Component {

  constructor() {
    super()
    this.state = {
      beer: {},
      loading: true
    }
  }

  componentDidMount() {
    console.log("SINGLE DID MOUNT 💩");
    this.loadBeer(this.props.match.params.beerId);
  }

  loadBeer = (beerId) => {
    console.log(`Loading beer ${beerId}`);
    this.setState({ loading: true });
    fetch(`http://api.react.beer/v2/beer/${beerId}`)
      .then(data => data.json())
      .then(res => {
        this.setState({ beer: res.data, loading: false });
      });
  }
  
  loadBeer = async (beerId) => {
    const response = await fetch(`http://api.react.beer/v2/beer/${beerId}`)
    .then(data => data.json())
    
    .then(res => {
      console.log(res);
      this.setState({
        beer: res.data, 
        loading: false
      });
    })
  
  }

  render() {

    if (this.state.loading) {
      return (
        <Loader message="Pouring a cold one! 🍻" />
      )
    }

    const { beer } = this.state;

    return (
      <div>
        <Header siteName="Beer me!" />
        <div className="single-beer">
          <h2>{beer.nameDisplay}</h2>
          <h3>{beer.description}</h3>
          <img className="glass" src="#" />
          <img src={beer.labels.medium} />
          <h3 className="info"> More Info on {beer.style.name} </h3>
          <span className="info">ABV {beer.style.abvMax}</span>
          <p>{beer.style.description}</p>
        </div>
      </div>
    )
  }
}

export default Single;