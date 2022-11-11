import { FC } from "react";
import StyledChart from ".";
import { ExpensesCategory } from "../../types/Expenses";
import { BarLine } from "../ChartBarLine/BarLine";

interface Props {
  dataList: ExpensesCategory[];
}

export const BarChart: FC<Props> = ({ dataList = [] }) => {
  const max = Math.max(...dataList.map((data) => data.amount));

  return (
    <StyledChart.Container>
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
          const { category } = data;
          const { primary, secondary } = category?.color;
          return (
            <BarLine
              key={index}
              height={(data.amount / max) * 100}
              colorPrimary={primary}
              colorSecondary={secondary}
            />
          );
        })}
      </StyledChart.BarItems>
    </StyledChart.Container>
  );
};
