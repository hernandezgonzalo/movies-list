import { getMovies, addMovie, removeMovie } from "../../services/moviesService";

export const getMoviesAction = (genre, search) => {
  return async function (dispatch) {
    dispatch({ type: "LOADING" });
    try {
      const movies = await getMovies(genre, search);
      dispatch({ type: "GET_MOVIES", movies });
    } catch (error) {
      console.log("Error while retrieving the movies");
    } finally {
      dispatch({ type: "NOT_LOADING" });
    }
  };
};

export const addMovieAction = movie => {
  return async function (dispatch) {
    dispatch({ type: "LOADING" });
    try {
      const newMovie = await addMovie(movie);
      if (newMovie) dispatch({ type: "ADD_MOVIE", newMovie });
    } catch (error) {
      console.log("This movie already exists");
    } finally {
      dispatch({ type: "NOT_LOADING" });
    }
  };
};

export const removeMovieAction = movie => {
  return async function (dispatch) {
    dispatch({ type: "LOADING" });
    try {
      const movieRemoved = await removeMovie(movie);
      dispatch({ type: "REMOVE_MOVIE", movieRemoved });
    } catch (error) {
      console.log("The movie could not be removed");
    } finally {
      dispatch({ type: "NOT_LOADING" });
    }
  };
};

export const toggleWatched = movie => {
  return function (dispatch) {
    dispatch({ type: "LOADING" });
    setTimeout(() => {
      dispatch({ type: "TOGGLE_WATCHED", movie });
      dispatch({ type: "NOT_LOADING" });
    }, 1000);
  };
};

export const updateMovie = (title, index) => {
  return function (dispatch) {
    dispatch({ type: "LOADING" });
    setTimeout(() => {
      dispatch({ type: "UPDATE_MOVIE", ...{ title, index } });
      dispatch({ type: "NOT_LOADING" });
    }, 1000);
  };
};
