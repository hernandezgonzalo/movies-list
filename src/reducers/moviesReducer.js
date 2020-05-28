const initState = {
  movies: [
    {
      title: "El viaje de Chihiro",
      genres: ["fantasy"],
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
  return state;
};

export default moviesReducer;
