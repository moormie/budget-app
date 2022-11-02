import { FC } from "react";
import StyledLegend from ".";
import { ExpensesPercentage } from "../../types/Expenses";

interface Props {
  dataList: ExpensesPercentage[];
}

export const Legend: FC<Props> = ({ dataList }) => {
  return (
    <StyledLegend.Container>
      {dataList.map((data) => {
        const category = data.category;
        return (
          <StyledLegend.Item key={data.category.name}>
            <StyledLegend.Marker
              colorPrimary={category?.color.primary ?? ""}
              colorSecondary={category?.color.secondary}
            />
            <span style={{ fontSize: 14 }}>
              {data.category.name} {Math.round(data.percentage)}%
            </span>
          </StyledLegend.Item>
        );
      })}
    </StyledLegend.Container>
  );
};
