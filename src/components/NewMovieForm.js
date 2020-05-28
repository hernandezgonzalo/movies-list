import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Submit from "./ui/Submit";

const NewMovieForm = () => {
  const [genres, setGenres] = useState([]);
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    console.log(data.title, genres);
  };

  // add new genre to state
  const handleAddGenre = value => {
    setGenres([...genres, value]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="title" ref={register({ required: true })} />
        {errors.title && <span>This field is required</span>}
        <input
          name="genre"
          onKeyPress={e => {
            if (e.charCode === 13) {
              e.preventDefault(); // avoid submit when enter is pressed
              handleAddGenre(e.target.value);
            }
          }}
        />
        <Submit value={"Add movie"} />
      </form>
      <ul>
        {genres.map((genre, index) => (
          <li key={index}>{genre}</li>
        ))}
      </ul>
    </div>
  );
};

export default NewMovieForm;
