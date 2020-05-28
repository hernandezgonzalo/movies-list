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
  if (action.type === "ADD_MOVIE")
    return { ...state, movies: [...state.movies, action.movie] };

  return state;
};

export default moviesReducer;
