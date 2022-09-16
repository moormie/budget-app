import styled from "styled-components";

const MainContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: ${props => props.theme.colors.gray};
  height: 64px;
  border-radius: 18px 18px 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ButtonContainer = styled.div`
  background-color: ${props => props.theme.colors.lightGray};
  position: absolute;
  bottom: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  left: calc(50% - 25px);
  box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px,
    rgba(17, 17, 26, 0.1) 0px 0px 8px;
`;

const IconContainer = styled.div`
  padding: 20px;
  cursor: pointer;
`;

const StyledNavBar = {
  MainContainer,
  ButtonContainer,
  IconContainer,
};

export default StyledNavBar;
