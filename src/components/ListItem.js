import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit, faSave } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { connect } from "react-redux";
import {
  toggleWatched,
  removeMovieAction,
  updateMovie
} from "../store/actions/moviesActions";
import TableInput from "./ui/TableInput";

const iconCreator = () => styled(FontAwesomeIcon)`
  cursor: pointer;
  margin: 0 5px;

  &:hover {
    color: ${props => props.theme.colors.secondary};
  }
`;
const Delete = iconCreator();
const Edit = iconCreator();
const Save = iconCreator();

const ListItem = ({ movie, removeMovie, toggleWatched, updateMovie }) => {
  const [watched, setWatched] = useState(movie.watched);
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(movie.title);

  useEffect(() => setTitle(movie.title), [movie]);

  const handleRemove = () => removeMovie(movie);

  const handleToggleWatched = () => toggleWatched(movie);

  const handleEdit = () => setIsEditing(true);

  const handleUpdate = () => {
    updateMovie(title, movie.index);
    setIsEditing(false);
  };

  useEffect(() => {
    setWatched(movie.watched);
  }, [movie]);

  return (
    <tr>
      <td align="center">
        <input
          type="checkbox"
          checked={watched}
          onChange={handleToggleWatched}
        />
      </td>
      <td>
        <TableInput
          name="title"
          value={title}
          disabled={!isEditing}
          onChange={e => setTitle(e.target.value)}
        />
      </td>
      <td>
        {movie.genres.map((genre, index) => (
          <span key={index}>
            {genre}
            {movie.genres.length - 1 > index && ", "}
          </span>
        ))}
      </td>
      <td align="center">
        {isEditing ? (
          <Save icon={faSave} onClick={handleUpdate} />
        ) : (
          <Edit icon={faEdit} onClick={handleEdit} />
        )}
        <Delete icon={faTrash} onClick={handleRemove} />
      </td>
    </tr>
  );
};

const mapDispatchToProps = dispatch => ({
  removeMovie: movie => dispatch(removeMovieAction(movie)),
  toggleWatched: movie => dispatch(toggleWatched(movie)),
  updateMovie: (title, index) => dispatch(updateMovie(title, index))
});

export default connect(null, mapDispatchToProps)(ListItem);
