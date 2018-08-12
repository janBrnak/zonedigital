import React from 'react';
import PropTypes from 'prop-types';
import './MovieItems.css';

const MovieItems = ({ id, title, posterPath, voteAverage, genres }) => (
  <div className="movie-item" id={id}>
    <div className="movie-item__title">{title}</div>
    <div className="movie-item__poster"><img src={posterPath} alt={title} title={title} /></div>
    <div className="movie-item__genres">
    {genres
      .map(gener => gener ? `${gener.name}` : ``)
      .join(', ')}
    </div>
    <div className="movie-item__vote-average">Vote Average: {voteAverage}</div>
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
