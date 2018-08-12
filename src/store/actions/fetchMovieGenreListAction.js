import fetch from 'cross-fetch';
import { FETCH_MOVIE_GENRE_LIST } from '../api';

export const REQUEST_MOVIE_GENRE_LIST = 'REQUEST_MOVIE_GENRE_LIST'
function requestMoviesNowPlayingAction() {
  return {
    type: REQUEST_MOVIE_GENRE_LIST
  };
}

export const RECEIVE_MOVIE_GENRE_LIST = 'RECEIVE_MOVIE_GENRE_LIST'
function receiveMoviesNowPlayingAction(json) {
  return {
    type: RECEIVE_MOVIE_GENRE_LIST,
    payload: json
  };
}

export default function fetchMovieGenreListAction() {
  return function (dispatch) {
    dispatch(requestMoviesNowPlayingAction());

    return fetch(FETCH_MOVIE_GENRE_LIST)
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error)
      )
      .then(json =>
        dispatch(receiveMoviesNowPlayingAction(json))
      );
  };
}
