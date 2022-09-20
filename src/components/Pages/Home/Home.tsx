import React, { FC, useCallback } from "react";
import styled from "styled-components";
import { Header } from "../../Header/Header";
import { MainCard } from "../../MainCard/MainCard";
import { ListCard } from "../../ListCard/ListCard";
import { BottomNavBar } from "../../BottomNavBar/BottomNavBar";
import { Category } from "../../../types/Category";
import { mockData } from "../../../types/mockData";
import { myTheme } from "../../../theme";
import { ItemIcon } from "./ItemIcon";

const MainContainer = styled.div`
  padding: 40px 24px 60px 24px;
  background-color: ${myTheme.colors.lightGray};
`;

const Spacing = styled.div`
  height: 18px;
`;

export const Home: FC = () => {
  const getListItemIcon = useCallback((category: Category) => {
    return <ItemIcon category={category} />;
  }, []);

  return (
    <React.Fragment>
      <MainContainer>
        <Header />
        <Spacing />
        <MainCard
          totalIncome={2500}
          totalExpenses={mockData
            .map((data) => data.amount)
            .reduce((a, b) => a + b, 0)}
        />
        <Spacing />
        <h3>Transactions</h3>
        {mockData.map((data) => (
          <React.Fragment key={data.id}>
            <ListCard
              icon={getListItemIcon(data.category as Category)}
              mainLabel={data.category}
              endLabel={`€ ${data.amount}`}
              endSublabel={data.date}
            />
            <Spacing />
          </React.Fragment>
        ))}
      </MainContainer>
      <BottomNavBar />
    </React.Fragment>
  );
};
