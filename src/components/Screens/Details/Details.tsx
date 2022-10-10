import { FC } from "react";
import { Header } from "../../Header/Header";
import { IconButton } from "../../IconButton/IconButton";
import { BarChart as BarChartIcon, CaretLeft, PieChart } from "../../../assets";
import styled from "styled-components";
import { myTheme } from "../../../theme";
import { NavBar } from "../../NavBar/NavBar";
import { SimpleExpenses } from "../../../types/Expenses";
import { Expenses } from "./Expenses";
import { Incomes } from "./Incomes";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  ChartType,
  DetailType,
  setChart,
  setType,
} from "../../../features/details/detailsSlice";

const MainContainer = styled.div`
  padding: 40px 24px 60px 24px;
  background-color: ${myTheme.colors.lightGray};
`;

const Spacing = styled.div`
  height: 18px;
`;

interface Props {
  expensesByCategories: SimpleExpenses[];
  onClickBack: () => void;
}

export const DetailsScreen: FC<Props> = ({
  expensesByCategories,
  onClickBack,
}) => {
  const { type, chart } = useAppSelector((state) => state.details);
  const dispatch = useAppDispatch();

  const selectTab = (tab: string) => {
    dispatch(setType(tab as DetailType));
  };

  const selectChart = (type: ChartType) => {
    dispatch(setChart(type));
  };

  return (
    <MainContainer>
      <Header
        title="Transactions"
        startElement={
          <IconButton onClick={onClickBack}>
            <CaretLeft />
          </IconButton>
        }
        endElement={
          type === DetailType.EXPENSES ? (
            chart === ChartType.BAR ? (
              <IconButton onClick={() => selectChart(ChartType.PIE)}>
                <PieChart />
              </IconButton>
            ) : (
              <IconButton onClick={() => selectChart(ChartType.BAR)}>
                <BarChartIcon />
              </IconButton>
            )
          ) : (
            <></>
          )
        }
      />
      <Spacing />
      <NavBar
        elements={Object.values(DetailType)}
        selectedElement={type}
        onSelectElement={selectTab}
      />
      <Spacing />
      {type === DetailType.EXPENSES && (
        <Expenses
          isBarChart={chart === ChartType.BAR}
          expensesByCategories={expensesByCategories}
        />
      )}
      {type === DetailType.INCOME && <Incomes />}
    </MainContainer>
  );
};
