import React from 'react';
import PropTypes from 'prop-types';
import './Movies.css';

import MovieItems from '../movieItem/MovieItems';

const Movies = ({ movies }) => (
  <div className="movies">
    <h3>List of Movies </h3>
    <div className="movies__items">
      {movies.map((movie, index) => (
        <MovieItems 
          key={movie.id}
          id={movie.id}
          title={movie.title}
          posterPath={movie.posterPath}
          genres={movie.genres} />
      ))}
    </div>
  </div>
)

Movies.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      posterPath: PropTypes.string.isRequired,
      genres: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired
        }).isRequired
      ).isRequired
    }).isRequired
  ).isRequired
}

export default Movies;
