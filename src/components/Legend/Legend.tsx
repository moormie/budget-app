import { FC } from "react";
import StyledLegend from ".";
import getColorOfCategory from "../../helpers/getColorOfCategory";
import { ExpensesPercentage } from "../../types/Expenses";

interface Props {
  dataList: ExpensesPercentage[];
}

export const Legend: FC<Props> = ({ dataList }) => {
  return (
    <StyledLegend.Container>
      {dataList.map((data) => {
        const { primary, secondary } = getColorOfCategory(data.category);
        return (
          <StyledLegend.Item key={data.category}>
            <StyledLegend.Marker
              colorPrimary={primary}
              colorSecondary={secondary}
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
