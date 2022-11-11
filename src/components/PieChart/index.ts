import styled, { keyframes } from "styled-components";
import { PieChartColors } from "../../helpers/getPieChartBackgroundColor";

const spin = keyframes`
  from {
    opacity: 0;
  }
  to {
    transform: rotate(360deg);
  }
`;

const grow = keyframes`
  from {
    height: 0px;
    width: 0px;
    top: 75px;
    left: 75px
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 230px;
`;

const Item = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Pie = styled.div<{ colors: PieChartColors[] }>`
  height: 150px;
  width: 150px;
  border-radius: 50%;
  background: ${(props) =>
    `conic-gradient(${props.colors
      .map((color) => `${color.color} ${color.start} ${color.end}`)
      .join(",")})`};
  position: relative;
  animation: ${spin} 2s ease-out;
`;

const Inner = styled.div`
  position: absolute;
  background-color: white;
  height: 110px;
  width: 110px;
  top: 20px;
  left: 20px;
  border-radius: 50%;
  animation: ${grow} 2s ease-out;
`;

const Spacing = styled.div`
  height: 16px;
`;

const StyledPieChart = {
  Container,
  Item,
  Pie,
  Inner,
  Spacing,
};

export default StyledPieChart;
