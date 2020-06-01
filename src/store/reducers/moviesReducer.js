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
      return {
        ...state,
        movies: state.movies
          .map(movie =>
            movie.title === action.movie.title
              ? { ...movie, watched: !movie.watched }
              : movie
          )
          .sort((a, b) => {
            if (a.watched && b.watched) return 0;
            else if (!a.watched && !b.watched) return b.index - a.index;
            else return a.watched ? 1 : -1;
          }) // move watched movies down the list or move to its original place
      };

    case "UPDATE_MOVIE":
      return {
        ...state,
        movies: state.movies.map(movie =>
          movie.index === action.index
            ? { ...movie, title: action.title }
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
