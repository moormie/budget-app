import styled, { keyframes } from "styled-components";

const slidein = keyframes`
  0% {
    transform:scale(.8) translateY(1000px);
    opacity:0;
  }
  100% {
    transform:scale(1) translateY(150px);
    opacity:1;
  }`;

const slideout = keyframes`
  from {
    transform:scale(1) translateY(150px);
    opacity:1;
  }
  to {
    transform:scale(.8) translateY(1000px);
    opacity:0;
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

const Modal = styled.div<{ visible?: boolean }>`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-between;
  padding: 0px 16px 8px;
  position: absolute;
  border-radius: 18px;
  min-width: 240px;
  min-height: 150px;
  background-color: white;
  transform: translateY(50px);
  animation: ${(props) => (props.visible ? slidein : slideout)} 0.5s
    cubic-bezier(0.165, 0.84, 0.44, 1) forwards; ;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  > * {
    margin: 8px;
  }
`;

const StyledModal = {
  Container,
  Modal,
  ButtonContainer,
};

export default StyledModal;
