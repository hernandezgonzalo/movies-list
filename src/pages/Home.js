import React from "react";
import { connect } from "react-redux";
import MoviesList from "../components/MoviesList";

const Home = ({ movies }) => {
  return (
    <>
      <MoviesList movies={movies} />
    </>
  );
};

const mapStateToProps = state => ({ movies: state.movies });

export default connect(mapStateToProps)(Home);
