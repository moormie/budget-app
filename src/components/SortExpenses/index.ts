import styled from "styled-components";

const Title = styled.div`
  text-align: center;
  padding: 18px;
`;

const Spacing = styled.div`
  height: 18px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  > * {
    margin: 8px;
  }
`;

const StyledModal = {
  Title,
  Spacing,
  ButtonContainer,
};

export default StyledModal;
