export const ON_SELECT_GENRES = 'ON_SELECT_GENRES'
export function onSelectGenresAction(selected) {
  return {
    type: ON_SELECT_GENRES,
    payload: selected
  };
}

export const ON_SELECT_VOTE_AVERAGE = 'ON_SELECT_VOTE_AVERAGE'
export function onSelectVoteAverageAction(selected) {
  return {
    type: ON_SELECT_VOTE_AVERAGE,
    payload: selected
  };
}