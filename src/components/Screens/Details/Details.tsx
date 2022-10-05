import { FC, useState } from "react";
import { Header } from "../../Header/Header";
import { IconButton } from "../../IconButton/IconButton";
import { BarChart as BarChartIcon, CaretLeft, PieChart } from "../../../assets";
import styled from "styled-components";
import { myTheme } from "../../../theme";
import { NavBar } from "../../NavBar/NavBar";
import { SimpleExpenses } from "../../../types/Expenses";
import { Expenses } from "./Expenses";
import { Incomes } from "./Incomes";

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
  const [selectedTab, setSelectedTab] = useState<string>("Expenses");
  const [isBarChart, setIsBarChart] = useState(true);

  return (
    <MainContainer>
      <Header
        title="Transactions"
        startIcon={
          <IconButton onClick={onClickBack}>
            <CaretLeft />
          </IconButton>
        }
        endIcon={
          selectedTab === "Expenses" ? (
            isBarChart ? (
              <IconButton onClick={() => setIsBarChart(!isBarChart)}>
                <PieChart />
              </IconButton>
            ) : (
              <IconButton onClick={() => setIsBarChart(!isBarChart)}>
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
        elements={["Income", "Expenses"]}
        selectedElement={selectedTab}
        onSelectElement={setSelectedTab}
      />
      <Spacing />
      {selectedTab === "Expenses" && (
        <Expenses
          isBarChart={isBarChart}
          expensesByCategories={expensesByCategories}
        />
      )}
      {selectedTab === "Income" && <Incomes />}
    </MainContainer>
  );
};
