import styled from "styled-components";

const Container = styled.div`
  height: 185px;
  box-sizing: border-box;
  background: linear-gradient(
    to bottom left,
    ${(props) => props.theme.colors.yellow},
    ${(props) => props.theme.colors.dark.orange}
  );
  border-radius: 24px;
  padding: 16px;
  color: ${(props) => props.theme.colors.gray};
`;

const HeaderText = styled.div`
  font-size: 14px;
  margin: 4px;
  text-align: center;
  @media (min-width: 1140px) {
    font-size: 16px;
    font-weight: bold;
  }
`;

const MainText = styled.div`
  font-size: 32px;
  font-weight: 500;
  margin: 16px;
  text-align: center;
`;

const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FooterItem = styled.div`
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const FooterText = styled.p`
  margin: 0px;
  margin-left: 8px;
  font-size: 14px;
`;

const StyledMainCard = {
  Container,
  HeaderText,
  MainText,
  FooterContainer,
  FooterItem,
  FooterText,
};

export default StyledMainCard;
