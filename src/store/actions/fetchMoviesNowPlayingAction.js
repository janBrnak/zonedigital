import fetch from 'cross-fetch';
import { FETCH_MOVIES_NOW_PLAYING } from '../api';

export const REQUEST_MOVIES_NOW_PLAYING = 'REQUEST_MOVIES_NOW_PLAYING'
function requestMoviesNowPlayingAction() {
  return {
    type: REQUEST_MOVIES_NOW_PLAYING
  };
}

export const RECEIVE_MOVIES_NOW_PLAYING = 'RECEIVE_MOVIES_NOW_PLAYING'
function receiveMoviesNowPlayingAction(json) {
  return {
    type: RECEIVE_MOVIES_NOW_PLAYING,
    payload: json
  };
}

export default function fetchMoviesNowPlayingAction() {
  return function (dispatch) {
    dispatch(requestMoviesNowPlayingAction());

    return fetch(FETCH_MOVIES_NOW_PLAYING)
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error)
      )
      .then(json =>
        dispatch(receiveMoviesNowPlayingAction(json))
      );
  };
}
