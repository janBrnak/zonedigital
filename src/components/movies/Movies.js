import React from 'react';
import PropTypes from 'prop-types';

import MovieItems from '../movieItem/MovieItems';

const Movies = ({ movies }) => (
  <div>
    {movies.map((movie, index) => (
      <MovieItems 
        key={movie.id}
        id={movie.id}
        title={movie.title}
        posterPath={movie.posterPath}
        genreIds={movie.genreIds} />
    ))}
  </div>
)

Movies.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      posterPath: PropTypes.string.isRequired,
      genreIds: PropTypes.arrayOf(PropTypes.number).isRequired
    }).isRequired
  ).isRequired
}

export default Movies;
