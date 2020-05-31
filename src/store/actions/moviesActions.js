export const addMovie = movie => {
  return function (dispatch) {
    // here goes the logic before interact with the store
    setTimeout(() => {
      dispatch({ type: "ADD_MOVIE", movie });
    }, 1000); // this simulates an asynchronous action, such as an API call
  };
};

export const removeMovie = movie => {
  return function (dispatch) {
    setTimeout(() => {
      dispatch({ type: "REMOVE_MOVIE", movie });
    }, 1000);
  };
};

export const toggleWatched = movie => {
  return function (dispatch) {
    setTimeout(() => {
      dispatch({ type: "TOGGLE_WATCHED", movie });
    }, 1000);
  };
};

export const updateMovie = (title, index) => {
  return function (dispatch) {
    setTimeout(() => {
      dispatch({ type: "UPDATE_MOVIE", ...{ title, index } });
    }, 1000);
  };
};
