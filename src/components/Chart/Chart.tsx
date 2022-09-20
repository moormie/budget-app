import moment from "moment";
import { FC, useMemo } from "react";
import StyledChart from ".";
import getColorOfcategory from "../../helpers/getColorOfCategory";
import { Category } from "../../types/Category";
import { ChartBarLine } from "../ChartBarLine/ChartBarLine";

interface Data {
  category: Category;
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

  const max = Math.max(...dataList.map((data) => data.amount));

  return (
    <StyledChart.Container>
      <StyledChart.Header>
        <StyledChart.HeaderText>
          {moment().format("DD MMMM YYYY")}
        </StyledChart.HeaderText>
        <StyledChart.HeaderTitle>€ {sum}</StyledChart.HeaderTitle>
      </StyledChart.Header>
      <StyledChart.ChartContainer>
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
              <ChartBarLine
                key={index}
                height={(data.amount / max) * 100}
                color={primary}
              />
            );
          })}
        </StyledChart.BarItems>
      </StyledChart.ChartContainer>
    </StyledChart.Container>
  );
};
