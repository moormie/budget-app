import { FC, useMemo } from "react";
import StyledChart from ".";
import { ChartBarLine } from "../ChartBarLine/ChartBarLine";

interface Data {
  category: string;
  amount: number;
}

interface ChartData {
  dataList: Data[];
}

export const Chart: FC<ChartData> = ({ dataList = [] }) => {
  const sum = useMemo(
    () => dataList.map((data) => data.amount).reduce((a, b) => a + b, 0),
    [dataList]
  );

  return (
    <StyledChart.Container>
      <StyledChart.Header>
        <StyledChart.HeaderText>19 September 2022</StyledChart.HeaderText>
        <StyledChart.HeaderTitle>€ {sum}</StyledChart.HeaderTitle>
      </StyledChart.Header>
      <StyledChart.ChartContainer>
        <StyledChart.AmountContainer>
          {[0, 1, 2, 3, 4, 5].map((e) => (
            <div key={e}>€{sum - (e * sum) / 5}</div>
          ))}
        </StyledChart.AmountContainer>
        <StyledChart.BarItems>
          {dataList.map((data) => {
            return (
              <ChartBarLine
                key={data.category}
                height={(data.amount / sum) * 100}
              />
            );
          })}
        </StyledChart.BarItems>
      </StyledChart.ChartContainer>
    </StyledChart.Container>
  );
};
