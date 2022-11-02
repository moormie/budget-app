import { FC } from "react";
import StyledPieChart from ".";
import { getPieChartBackgroundColor } from "../../helpers/getPieChartBackgroundColor";
import { ExpensesPercentage } from "../../types/Expenses";
import { Legend } from "../Legend/Legend";

interface Props {
  dataList: ExpensesPercentage[];
}

export const PieChart: FC<Props> = ({ dataList }) => {
  return (
    <StyledPieChart.Container>
      <StyledPieChart.Item>
        <StyledPieChart.Pie colors={getPieChartBackgroundColor(dataList)}>
          <StyledPieChart.Inner />
        </StyledPieChart.Pie>
      </StyledPieChart.Item>
      <StyledPieChart.Spacing />
      <StyledPieChart.Item>
        <Legend dataList={dataList} />
      </StyledPieChart.Item>
    </StyledPieChart.Container>
  );
};
