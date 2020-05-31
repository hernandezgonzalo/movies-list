import { getMovies } from "../../services/moviesService";

export const getMoviesAction = (genre, search) => {
  return async function (dispatch) {
    dispatch({ type: "LOADING" });
    const movies = await getMovies(genre, search);
    dispatch({ type: "GET_MOVIES", movies });
    dispatch({ type: "NOT_LOADING" });
  };
};

export const addMovieAction = movie => {
  return function (dispatch) {
    dispatch({ type: "LOADING" });
    setTimeout(() => {
      dispatch({ type: "ADD_MOVIE", movie });
      dispatch({ type: "NOT_LOADING" });
    }, 1000);
  };
};

export const removeMovie = movie => {
  return function (dispatch) {
    dispatch({ type: "LOADING" });
    setTimeout(() => {
      dispatch({ type: "REMOVE_MOVIE", movie });
      dispatch({ type: "NOT_LOADING" });
    }, 1000);
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
