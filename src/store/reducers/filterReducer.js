import {
  ON_SELECT_GENRES,
  ON_SELECT_VOTE_AVERAGE } from '../actions/filterAction';
import { INITIAL_STATE } from './initialState';

export default function filterReduce(
  state = INITIAL_STATE.filter,
  action
) {
  switch (action.type) {
    case ON_SELECT_GENRES:
      const newId = parseInt(action.payload, 10);
      let byGenres = null;

      if (state.byGenres.indexOf(newId) >= 0) {
        byGenres = state.byGenres.filter(id => id !== newId);
      } else {
        byGenres = [newId].concat(state.byGenres);
      }

      return Object.assign(
        {},
        state,
        {byGenres: byGenres}
      );
    case ON_SELECT_VOTE_AVERAGE:
      return Object.assign(
        {},
        state,
        { byVoteAverage: parseFloat(action.payload) }
      );
    default:
      return state;
  }
}