import React from "react";
import styled from "styled-components";

const TagsList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 10px;

  li {
    display: inline;
    margin-right: 10px;
    background-color: ${props => props.theme.colors.primary};
    border-radius: 25px;
    padding: 5px 10px;
    color: ${props => props.theme.colors.light};
  }
`;

const GenreTags = ({ genres }) => {
  return (
    <TagsList>
      {genres.map((genre, index) => (
        <li key={index}>{genre}</li>
      ))}
    </TagsList>
  );
};

export default GenreTags;
