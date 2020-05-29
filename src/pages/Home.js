import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import MoviesList from "../components/MoviesList";
import NewMovieForm from "../components/NewMovieForm";
import { useQuery } from "../hooks/useQuery";
import { useHistory } from "react-router-dom";
import GenreRadioButtons from "../components/GenreRadioButtons";
import Input from "../components/ui/Input";

const Home = ({ movies, addMovie }) => {
  const query = useQuery();
  const history = useHistory();
  const [genreToShow, setGenreToShow] = useState();
  const [search, setSearch] = useState("");

  useEffect(() => setGenreToShow(query.get("genre")), [query]);

  const handleRadioButton = genre => history.push(`/?genre=${genre}`);

  const handleChangeSearch = e => setSearch(e.target.value);

  // filter movies by genre and by search
  let moviesToShow = movies;
  if (genreToShow)
    moviesToShow = movies.filter(movie => movie.genres.includes(genreToShow));
  if (search.length > 0)
    moviesToShow = moviesToShow.filter(movie =>
      movie.title.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <>
      <NewMovieForm addMovie={addMovie} />
      <GenreRadioButtons {...{ handleRadioButton, genreToShow, history }} />
      <Input
        placeholder="Search a movie"
        onChange={handleChangeSearch}
        value={search}
      />
      <MoviesList movies={moviesToShow} />
    </>
  );
};

const mapStateToProps = state => ({ movies: state.movies });
const mapDispatchToProps = dispatch => ({
  addMovie: movie => {
    dispatch({ type: "ADD_MOVIE", movie });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
