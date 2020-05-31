import React from "react";
import styled from "styled-components";

const LoadingDiv = styled.div`
  position: absolute;
  z-index: 9999;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.light};
`;

const Loading = () => {
  return (
    <LoadingDiv>
      <span>Loading</span>
    </LoadingDiv>
  );
};

export default Loading;
