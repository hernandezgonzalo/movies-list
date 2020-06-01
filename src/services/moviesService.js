import { sortWatchedMovies } from "../lib/movies";

export const getMovies = (genre, search) => {
  return new Promise((resolve, reject) => {
    const movies = JSON.parse(sessionStorage.getItem("movies"));

    // filter movies by genre and by search
    let moviesToShow = movies;
    if (genre)
      moviesToShow = movies.filter(movie => movie.genres.includes(genre));
    if (search.length > 0)
      moviesToShow = moviesToShow.filter(movie =>
        movie.title.toLowerCase().includes(search.toLowerCase())
      );

    setTimeout(() => {
      resolve(moviesToShow);
    }, 1000); // this simulates an asynchronous action, such as an API call
  });
};

export const addMovie = movieToAdd => {
  return new Promise((resolve, reject) => {
    const movies = JSON.parse(sessionStorage.getItem("movies"));

    // if the movie title already exists do not add it
    if (movies.some(movie => movie.title === movieToAdd.title))
      setTimeout(() => reject(), 1000);

    // set new movie and add to the list
    const newMovie = {
      ...movieToAdd,
      watched: false,
      index:
        movies.reduce(
          (prev, curr) => (curr.index > prev ? curr.index : prev),
          0
        ) + 1 // get the highest index in the list and add one
    };
    sessionStorage.setItem("movies", JSON.stringify([newMovie, ...movies]));
    setTimeout(() => resolve(newMovie), 1000);
  });
};

export const removeMovie = movieToRemove => {
  return new Promise((resolve, reject) => {
    const movies = JSON.parse(sessionStorage.getItem("movies"));

    // remove the movie from the original array
    const newMoviesArr = movies.filter(
      movie => movie.title !== movieToRemove.title
    );

    sessionStorage.setItem("movies", JSON.stringify(newMoviesArr));
    setTimeout(() => resolve(movieToRemove), 1000);
  });
};

export const toggleMovie = movieToToggle => {
  return new Promise((resolve, reject) => {
    const movies = JSON.parse(sessionStorage.getItem("movies"));

    const newMoviesArr = movies
      .map(movie =>
        movie.title === movieToToggle.title
          ? { ...movie, watched: !movie.watched }
          : movie
      )
      .sort(sortWatchedMovies);

    const movieToggled = newMoviesArr.find(
      movie => movie.title === movieToToggle.title
    );

    sessionStorage.setItem("movies", JSON.stringify(newMoviesArr));
    setTimeout(() => resolve(movieToggled), 1000);
  });
};

export const updateMovie = (title, index) => {
  return new Promise((resolve, reject) => {
    const movies = JSON.parse(sessionStorage.getItem("movies"));

    const moviesUpdated = movies.map(movie =>
      movie.index === index ? { ...movie, title } : movie
    );

    const movieUpdated = moviesUpdated.find(movie => movie.index === index);

    sessionStorage.setItem("movies", JSON.stringify(moviesUpdated));
    setTimeout(() => resolve(movieUpdated), 1000);
  });
};
