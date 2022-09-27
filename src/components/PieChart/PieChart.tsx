import { FC, useMemo } from "react";
import styled from "styled-components";
import { getPieChartBackgroundColor } from "../../helpers/getPieChartBackgroundColor";
import { SimpleExpenses } from "../../types/Expenses";

const Container = styled.div<{ color: string }>`
  height: 150px;
  width: 150px;
  border-radius: 50%;
  background: ${(props) => "conic-gradient(" + props.color + ")"};
  position: relative;
`;

const InnerContainer = styled.div`
  position: absolute;
  background-color: white;
  height: 110px;
  width: 110px;
  top: 20px;
  left: 20px;
  border-radius: 50%;
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
