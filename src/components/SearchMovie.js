import React from "react";
import styled from "styled-components";
import Input from "../components/ui/Input";

const InputSearch = styled(Input)`
  display: flex;
  flex-flow: column;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    flex-flow: row wrap;
  }
`;

const SearchMovie = ({ placeholder, changed, value }) => {
  return (
    <InputSearch placeholder={placeholder} onChange={changed} value={value} />
  );
};

export default SearchMovie;
