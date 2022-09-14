import React, { FC, useCallback, useMemo } from "react";
import styled from "styled-components";
import { Header } from "../Header/Header";
import { MainCard } from "../MainCard/MainCard";
import { ListCard } from "../ListCard/ListCard";
import {
  Car,
  Shopping,
  Home,
  Add,
  Entertainment,
  Health,
  Person,
  Plane,
} from "../../assets";
import { BottomNavBar } from "../BottomNavBar/BottomNavBar";
import { Category } from "../../types/Category";
import { mockData } from "../../types/mockData";

const MainContainer = styled.div`
  padding: 40px 24px 60px 24px;
`;

const Spacing = styled.div`
  height: 18px;
`;

export const MainPage: FC = () => {
  const icon = useCallback((category: Category) => {
    switch (category) {
      case "Food":
        return <Shopping />;
      case "Car":
        return <Car />;
      case "Home":
        return <Home />;
      case "Entertainment":
        return <Entertainment />;
      case "Medical":
        return <Health />;
      case "Personal":
        return <Person />;
      case "Travel":
        return <Plane />;
      default:
        return <Add />;
    }
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
              icon={icon(data.category as Category)}
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
