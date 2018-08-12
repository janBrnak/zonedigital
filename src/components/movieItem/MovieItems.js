import React from 'react';
import PropTypes from 'prop-types';

const MovieItems = ({ id, title, posterPath, genreIds }) => (
  <div id={id}>
    <img src={posterPath} alt={title} title={title} width="100" />
    {title}
  </div>
)

MovieItems.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  posterPath: PropTypes.string.isRequired,
  genreIds: PropTypes.arrayOf(PropTypes.number).isRequired
}
export default MovieItems;
