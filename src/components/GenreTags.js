import React from "react";
import styled from "styled-components";

const TagsList = styled.div`
  text-align: center;

  ul {
    list-style-type: none;
    padding: 0;
    margin: 10px;
    height: 20px;

    li {
      display: inline;
      margin-right: 10px;
      background-color: ${props => props.theme.colors.primary};
      border-radius: 25px;
      padding: 5px 10px;
      color: ${props => props.theme.colors.light};
    }
  }

  @media (min-width: 768px) {
    order: 4;
    min-width: 100%;
  }
`;

const GenreTags = ({ genres }) => {
  return (
    <TagsList>
      <ul>
        {genres.map((genre, index) => (
          <li key={index}>{genre}</li>
        ))}
      </ul>
    </TagsList>
  );
};

export default GenreTags;
