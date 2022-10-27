import styled from "styled-components";

const Container = styled.div``;

const Title = styled.div`
  text-align: center;
  padding: 18px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 12px;
  padding: 8px 8px 8px 0;
  margin-bottom: 8px;
`;

const Tag = styled.div<{ colorPrimary?: string; colorSecondary?: string }>`
  background: linear-gradient(
    ${(props) => props.colorPrimary ?? props.theme.colors.gray},
    ${(props) => props.colorSecondary ?? props.theme.colors.gray}
  );
  width: 5px;
  height: 30px;
  border-radius: 0 5px 5px 0;
  margin-right: 8px;
`;

const Line = styled.hr`
  border: 1px solid #a6a6a6;
  margin: 32px 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  > * {
    margin: 8px;
  }
`;

const StyledSettings = {
  Container,
  Title,
  Tag,
  Item,
  Line,
  ButtonContainer,
};

export default StyledSettings;
