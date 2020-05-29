import styled from "styled-components";

const Input = styled.input`
  display: inline-block;
  font-size: 1em;
  margin: 0.5em;
  padding: 0.25em 1em;
  border: 1px solid ${props => props.theme.colors.dark};
  border-radius: 3px;
  font-family: ${props => props.theme.fonts};
`;

export default Input;
