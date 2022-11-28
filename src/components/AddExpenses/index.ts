import styled from "styled-components";

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

const ErrorText = styled.div`
  font-size: 1em;
  color: ${(props) => props.theme.colors.red};
  text-align: center;
`;

const StyledModal = {
  Title,
  Spacing,
  ButtonContainer,
  ErrorText,
};

export default StyledModal;
