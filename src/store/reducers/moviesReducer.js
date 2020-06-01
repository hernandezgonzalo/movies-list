import { sortWatchedMovies } from "../../lib/movies";

const initState = [];

const moviesReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_MOVIES":
      return action.movies;

    case "ADD_MOVIE":
      return [action.newMovie, ...state];

    case "REMOVE_MOVIE":
      return state.filter(movie => movie.title !== action.movieRemoved.title);

    case "TOGGLE_WATCHED":
      return state
        .map(movie =>
          movie.index === action.movieToggled.index
            ? action.movieToggled
            : movie
        )
        .sort(sortWatchedMovies);

    case "UPDATE_MOVIE":
      return state.map(movie =>
        movie.index === action.movieUpdated.index
          ? { ...movie, title: action.movieUpdated.title }
          : movie
      );

    default:
      return state;
  }
};

export default moviesReducer;
