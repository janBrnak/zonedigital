import { REQUEST_MOVIE_GENRE_LIST, RECEIVE_MOVIE_GENRE_LIST } from '../actions/fetchMovieGenreListAction';
import { INITIAL_STATE } from './initialState';

export default function fetchMovieGenreList(
  state = INITIAL_STATE.genres,
  action
) {
  switch (action.type) {
    case REQUEST_MOVIE_GENRE_LIST:
      return Object.assign({}, state, {
        is_fetching: true
      })
    case RECEIVE_MOVIE_GENRE_LIST:
      return Object.assign({}, state, {
        is_fetching: false,
        items: action.payload.genres
      })
    default:
      return state
  }
}