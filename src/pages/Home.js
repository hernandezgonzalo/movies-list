import React from "react";
import { connect } from "react-redux";
import MoviesList from "../components/MoviesList";
import NewMovieForm from "../components/NewMovieForm";

const Home = ({ movies, addMovie }) => {
  return (
    <>
      <NewMovieForm addMovie={addMovie} />
      <MoviesList movies={movies} />
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
