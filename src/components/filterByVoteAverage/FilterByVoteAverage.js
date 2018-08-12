import React from 'react';
import PropTypes from 'prop-types';
import './FilterByVoteAverage.css';

const FILTER_BY_VOTE_AVERAGES_INCREMENTS = [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10];

const FilterByVoteAverage = ({selected, onSelectVoteAverage}) => (
  <div className="filter-by-vote-average">
    <h3>Filter By Vote Average: </h3>
    <select defaultValue={selected} onChange={onSelectVoteAverage}>
      {Array.from(FILTER_BY_VOTE_AVERAGES_INCREMENTS, (value, index) =>
        <option 
          key={value}
          value={value}>
          {value}
        </option>)}
    </select>
  </div>
)

FilterByVoteAverage.propTypes = {
  selected: PropTypes.number.isRequired,
  onSelectVoteAverage: PropTypes.func.isRequired
}

export default FilterByVoteAverage;
