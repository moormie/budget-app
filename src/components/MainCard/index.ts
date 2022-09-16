import styled from "styled-components";

const Container = styled.div`
  background-color: ${props => props.theme.colors.lightGray};
  border-radius: ${props => props.theme.borderRadius};
  padding: 16px;
`;

const HeaderText = styled.div`
  font-size: 14px;
  margin: 4px;
  text-align: center;
`;
const MainText = styled.div`
  font-size: 32px;
  font-weight: 500;
  margin: 8px;
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
