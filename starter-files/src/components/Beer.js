import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import slug from 'slugify';

class Beer extends Component {

  render() {

    const {
      name,
      labels,
      id
    } = this.props.details;
  
    const image = labels ? labels.medium : 'notfound.jpg';

    return (
      <div className="beer">
        <Link to={`/beer/${id}/${slug(name)}`}>
          <h2>{name}</h2>
          <img src={image} alt={`Label of ${name}`} />
        </Link>
      </div>
    );
  }
}

export default Beer;