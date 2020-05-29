import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import MoviesList from "../components/MoviesList";
import NewMovieForm from "../components/NewMovieForm";
import { useQuery } from "../hooks/useQuery";
import RadioButton from "../components/ui/RadioButton";
import { useHistory } from "react-router-dom";
import Button from "../components/ui/Button";

const Home = ({ movies, addMovie }) => {
  const query = useQuery();
  const history = useHistory();
  const [genreToShow, setGenreToShow] = useState();

  useEffect(() => setGenreToShow(query.get("genre")), [query]);

  const handleRadioButton = genre => history.push(`/?genre=${genre}`);

  let moviesToShow = movies;
  if (genreToShow)
    moviesToShow = movies.filter(movie => movie.genres.includes(genreToShow));

  return (
    <>
      <NewMovieForm addMovie={addMovie} />
      <RadioButton
        changed={() => handleRadioButton("horror")}
        id="1"
        isSelected={genreToShow === "horror"}
        label="Horror"
        value="horror"
      />
      <RadioButton
        changed={() => handleRadioButton("romance")}
        id="2"
        isSelected={genreToShow === "romance"}
        label="Romance"
        value="romance"
      />
      <RadioButton
        changed={() => handleRadioButton("comedy")}
        id="3"
        isSelected={genreToShow === "comedy"}
        label="Comedy"
        value="comedy"
      />
      <Button
        type="button"
        value="Reset"
        small
        click={() => history.push("/")}
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
