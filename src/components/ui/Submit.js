import React from "react";
import styled from "styled-components";

const Button = styled.input`
  display: inline-block;
  color: ${props => props.theme.colors.secondary};
  font-size: 1em;
  margin: 1em 0.5em;
  padding: 0.25em 1em;
  border: 2px solid ${props => props.theme.colors.secondary};
  border-radius: 3px;
  font-family: ${props => props.theme.fonts};
  font-weight: bold;
`;

const Submit = ({ value }) => {
  return <Button type="submit" value={value} />;
};

export default Submit;
