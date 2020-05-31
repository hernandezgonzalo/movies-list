import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import MoviesList from "../components/MoviesList";
import NewMovieForm from "../components/NewMovieForm";
import { useQuery } from "../hooks/useQuery";
import { useHistory } from "react-router-dom";
import GenreRadioButtons from "../components/GenreRadioButtons";
import SearchMovie from "../components/SearchMovie";
import Loading from "../components/ui/Loading";
import { getMoviesAction } from "../store/actions/moviesActions";

const Home = ({ movies, loading, getMovies }) => {
  const query = useQuery();
  const history = useHistory();
  const [genreToShow, setGenreToShow] = useState();
  const [search, setSearch] = useState("");

  // retrieve the genre from query parameter
  useEffect(() => {
    setGenreToShow(query.get("genre"));
  }, [query]);

  // run the action to get the movies according to genre and search
  useEffect(() => {
    if (genreToShow !== undefined) getMovies(genreToShow, search);
  }, [genreToShow, search, getMovies]);

  const handleRadioButton = genre => history.push(`/?genre=${genre}`);

  const handleChangeSearch = e => setSearch(e.target.value);

  return (
    <div>
      {loading && <Loading />}
      <NewMovieForm />
      <GenreRadioButtons {...{ handleRadioButton, genreToShow, history }} />
      <SearchMovie
        placeholder="Search a movie"
        changed={handleChangeSearch}
        value={search}
      />
      {movies && <MoviesList movies={movies} />}
    </div>
  );
};

const mapStateToProps = state => ({
  movies: state.movies,
  loading: state.loading
});

const mapDispatchToProps = dispatch => ({
  getMovies: (genreToShow, search) => {
    dispatch(getMoviesAction(genreToShow, search));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
