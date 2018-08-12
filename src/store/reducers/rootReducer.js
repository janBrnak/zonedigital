import { combineReducers } from 'redux';
import filterReduce from './filterReducer';
import fetchMoviesNowPlayingReduce from './fetchMoviesNowPlayingReducer';
import fetchMovieGenreListReduce from './fetchMovieGenreListReducer';

const rootReducer = combineReducers({
  filter: filterReduce,
  movies: fetchMoviesNowPlayingReduce,
  genres: fetchMovieGenreListReduce
});

export default rootReducer;
