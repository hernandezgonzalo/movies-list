import React, { useRef, useEffect } from "react";
import styled from "styled-components";

const Input = styled.input`
  background-color: transparent;
  border: none;
  width: 100%;
  font-family: ${props => props.theme.fonts};
  font-size: 1em;
`;

const TableInput = props => {
  const tableInputRef = useRef(null);

  useEffect(() => {
    if (!props.disabled) tableInputRef.current.focus();
  }, [props.disabled]);

  return <Input {...props} ref={tableInputRef} />;
};

export default TableInput;
