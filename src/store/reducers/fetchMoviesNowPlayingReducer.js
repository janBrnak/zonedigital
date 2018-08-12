import { REQUEST_MOVIES_NOW_PLAYING, RECEIVE_MOVIES_NOW_PLAYING } from '../actions/fetchMoviesNowPlayingAction';
import { URL_MOVIE_POSTER } from '../api';
import { INITIAL_STATE } from './initialState';

export default function fetchMoviesNowPlaying(
  state = INITIAL_STATE.movies,
  action
) {
  switch (action.type) {
    case REQUEST_MOVIES_NOW_PLAYING:
      return Object.assign({}, state, {
        is_fetching: true
      })
    case RECEIVE_MOVIES_NOW_PLAYING:
      return Object.assign({}, state, {
        is_fetching: false,
        items: action.payload.results.map(result => Object.assign(result, { poster_path: `${URL_MOVIE_POSTER}${result.poster_path}` })),
        dates: action.payload.dates,
        page: action.payload.page,
        total_pages: action.payload.total_pages,
        total_results: action.payload.total_results
      })
    default:
      return state
  }
}