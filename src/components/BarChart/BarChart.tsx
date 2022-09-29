import { FC } from "react";
import StyledChart from ".";
import getColorOfcategory from "../../helpers/getColorOfCategory";
import { SimpleExpenses } from "../../types/Expenses";
import { BarLine } from "../ChartBarLine/BarLine";
import { PieChart } from "../PieChart/PieChart";

interface Props {
  dataList: SimpleExpenses[];
  type: "bar" | "pie";
}

export const BarChart: FC<Props> = ({ dataList = [], type }) => {
  const max = Math.max(...dataList.map((data) => data.amount));

  return (
    <StyledChart.ChartContainer>
      {type === "bar" && (
        <>
          <StyledChart.AmountContainer>
            {[0, 1, 2, 3].map((e) => (
              <div key={e}>€{Math.round(max - (e * max) / 4)}</div>
            ))}
            <div key="zero">€ 0</div>
          </StyledChart.AmountContainer>
          <StyledChart.BarItems>
            {dataList.map((data, index) => {
              const { primary } = getColorOfcategory(data.category);
              return (
                <BarLine
                  key={index}
                  height={(data.amount / max) * 100}
                  color={primary}
                />
              );
            })}
          </StyledChart.BarItems>
        </>
      )}
      {type === "pie" && <PieChart dataList={dataList} />}
    </StyledChart.ChartContainer>
  );
};
