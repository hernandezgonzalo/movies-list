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
