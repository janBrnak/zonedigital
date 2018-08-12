import fetch from 'cross-fetch';
import { FETCH_MOVIES_NOW_PLAYING } from '../api';

export const REQUEST_MOVIES_NOW_PLAYING = 'REQUEST_MOVIES_NOW_PLAYING'
function requestMoviesNowPlaying() {
  return {
    type: REQUEST_MOVIES_NOW_PLAYING
  };
}

export const RECEIVE_MOVIES_NOW_PLAYING = 'RECEIVE_MOVIES_NOW_PLAYING'
function receiveMoviesNowPlaying(json) {
  return {
    type: RECEIVE_MOVIES_NOW_PLAYING,
    payload: json
  };
}

export default function fetchMoviesNowPlaying() {
  return function (dispatch) {
    dispatch(requestMoviesNowPlaying());

    return fetch(FETCH_MOVIES_NOW_PLAYING)
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error)
      )
      .then(json =>
        dispatch(receiveMoviesNowPlaying(json))
      );
  };
}
