import styled from "styled-components";

const ChartContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 16px 0;
  min-height: 150px;
  width: 100%;
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
  ChartContainer,
  AmountContainer,
  BarItems,
};

export default StyledChart;
