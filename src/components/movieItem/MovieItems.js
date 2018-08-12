import React from 'react';
import PropTypes from 'prop-types';
import './MovieItems.css';

const MovieItems = ({ id, title, posterPath, voteAverage, genres }) => (
  <div className="movie-item" id={id}>
    <img src={posterPath} alt={title} title={title} width="150" />
    <br />
    <strong>{title}</strong>
    <br />
    Vote Average: {voteAverage}
    <br />
    Genres: {genres.map(gener => `${gener.name} `)}
  </div>
)

MovieItems.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  posterPath: PropTypes.string.isRequired,
  voteAverage: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}
export default MovieItems;
