import styled from "styled-components";

const MainContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: ${(props) => props.theme.colors.yellowGreen};
  height: 72px;
  border-radius: 24px 24px 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: rgb(17 17 17 / 18%) 0px -12px 20px 10px;
`;

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  left: calc(50% - 25px);
  box-shadow: rgb(17 17 17 / 28%) 0px 0px 20px 0px;
`;

const IconContainer = styled.div`
  padding: 28px;
  cursor: pointer;
`;

const StyledNavBar = {
  MainContainer,
  ButtonContainer,
  IconContainer,
};

export default StyledNavBar;
