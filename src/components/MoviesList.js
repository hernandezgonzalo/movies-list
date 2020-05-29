import React from "react";
import ListItem from "./ListItem";
import styled from "styled-components";

const Table = styled.table`
  border-collapse: collapse;
  margin: 0 auto;
  width: 100%;

  th {
    background: #ccc;
  }

  th,
  td {
    border: 1px solid #ccc;
    padding: 8px;
  }

  tr:nth-child(even) {
    background: #efefef;
  }

  @media (min-width: 768px) {
    max-width: 768px;
  }
`;

const MoviesList = ({ movies }) => {
  return (
    <Table>
      <tbody>
        {movies.map((movie, index) => (
          <ListItem key={index} movie={movie} />
        ))}
      </tbody>
    </Table>
  );
};

export default MoviesList;
