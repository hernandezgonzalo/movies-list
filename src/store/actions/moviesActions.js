export const addMovie = movie => {
  return function (dispatch) {
    // here goes the logic before interact with the store
    dispatch({ type: "LOADING" });
    setTimeout(() => {
      dispatch({ type: "ADD_MOVIE", movie });
      dispatch({ type: "NOT_LOADING" });
    }, 1000); // this simulates an asynchronous action, such as an API call
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
