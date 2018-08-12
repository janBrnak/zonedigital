import { 
  REQUEST_MOVIES_NOW_PLAYING,
  RECEIVE_MOVIES_NOW_PLAYING } from '../actions/fetchMoviesNowPlayingAction';
import { URL_MOVIE_POSTER } from '../api';
import { INITIAL_STATE } from './initialState';

export default function fetchMoviesNowPlayingReduce(
  state = INITIAL_STATE.movies,
  action
) {
  switch (action.type) {
    case REQUEST_MOVIES_NOW_PLAYING:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_MOVIES_NOW_PLAYING:
      console.log(action.payload.results.map(result => ({title: result.title, voteAverage: result.vote_average, popularity: result.popularity})));
      return Object.assign({}, state, {
        isFetching: false,
        items: action.payload.results
          .map(result => ({
            id: result.id,
            title: result.title,
            posterPath: `${URL_MOVIE_POSTER}${result.poster_path}`,
            voteAverage: result.vote_average,
            popularity: result.popularity,
            genreIds: result.genre_ids,
          }))
      });
    default:
      return state;
  }
}