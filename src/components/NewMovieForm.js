import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "./ui/Button";
import GenreTags from "./GenreTags";
import Input from "./ui/Input";
import styled from "styled-components";
import { connect } from "react-redux";
import { addMovie } from "../store/actions/moviesActions";

const Form = styled.form`
  display: flex;
  flex-flow: column;
  justify-content: center;

  @media (min-width: 768px) {
    flex-flow: row wrap;
  }
`;

const NewMovieForm = ({ addMovie }) => {
  const [genres, setGenres] = useState([]);
  const { register, handleSubmit, errors, reset } = useForm();

  const onSubmit = ({ title }) => {
    addMovie({ title, genres });
    setGenres([]);
    reset();
  };

  // add new genre to state
  const handleAddGenre = ({ target }) => {
    const newGenre = target.value.toLowerCase();
    if (!genres.includes(newGenre)) setGenres([...genres, newGenre]); // add genre if it is not already in the list
    target.value = "";
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        name="title"
        placeholder="Title"
        ref={register({ required: true })}
      />
      {errors.title && <span>This field is required</span>}
      <GenreTags genres={genres} />
      <Input
        name="genre"
        placeholder="Genre"
        onKeyPress={e => {
          if (e.charCode === 13) {
            e.preventDefault(); // avoid submit when enter is pressed
            handleAddGenre(e);
          }
        }}
      />
      <Button value={"Add movie"} type="submit" />
    </Form>
  );
};

const mapDispatchToProps = dispatch => ({
  addMovie: movie => {
    dispatch(addMovie(movie));
  }
});

export default connect(null, mapDispatchToProps)(NewMovieForm);
