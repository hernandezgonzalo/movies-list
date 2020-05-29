import React from "react";
import styled from "styled-components";

const Input = styled.div`
  font-size: ${props => props.theme.fontSizes.small};
  margin: 0.5em;
  display: inline-block;
`;

const RadioButton = props => {
  return (
    <Input>
      <input
        id={props.id}
        onChange={props.changed}
        value={props.value}
        type="radio"
        checked={props.isSelected}
      />
      <label htmlFor={props.id}>{props.label}</label>
    </Input>
  );
};

export default RadioButton;
