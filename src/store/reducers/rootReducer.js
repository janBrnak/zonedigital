import { combineReducers } from 'redux';
import fetchMoviesNowPlaying from './fetchMoviesNowPlayingReducer';
import fetchMovieGenreList from './fetchMovieGenreListReducer';

const rootReducer = combineReducers({
  movies: fetchMoviesNowPlaying,
  genres: fetchMovieGenreList
});

export default rootReducer;
