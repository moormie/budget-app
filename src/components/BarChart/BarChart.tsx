import { FC } from "react";
import StyledChart from ".";
import { SimpleExpenses } from "../../types/Expenses";
import { mockCategoryData } from "../../types/mockData";
import { BarLine } from "../ChartBarLine/BarLine";

interface Props {
  dataList: SimpleExpenses[];
}

export const BarChart: FC<Props> = ({ dataList = [] }) => {
  const max = Math.max(...dataList.map((data) => data.amount));

  return (
    <>
      {max > 0 && (
        <StyledChart.AmountContainer>
          {[0, 1, 2, 3].map((e) => (
            <div key={e}>€{Math.round(max - (e * max) / 4)}</div>
          ))}
          <div key="zero">€ 0</div>
        </StyledChart.AmountContainer>
      )}
      <StyledChart.BarItems>
        {dataList.map((data, index) => {
          const category = mockCategoryData.find(
            (c) => c.name === data.category
          );
          const primary = category?.color.primary;
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
  );
};
