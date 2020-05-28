import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Submit from "./ui/Submit";
import GenreTags from "./GenreTags";
import Input from "./ui/Input";

const NewMovieForm = ({ addMovie }) => {
  const [genres, setGenres] = useState([]);
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = ({ title }) => {
    addMovie({ title, genres });
    setGenres([]);
  };

  // add new genre to state
  const handleAddGenre = value => {
    const newGenre = value.toLowerCase();
    if (!genres.includes(newGenre)) setGenres([...genres, newGenre]); // add genre if it is not already in the list
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          name="title"
          placeholder="Title"
          ref={register({ required: true })}
        />
        {errors.title && <span>This field is required</span>}
        <Input
          name="genre"
          placeholder="Genre"
          onKeyPress={e => {
            if (e.charCode === 13) {
              e.preventDefault(); // avoid submit when enter is pressed
              handleAddGenre(e.target.value);
            }
          }}
        />
        <Submit value={"Add movie"} />
        <GenreTags genres={genres} />
      </form>
    </div>
  );
};

export default NewMovieForm;
