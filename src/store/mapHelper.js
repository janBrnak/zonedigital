import {
  onSelectGenresAction,
  onSelectVoteAverageAction } from './actions/filterAction';

// Dispaly only genres returned by movie result set.
function filterGenres(genreId, movies) {
  // assign all genreIds from all movies to variable
  const genreIds = movies.reduce((genreIds, movie) =>
    genreIds.concat(movie.genreIds.filter(genreId =>
      genreIds.indexOf(genreId) === -1)), []);
  
  // evaluate if genreId is part of the one movie genreIds
  return genreIds.indexOf(genreId) >= 0;
}

// Filter Movies by Genres to Movies
function filterMoviesByGenres(movie, byGenres) {
  return byGenres.every(genreId => movie.genreIds.indexOf(genreId) >= 0);
}

// Filter Movies by Vote Average
function filterMoviesByVoteAverage(movie, byVoteAverage) {
  return movie.voteAverage >= byVoteAverage;
}

// Sort Movies by Popularity
function sortMoviesByPopularity(movieA, movieB) {
  return parseInt(movieB.popularity * 1000, 10) - parseInt(movieA.popularity * 1000, 10); //change to integer
}

// Map Genres to movie object
function mapMovieGenres(movie, genres) {
  return Object.assign(
    {},
    movie,
    { 
      genres: movie.genreIds
        .map(genreId => genres.find(genre => genre.id === genreId))
        .sort(function(a, b) { // sort alphabetically
          const A = a.name.toUpperCase();
          const B = b.name.toUpperCase();
          if (A < B) {
            return -1;
          } else if (A > B) {
            return 1;
          } else {
            return 0;
          }
        })
    }
  );
}

// Map state to props
export const mapStateToProps = state => ({
  filter: state.filter,
  genres: state.genres.items
    .filter(genre => filterGenres(genre.id, state.movies.items)), // Evaluate what geners shoudl be displayed at UI filter
  movies: state.movies.items
    .filter(movie => filterMoviesByGenres(movie, state.filter.byGenres)) // Filter Movies by Genres to Movies
    .filter(movie => filterMoviesByVoteAverage(movie, state.filter.byVoteAverage)) // Filter Movies by Vote Average
    .sort((movieA, movieB) => sortMoviesByPopularity(movieA, movieB)) // Sort Movies by Popularity
    .map(movie => mapMovieGenres(movie, state.genres.items)) // Map Genres to movie object
});

// Map dispatch to props
export const mapDispatchToProps = dispatch => ({
  onCheckGenre: checkbox => {
    dispatch(onSelectGenresAction(checkbox.target.value));
  },
  onSelectVoteAverage: select => {
    dispatch(onSelectVoteAverageAction(select.target.value));
  }
});