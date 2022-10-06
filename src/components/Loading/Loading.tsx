import { FC } from "react";
import styled, { keyframes } from "styled-components";

const load = keyframes`
   0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  position: absolute;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.gray};
  opacity: 0.8;
`;

const LoadingCircle = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;
  &:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border: 6px solid #a50202;
    border-color: ${(props) => props.theme.colors.green} transparent
      ${(props) => props.theme.colors.green} transparent;
    animation: ${load} 1.2s linear infinite;
  }
`;

export const Loading: FC = () => {
  return (
    <Container>
      <LoadingCircle />
    </Container>
  );
};
