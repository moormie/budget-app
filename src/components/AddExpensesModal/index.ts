import styled from "styled-components";

const MainContainer = styled.div`
  background-color: ${(props) => props.theme.colors.lightGray};
  padding: 24px;
  height: 100vh;
`;

const Title = styled.div`
  text-align: center;
  padding: 18px;
`;

const Spacing = styled.div`
  margin-bottom: 18px;
`;

const ButtonContainer = styled.div`
  padding: 48px 0;
`;

const StyledModal = {
  MainContainer,
  Title,
  Spacing,
  ButtonContainer,
};

export default StyledModal;
