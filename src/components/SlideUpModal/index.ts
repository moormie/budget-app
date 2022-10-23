import styled, { keyframes } from "styled-components";

const slidein = keyframes`
  from {
    visibility: hidden;
    opacity: 0;
    z-index: -1;
    top: 100vh;
  }
  to {
    z-index: 20;
    top: 40px;
  }`;

const slideout = keyframes`
  from {
    z-index: 20;
    top: 40px;
  }
  to {
    visibility: hidden;
    opacity: 0;
    z-index: -1;
    top: 100vh;
  }`;

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

const MainContainer = styled.div<{ visible?: boolean }>`
  background-color: ${(props) => props.theme.colors.lightGray};
  padding: 24px;
  position: absolute;
  width: 100%;
  box-sizing: border-box;
  top: 40px;
  min-height: calc(100vh - 40px);
  border-radius: 24px 24px 0 0;
  box-sizing: border-box;
  box-shadow: rgba(17, 17, 17, 0.3) 0px 0px 20px 5px;
  animation: ${(props) => (props.visible ? slidein : slideout)} 0.4s ease-in-out;
`;

const StyledModal = {
  Container,
  MainContainer,
};

export default StyledModal;
