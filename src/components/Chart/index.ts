import styled from "styled-components";

const Container = styled.div`
  padding: 16px;
  border-radius: ${props => props.theme.borderRadius};
  box-sizing: border-box;
  width: 100%;
  background-color: white;
  box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px,
    rgba(17, 17, 26, 0.1) 0px 0px 8px;
`;
const Header = styled.div`
  text-align: center;
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

const ChartContainer = styled.div`
  display: flex;
  margin: 16px 0;
  min-height: 150px;
`;

const AmountContainer = styled.div`
  width: 60px;
  text-align: center;
  display: flex;
  flex-direction: column;
  min-height: 150px;
  justify-content: space-between;
  font-size: 12px;
  line-height: 12px;
`;

const BarItems = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: space-around;
  margin: 4px;
`;

const StyledChart = {
  Container,
  Header,
  HeaderText,
  HeaderTitle,
  ChartContainer,
  AmountContainer,
  BarItems,
};

export default StyledChart;
