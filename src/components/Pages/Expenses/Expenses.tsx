import React, { FC, useEffect, useState } from "react";
import { Header } from "../../Header/Header";
import { Chart } from "../../Chart/Chart";
import { expensesMockData } from "../../../types/mockData";
import { IconButton } from "../../IconButton/IconButton";
import { BarChart, CaretLeft, PieChart } from "../../../assets";
import styled from "styled-components";
import { myTheme } from "../../../theme";
import { ListCard } from "../../ListCard/ListCard";
import { ItemIcon } from "../../ItemIcon";
import { NavBar } from "../../NavBar/NavBar";
import { SimpleExpenses } from "../../../types/Expenses";

const MainContainer = styled.div`
  padding: 40px 24px 60px 24px;
  background-color: ${myTheme.colors.lightGray};
`;

const Spacing = styled.div`
  height: 18px;
`;

interface Income {
  title: string;
  amount: number;
}

export const Expenses: FC = () => {
  // TODO - Redux state
  const [selectedTab, setSelectedTab] = useState<string>("Expenses");
  const [expensesByCategories, setExpensesByCategories] = useState<
    SimpleExpenses[]
  >([]);
  const [isBarChart, setIsBarChart] = useState(true);
  const [income, setIncome] = useState<Income[]>([]);

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

  return (
    <MainContainer>
      <Header
        title="Transactions"
        startIcon={
          <IconButton onClick={() => {}}>
            <CaretLeft />
          </IconButton>
        }
        endIcon={
          isBarChart ? (
            <IconButton onClick={() => setIsBarChart(!isBarChart)}>
              <BarChart />
            </IconButton>
          ) : (
            <IconButton onClick={() => setIsBarChart(!isBarChart)}>
              <PieChart />
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
      {selectedTab === "Expenses" && (
        <>
          <Spacing />
          <Chart
            type={isBarChart ? "bar" : "pie"}
            dataList={expensesByCategories}
          />
          <Spacing />
          {expensesByCategories.map((data) => (
            <React.Fragment key={data.category}>
              <ListCard
                icon={<ItemIcon category={data.category} />}
                mainLabel={data.category}
                endLabel={`€ ${data.amount.toFixed(2)}`}
                endSublabel=""
              />
              <Spacing />
            </React.Fragment>
          ))}
        </>
      )}
    </MainContainer>
  );
};
