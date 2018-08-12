import React from 'react';
import { connect } from 'react-redux'
import './App.css';

import { mapStateToProps, mapDispatchToProps } from './store/mapHelper';
import FilterByGenres from './components/filterByGenres/FilterByGenres';
import FilterByVoteAverage from './components/filterByVoteAverage/FilterByVoteAverage';
import Movies from './components/movies/Movies';

// Init root app
let App = ({filter, movies, genres, onCheckGenre, onSelectVoteAverage}) => (
  <div className="app">
    <div className="app__filter">
      <FilterByGenres
        genres={genres}
        selected={filter.byGenres}
        onCheckGenre={onCheckGenre}
      ></FilterByGenres>
      <FilterByVoteAverage
        selected={filter.byVoteAverage}
        onSelectVoteAverage={onSelectVoteAverage}
      ></FilterByVoteAverage>
    </div>
    <Movies
      movies={movies}
    ></Movies>
  </div>
);

// connect Redux store to React app
App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
