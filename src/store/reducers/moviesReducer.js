const initState = {
  movies: [
    {
      title: "La vida de Brian",
      genres: ["comedy"],
      watched: false,
      index: 3
    },
    {
      title: "El viaje de Chihiro",
      genres: ["fantasy"],
      watched: false,
      index: 2
    },
    {
      title: "Érase una vez en... Hollywood",
      genres: ["drama", "comedy"],
      watched: false,
      index: 1
    }
  ],
  loading: false
};

const moviesReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_MOVIE":
      // if the movie title already exists do not add it
      if (state.movies.some(movie => movie.title === action.movie.title))
        return state;

      // set new movie and add to the list
      const newMovie = {
        ...action.movie,
        watched: false,
        index:
          state.movies.reduce(
            (prev, curr) => (curr.index > prev ? curr.index : prev),
            0
          ) + 1 // get the highest index in the list and add one
      };
      return { ...state, movies: [newMovie, ...state.movies] };

    case "REMOVE_MOVIE":
      return {
        ...state,
        movies: state.movies.filter(movie => movie.title !== action.movie.title)
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
