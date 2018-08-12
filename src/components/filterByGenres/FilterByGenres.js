import React from 'react';
import PropTypes from 'prop-types';

import './FilterByGenres.css'

const FilterByGenres = ({ genres, selected, onCheckGenre }) => (
  <div className="filter-by-genres">
    {genres.map((genre, index) => (
      <div key={genre.id}> 
        <label>
          <input
            type="checkbox"
            name="genres"
            id={genre.id}
            value={genre.id}
            checked={selected.indexOf(genre.id) >= 0}
            onChange={onCheckGenre}
          />
          {genre.name}
        </label>
      </div>
    ))}
  </div>
)

FilterByGenres.propTypes = {
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  selected: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  onCheckGenre: PropTypes.func.isRequired
}

export default FilterByGenres;
