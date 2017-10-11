import React, {Component} from 'react';
import Loader from './Loader';
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
  
  loadBeer = async (beerId) => {
    const response = await fetch(`http://api.react.beer/v2/beer/${beerId}`)
    .then(res => res.json() );
  

    this.setState({
      beer: response.data, 
      loading: false
    });
  }

  render() {

    if (this.state.loading) {
      return (
        <Loader message="Pouring a cold one! 🍻" />
      )
    }

    const {
      nameDisplay,
      labels
    } = this.state.beer;

    const {
      description,
      shortName
    } = this.state.beer.style;

    return (
      <div className="single-beer">
        <h2>{nameDisplay}</h2>
        <img src={labels.medium} />
        <h3>{shortName}</h3>
        <p>{description}</p>
      </div>
    )
  }
}

export default Single;