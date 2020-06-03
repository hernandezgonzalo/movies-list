import {
  getMovies,
  addMovie,
  removeMovie,
  toggleMovie,
  updateMovie
} from "../../services/moviesService";

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

export const addMovieAction = (movie, genreToShow) => {
  return async function (dispatch) {
    dispatch({ type: "LOADING" });
    try {
      const newMovie = await addMovie(movie);
      if (newMovie?.genres.includes(genreToShow) || !genreToShow)
        dispatch({ type: "ADD_MOVIE", newMovie });
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

export const toggleWatchedAction = movie => {
  return async function (dispatch) {
    dispatch({ type: "LOADING" });
    try {
      const movieToggled = await toggleMovie(movie);
      dispatch({ type: "TOGGLE_WATCHED", movieToggled });
    } catch (error) {
      console.log("Error when trying to mark the movie as watched/unwatched");
    } finally {
      dispatch({ type: "NOT_LOADING" });
    }
  };
};

export const updateMovieAction = (title, index) => {
  return async function (dispatch) {
    dispatch({ type: "LOADING" });
    try {
      const movieUpdated = await updateMovie(title, index);
      dispatch({ type: "UPDATE_MOVIE", movieUpdated });
    } catch (error) {
      console.log("Error updating the movie");
    } finally {
      dispatch({ type: "NOT_LOADING" });
    }
  };
};
