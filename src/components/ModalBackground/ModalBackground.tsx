import { FC } from "react";
import styled, { keyframes } from "styled-components";

interface Props {
  visible?: boolean;
  children: React.ReactNode;
}

const fadeIn = keyframes`
0% {
  background:rgba(0,0,0,.0);
}
100% {
  background:rgba(0,0,0,.7);
}
`;
const fadeOut = keyframes`
0% {
  background:rgba(0,0,0,.7);
}
100% {
  background:rgba(0,0,0,.0);
}
`;

const Container = styled.div<{ visible?: boolean }>`
  position: fixed;
  display: flex;
  overflow: auto;
  justify-content: center;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1;
  animation: ${(props) => (props.visible ? fadeIn : fadeOut)} 0.5s
    cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
`;

export const ModalBackground: FC<Props> = ({ visible, children }) => {
  return <Container visible={visible}>{children}</Container>;
};
