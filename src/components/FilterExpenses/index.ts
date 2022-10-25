import styled from "styled-components";

const Container = styled.div``;

const Title = styled.div`
  text-align: center;
  padding: 18px;
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 32px;
  justify-content: space-between;
  > * {
    margin: 8px;
  }
`;

const ErrorText = styled.span`
  font-size: 0.8em;
  color: ${(props) => props.theme.colors.red};
  margin-left: 12px;
`;

const Line = styled.hr`
  border: 1px solid #a6a6a6;
`;

const StyledFilter = {
  Container,
  Title,
  ButtonContainer,
  ErrorText,
  Line,
};

export default StyledFilter;
