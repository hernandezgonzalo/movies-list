import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { connect } from "react-redux";

const Delete = styled(FontAwesomeIcon)`
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.colors.secondary};
  }
`;

const ListItem = ({ movie, removeMovie, toggleWatched }) => {
  const [watched, setWatched] = useState(movie.watched);

  const handleRemove = () => removeMovie(movie);
  const handleToggleWatched = () => toggleWatched(movie);

  useEffect(() => {
    setWatched(movie.watched);
  }, [movie]);

  return (
    <tr>
      <td>
        <input
          type="checkbox"
          checked={watched}
          onChange={handleToggleWatched}
        />
      </td>
      <td>{movie.title}</td>
      <td>
        {movie.genres.map((genre, index) => (
          <span key={index}>
            {genre}
            {movie.genres.length - 1 > index && ", "}
          </span>
        ))}
      </td>
      <td>
        <Delete icon={faTrash} onClick={handleRemove} />
      </td>
    </tr>
  );
};

const mapDispatchToProps = dispatch => ({
  removeMovie: movie => dispatch({ type: "REMOVE_MOVIE", movie }),
  toggleWatched: movie => dispatch({ type: "TOGGLE_WATCHED", movie })
});

export default connect(null, mapDispatchToProps)(ListItem);
