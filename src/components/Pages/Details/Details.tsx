import { FC, useEffect, useState } from "react";
import { Header } from "../../Header/Header";
import { expensesMockData } from "../../../types/mockData";
import { IconButton } from "../../IconButton/IconButton";
import { BarChart as BarChartIcon, CaretLeft, PieChart } from "../../../assets";
import styled from "styled-components";
import { myTheme } from "../../../theme";
import { NavBar } from "../../NavBar/NavBar";
import { SimpleExpenses } from "../../../types/Expenses";
import { Expenses } from "./Expenses";
import { Incomes } from "./Incomes";
import { useNavigate } from "react-router-dom";

const MainContainer = styled.div`
  padding: 40px 24px 60px 24px;
  background-color: ${myTheme.colors.lightGray};
`;

const Spacing = styled.div`
  height: 18px;
`;

export const Details: FC = () => {
  // TODO - Redux state
  const [selectedTab, setSelectedTab] = useState<string>("Expenses");
  const [expensesByCategories, setExpensesByCategories] = useState<
    SimpleExpenses[]
  >([]);
  const [isBarChart, setIsBarChart] = useState(true);
  let navigate = useNavigate();

  useEffect(() => {
    const resultList: SimpleExpenses[] = [];
    expensesMockData.forEach((data) => {
      const exist = resultList.find((r) => r.category === data.category);
      if (exist) {
        exist.amount = exist.amount + data.amount;
      } else {
        resultList.push(data);
      }
    });
    setExpensesByCategories(resultList);
  }, []);

  const onClickBack = () => {
      navigate("/")
  }

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
          isBarChart ? (
            <IconButton onClick={() => setIsBarChart(!isBarChart)}>
              <PieChart />
            </IconButton>
          ) : (
            <IconButton onClick={() => setIsBarChart(!isBarChart)}>
              <BarChartIcon />
            </IconButton>
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
