import { FC } from "react";
import StyledLegend from ".";
import { Category } from "../../types/Category";
import { ExpensesPercentage } from "../../types/Expenses";

interface Props {
  dataList: ExpensesPercentage[];
  categoryList: Category[];
}

export const Legend: FC<Props> = ({ dataList, categoryList }) => {
  return (
    <StyledLegend.Container>
      {dataList.map((data) => {
        const category = categoryList.find((c) => c.name === data.category);
        return (
          <StyledLegend.Item key={data.category}>
            <StyledLegend.Marker
              colorPrimary={category?.color.primary ?? ""}
              colorSecondary={category?.color.secondary}
            />
            <span style={{ fontSize: 14 }}>
              {data.category} {Math.round(data.percentage)}%
            </span>
          </StyledLegend.Item>
        );
      })}
    </StyledLegend.Container>
  );
};
