import { sortWatchedMovies } from "../../lib/movies";

const initState = { movies: [], loading: false };

const moviesReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_MOVIES":
      return { ...state, movies: action.movies };

    case "ADD_MOVIE":
      return { ...state, movies: [action.newMovie, ...state.movies] };

    case "REMOVE_MOVIE":
      return {
        ...state,
        movies: state.movies.filter(
          movie => movie.title !== action.movieRemoved.title
        )
      };

    case "TOGGLE_WATCHED":
      const movies = state.movies
        .map(movie =>
          movie.index === action.movieToggled.index
            ? action.movieToggled
            : movie
        )
        .sort(sortWatchedMovies);

      return { ...state, movies };

    case "UPDATE_MOVIE":
      return {
        ...state,
        movies: state.movies.map(movie =>
          movie.index === action.movieUpdated.index
            ? { ...movie, title: action.movieUpdated.title }
            : movie
        )
      };

    case "LOADING":
      return { ...state, loading: true };

    case "NOT_LOADING":
      return { ...state, loading: false };

    default:
      return state;
  }
};

export default moviesReducer;
