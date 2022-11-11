import styled from "styled-components";

const Header = styled.div`
  text-align: center;
  width: 100%;
  position: relative;
`;

const HeaderText = styled.p`
  font-size: 14px;
  margin: 4px;
`;
const HeaderTitle = styled.p`
  font-size: 24px;
  margin: 4px;
  font-weight: 500;
`;

const IconContainer = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
`;

const StyledAmountHeader = {
  Header,
  HeaderText,
  HeaderTitle,
  IconContainer,
};

export default StyledAmountHeader;
