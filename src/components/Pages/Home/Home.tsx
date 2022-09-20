import React, { FC } from "react";
import styled from "styled-components";
import { Header } from "../../Header/Header";
import { MainCard } from "../../MainCard/MainCard";
import { ListCard } from "../../ListCard/ListCard";
import { BottomNavBar } from "../../BottomNavBar/BottomNavBar";
import { mockData } from "../../../types/mockData";
import { myTheme } from "../../../theme";
import { ItemIcon } from "../../ItemIcon";
import { ColoredIcon } from "../../ColoredIcon/ColoredIcon";
import { IconButton } from "../../IconButton/IconButton";
import { Settings } from "../../../assets";
import fox from "../../../fox.png";

const MainContainer = styled.div`
  padding: 40px 24px 60px 24px;
  background-color: ${myTheme.colors.lightGray};
`;

const Spacing = styled.div`
  height: 18px;
`;

export const Home: FC = () => {
  return (
    <React.Fragment>
      <MainContainer>
        <Header
          title="John Doe"
          subtitle="Welcome"
          startIcon={
            <ColoredIcon
              colorPrimary={myTheme.colors.grape}
              colorSecondary={myTheme.colors.grape}
            >
              <img src={fox} alt="" style={{ width: 36, height: 36 }} />
            </ColoredIcon>
          }
          endIcon={
            <IconButton onClick={() => {}}>
              <Settings />
            </IconButton>
          }
        />
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
              icon={<ItemIcon category={data.category} />}
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
