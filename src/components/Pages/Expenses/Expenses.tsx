import React, { FC, useEffect, useState } from "react";
import { Header } from "../../Header/Header";
import { Chart } from "../../Chart/Chart";
import { mockData } from "../../../types/mockData";
import { IconButton } from "../../IconButton/IconButton";
import { CaretLeft } from "../../../assets";
import styled from "styled-components";
import { myTheme } from "../../../theme";
import { Category } from "../../../types/Category";
import { ListCard } from "../../ListCard/ListCard";
import { ItemIcon } from "../../ItemIcon";
import { NavBar } from "../../NavBar/NavBar";

const MainContainer = styled.div`
  padding: 40px 24px 60px 24px;
  background-color: ${myTheme.colors.lightGray};
`;

const Spacing = styled.div`
  height: 18px;
`;

interface Data {
  category: Category;
  amount: number;
}

export const Expenses: FC = () => {
  // TODO - Redux state
  const [amountByCategories, setAmountByCategories] = useState<Data[]>([]);

  useEffect(() => {
    const resultList: Data[] = [];
    mockData.forEach((data) => {
      const exist = resultList.find((r) => r.category === data.category);
      if (exist) {
        exist.amount = exist.amount + data.amount;
      } else {
        resultList.push(data);
      }
    });
    setAmountByCategories(resultList);
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
      />
      <Spacing />
      <NavBar
        elements={["Income", "Expenses"]}
        selectedElement="Expenses"
        onSelectElement={() => {}}
      />
      <Spacing />
      <Chart dataList={amountByCategories} />
      <Spacing />
      {amountByCategories.map((data) => (
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
    </MainContainer>
  );
};
