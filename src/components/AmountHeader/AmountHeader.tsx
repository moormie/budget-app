import { FC } from "react";
import StyledAmountHeader from ".";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { BarChart, PieChart } from "../../assets";
import {
  ChartType,
  DetailType,
  setChart,
} from "../../features/details/detailsSlice";
import { IconButton } from "../IconButton/IconButton";

interface Props {
  date: string;
  amount: string;
}

export const AmountHeader: FC<Props> = ({ date, amount }) => {
  const dispatch = useAppDispatch();
  const { type, chart } = useAppSelector((state) => state.details);
  const selectChart = (type: ChartType) => {
    dispatch(setChart(type));
  };
  return (
    <StyledAmountHeader.Header>
      <StyledAmountHeader.HeaderText>{date}</StyledAmountHeader.HeaderText>
      <StyledAmountHeader.HeaderTitle>
        € {amount}
      </StyledAmountHeader.HeaderTitle>
      <StyledAmountHeader.IconContainer>
        {type === DetailType.EXPENSES ? (
          chart === ChartType.BAR ? (
            <IconButton onClick={() => selectChart(ChartType.PIE)}>
              <PieChart />
            </IconButton>
          ) : (
            <IconButton onClick={() => selectChart(ChartType.BAR)}>
              <BarChart />
            </IconButton>
          )
        ) : null}
      </StyledAmountHeader.IconContainer>
    </StyledAmountHeader.Header>
  );
};
