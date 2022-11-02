import { FC } from "react";
import StyledChart from ".";
import { useAppSelector } from "../../app/hooks";
import { getCategoriesPercentage } from "../../helpers/getCategoriesAmount";
import { SimpleExpenses } from "../../types/Expenses";
import { BarChart } from "../BarChart/BarChart";
import { PieChart } from "../PieChart/PieChart";

interface Props {
  dataList: SimpleExpenses[];
  type: "bar" | "pie";
}

export const Chart: FC<Props> = ({ dataList = [], type }) => {
  const { categoryList } = useAppSelector((state) => state.category);

  return (
    <StyledChart.ChartContainer>
      {type === "bar" && (
        <BarChart dataList={dataList} categoryList={categoryList} />
      )}
      {type === "pie" && (
        <PieChart
          dataList={getCategoriesPercentage(dataList)}
          categoryList={categoryList}
        />
      )}
    </StyledChart.ChartContainer>
  );
};
