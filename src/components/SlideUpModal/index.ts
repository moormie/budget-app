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

const MainContainer = styled.div<{ open?: boolean }>`
  background-color: ${(props) => props.theme.colors.lightGray};
  padding: 24px;
  position: absolute;
  width: 100%;
  box-sizing: border-box;
  top: 40px;
  height: 100vh;
  border-radius: 24px 24px 0 0;
  box-sizing: border-box;
  box-shadow: rgba(17, 17, 17, 0.3) 0px 0px 20px 5px;
  animation: ${(props) => (props.open ? slidein : slideout)} 0.4s ease-in-out;
`;

const StyledModal = {
  MainContainer,
};

export default StyledModal;
