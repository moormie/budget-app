import { FC, useMemo } from "react";
import styled, { keyframes } from "styled-components";
import { getPieChartBackgroundColor } from "../../helpers/getPieChartBackgroundColor";
import { SimpleExpenses } from "../../types/Expenses";

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

const Container = styled.div<{ color: string }>`
  height: 150px;
  width: 150px;
  border-radius: 50%;
  background: ${(props) => "conic-gradient(" + props.color + ")"};
  position: relative;
  animation: ${spin} 2s ease-out;
`;

const InnerContainer = styled.div`
  position: absolute;
  background-color: white;
  height: 110px;
  width: 110px;
  top: 20px;
  left: 20px;
  border-radius: 50%;
  animation: ${grow} 2s ease-out;
`;

interface Props {
  dataList: SimpleExpenses[];
}

export const PieChart: FC<Props> = ({ dataList }) => {
  const color = useMemo(() => getPieChartBackgroundColor(dataList), [dataList]);
  return (
    <Container id="my-pie-chart" color={color}>
      <InnerContainer />
    </Container>
  );
};
