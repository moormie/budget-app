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

const InputContainer = styled.div`
  border-radius: 14px;
  margin-bottom: 16px;
  box-shadow: rgb(17 17 17 / 8%) 0px 6px 13px 0px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  > * {
    margin: 8px;
  }
`;

const StyledModal = {
  Modal,
  InputContainer,
  ButtonContainer,
};

export default StyledModal;
