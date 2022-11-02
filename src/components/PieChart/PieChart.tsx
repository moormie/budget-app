import { FC, useMemo } from "react";
import StyledPieChart from ".";
import { getPieChartBackgroundColor } from "../../helpers/getPieChartBackgroundColor";
import { Category } from "../../types/Category";
import { ExpensesPercentage } from "../../types/Expenses";
import { Legend } from "../Legend/Legend";

interface Props {
  dataList: ExpensesPercentage[];
  categoryList: Category[];
}

export const PieChart: FC<Props> = ({ dataList, categoryList }) => {
  const colors = useMemo(
    () => getPieChartBackgroundColor(dataList, categoryList),
    [dataList, categoryList]
  );

  return (
    <StyledPieChart.Container>
      <StyledPieChart.Item>
        <StyledPieChart.Pie colors={colors}>
          <StyledPieChart.Inner />
        </StyledPieChart.Pie>
      </StyledPieChart.Item>
      <StyledPieChart.Spacing />
      <StyledPieChart.Item>
        <Legend dataList={dataList} categoryList={categoryList} />
      </StyledPieChart.Item>
    </StyledPieChart.Container>
  );
};
