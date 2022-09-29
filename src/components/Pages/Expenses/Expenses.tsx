import React, { FC, useEffect, useState } from "react";
import { Header } from "../../Header/Header";
import { BarChart } from "../../BarChart/BarChart";
import { expensesMockData, incomesMockData } from "../../../types/mockData";
import { IconButton } from "../../IconButton/IconButton";
import {
  BarChart as BarChartIcon,
  CaretLeft,
  Cash,
  PieChart,
} from "../../../assets";
import styled from "styled-components";
import { myTheme } from "../../../theme";
import { ListCard } from "../../ListCard/ListCard";
import { ItemIcon } from "../../ItemIcon";
import { NavBar } from "../../NavBar/NavBar";
import { SimpleExpenses } from "../../../types/Expenses";
import { ColoredIcon } from "../../ColoredIcon/ColoredIcon";
import { AmountHeader } from "../../AmountHeader/AmountHeader";
import { RoundedFlexContainer } from "../../RoundedFlexContainer";

const MainContainer = styled.div`
  padding: 40px 24px 60px 24px;
  background-color: ${myTheme.colors.lightGray};
`;

const Spacing = styled.div`
  height: 18px;
`;

export const Expenses: FC = () => {
  // TODO - Redux state
  const [selectedTab, setSelectedTab] = useState<string>("Expenses");
  const [expensesByCategories, setExpensesByCategories] = useState<
    SimpleExpenses[]
  >([]);
  const [isBarChart, setIsBarChart] = useState(true);

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
        <>
          <RoundedFlexContainer
            flexDirection="column"
            justify="center"
            align="center"
          >
            <AmountHeader
              amount={expensesMockData
                .map((data) => data.amount)
                .reduce((a, b) => a + b, 0)
                .toFixed(2)}
            />
            <BarChart
              type={isBarChart ? "bar" : "pie"}
              dataList={expensesByCategories}
            />
          </RoundedFlexContainer>
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
      {selectedTab === "Income" && (
        <>
          <RoundedFlexContainer>
            <AmountHeader
              amount={incomesMockData
                .map((data) => data.amount)
                .reduce((a, b) => a + b, 0)
                .toFixed(2)}
            />
          </RoundedFlexContainer>
          <Spacing />
          {incomesMockData.map((data) => (
            <React.Fragment key={data.id}>
              <ListCard
                icon={
                  <ColoredIcon>
                    <Cash />
                  </ColoredIcon>
                }
                mainLabel={data.name}
                endLabel={`€ ${data.amount.toFixed(2)}`}
                endSublabel={data.date}
              />
              <Spacing />
            </React.Fragment>
          ))}
        </>
      )}
    </MainContainer>
  );
};
