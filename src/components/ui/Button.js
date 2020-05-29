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

  &:hover {
    cursor: pointer;
  }

  ${({ small }) =>
    small &&
    `
    padding: 0.25em;
    font-weight: normal;
    border-width: 1px;
    font-size: 0.8em
  `}
`;

const Submit = ({ value, type, small, click }) => {
  return <Button type={type} value={value} small={small} onClick={click} />;
};

export default Submit;
