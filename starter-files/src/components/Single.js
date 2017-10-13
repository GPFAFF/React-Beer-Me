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
  
  renderAbv = (beer) => {
    if (!beer.abv) return
    return (
      <span className="info">ABV {beer.style.abvMax}</span>
    )
  }

  renderGlass = (beer) => {
    if (!beer.glass) return
    return (
      <div className="glass">
        <img src={`/images/glass-${beer.glass.id}.jpg`} alt={beer.name} />
        <h3>{beer.glass.name} Glass</h3>
      </div>
    )
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
          <img src={beer.labels.medium} />

          <div className="beer-info">
            {this.renderGlass(beer)}
            {this.renderAbv(beer)}
          </div>

          <h3 className="info"> More Info on {beer.style.name} </h3>
          <p>{beer.style.description}</p>
        </div>
      </div>
    )
  }
}

export default Single;