export const INITIAL_STATE = {
  filter: {
    byVoteAverage: 3,
    byGenres: []
  },
  movies: {
    isFetching: false,
    items: [],
  },
  genres: {
    isFetching: false,
    items: []
  }
};
