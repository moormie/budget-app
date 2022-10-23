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

const StyledFilter = {
  Container,
  Title,
  ButtonContainer,
};

export default StyledFilter;
