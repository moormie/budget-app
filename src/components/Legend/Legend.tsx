import { FC } from "react";
import StyledLegend from ".";
import { ExpensesPercentage } from "../../types/Expenses";
import { mockCategoryData } from "../../types/mockData";

interface Props {
  dataList: ExpensesPercentage[];
}

export const Legend: FC<Props> = ({ dataList }) => {
  return (
    <StyledLegend.Container>
      {dataList.map((data) => {
        const category = mockCategoryData.find((c) => c.name === data.category);
        
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
