const initState = {
  movies: [
    {
      title: "El viaje de Chihiro",
      genres: ["fantasy", "drama"],
      watched: true
    },
    {
      title: "Erase una vez en Hollywood",
      genres: ["drama"],
      watched: false
    }
  ]
};

const moviesReducer = (state = initState, action) => {
  console.log(state, action);
  switch (action.type) {
    case "ADD_MOVIE":
      if (state.movies.some(movie => movie.title === action.movie.title))
        return state; // if the movie title already exists do not add it
      return { ...state, movies: [...state.movies, action.movie] };

    case "REMOVE_MOVIE":
      return {
        ...state,
        movies: state.movies.filter(movie => movie.title !== action.movie.title)
      };

    case "TOGGLE_WATCHED":
      return {
        ...state,
        movies: state.movies.map(movie =>
          movie.title === action.movie.title
            ? { ...movie, watched: !movie.watched }
            : movie
        )
      };

    default:
      return state;
  }
};

export default moviesReducer;
