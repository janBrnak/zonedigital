import React from 'react';
import { connect } from 'react-redux'
import './App.css';

import Movies from './components/movies/Movies';

let App = ({movies, genres}) => (
  <div className="app">
    <Movies movies={movies.items}></Movies>
  </div>
);
App = connect(state => state)(App)

export default App;
