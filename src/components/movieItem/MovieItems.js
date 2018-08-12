import React from 'react';
import PropTypes from 'prop-types';
import './MovieItems.css';

const MovieItems = ({ id, title, posterPath, genres }) => (
  <div className="movie-item" id={id}>
    <img src={posterPath} alt={title} title={title} width="150" />
    <br />
    <strong>{title}</strong>
    <br />
    {genres
      .map(gener => gener ? `${gener.name}` : ``)
      .join(', ')}
  </div>
)

MovieItems.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  posterPath: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}
export default MovieItems;
