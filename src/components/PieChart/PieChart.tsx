import { FC, useMemo } from "react";
import styled from "styled-components";
import { getPieChartBackgroundColor } from "../../helpers/getPieChartBackgroundColor";
import { Category } from "../../types/Category";

const Container = styled.div<{ color: string }>`
  height: 250px;
  width: 250px;
  border-radius: 50%;
  background: ${(props) => "conic-gradient(" + props.color + ")"};
  position: relative;
`;

const InnerContainer = styled.div`
  position: absolute;
  background-color: white;
  height: 200px;
  width: 200px;
  top: 25px;
  left: 25px;
  border-radius: 50%;
`;

interface Data {
  category: Category;
  amount: number;
}

interface Props {
  dataList: Data[];
}

export const PieChart: FC<Props> = ({ dataList }) => {
  const color = useMemo(() => getPieChartBackgroundColor(dataList), [dataList]);
  return (
    <Container id="my-pie-chart" color={color}>
      <InnerContainer />
    </Container>
  );
};
