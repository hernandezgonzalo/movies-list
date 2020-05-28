import React from "react";
import ListItem from "./ListItem";
import styled from "styled-components";

const Table = styled.table`
  border-collapse: collapse;

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
