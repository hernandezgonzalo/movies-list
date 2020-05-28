import React from "react";

const ListItem = ({ movie }) => (
  <tr>
    <td>
      <input type="checkbox" checked={movie.watched} readOnly />
    </td>
    <td>{movie.title}</td>
    <td>
      {movie.genres.map((genre, index) => (
        <span key={index}>{genre}</span>
      ))}
    </td>
  </tr>
);

export default ListItem;
