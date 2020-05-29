export const addMovie = movie => ({ type: "ADD_MOVIE", movie });

export const removeMovie = movie => ({ type: "REMOVE_MOVIE", movie });

export const toggleWatched = movie => ({ type: "TOGGLE_WATCHED", movie });

export const updateMovie = (title, index) => ({
  type: "UPDATE_MOVIE",
  ...{ title, index }
});
