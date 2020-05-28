import React from "react";
import { connect } from "react-redux";
import MoviesList from "../components/MoviesList";
import NewMovieForm from "../components/NewMovieForm";

const Home = ({ movies }) => {
  return (
    <>
      <NewMovieForm />
      <MoviesList movies={movies} />
    </>
  );
};

const mapStateToProps = state => ({ movies: state.movies });

export default connect(mapStateToProps)(Home);
