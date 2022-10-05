import React, { FC, useState } from "react";
import styled from "styled-components";
import { Header } from "../../Header/Header";
import { MainCard } from "../../MainCard/MainCard";
import { ListCard } from "../../ListCard/ListCard";
import { BottomNavBar } from "../../BottomNavBar/BottomNavBar";
import { incomesMockData } from "../../../types/mockData";
import { myTheme } from "../../../theme";
import { ItemIcon } from "../../ItemIcon";
import { ColoredIcon } from "../../ColoredIcon/ColoredIcon";
import { IconButton } from "../../IconButton/IconButton";
import { Settings } from "../../../assets";
import fox from "../../../fox.png";
import { AddExpenses } from "../../AddExpensesModal/AddExpenses";
import { Delayed } from "../../Delayed";
import { Expenses } from "../../../types/Expenses";
import { useAppDispatch } from "../../../app/hooks";
import { addNew } from "../../../features/expenses/expensesSlice";

const MainContainer = styled.div`
  padding: 40px 24px 60px 24px;
  background-color: ${myTheme.colors.lightGray};
`;

const Spacing = styled.div`
  height: 18px;
`;

interface Props {
  expensesList: Expenses[];
}

export const HomeScreen: FC<Props> = ({ expensesList }) => {
  const dispatch = useAppDispatch();
  const [isAddNewOpen, setIsAddNewOpen] = useState(false);

  const onAddNew = (newExpense: Expenses) => {
    dispatch(addNew(newExpense));
    setIsAddNewOpen(false);
  };
  return (
    <React.Fragment>
      <Delayed open={!isAddNewOpen}>
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
            totalIncome={incomesMockData
              .map((data) => data.amount)
              .reduce((a, b) => a + b, 0)}
            totalExpenses={expensesList
              .map((data) => data.amount)
              .reduce((a, b) => a + b, 0)}
          />
          <Spacing />
          <h3>Transactions</h3>
          {expensesList.map((data) => (
            <React.Fragment key={data.id}>
              <ListCard
                icon={<ItemIcon category={data.category} />}
                mainLabel={data.category}
                sublabel={data.note}
                endLabel={`€ ${data.amount}`}
                endSublabel={data.date}
              />
              <Spacing />
            </React.Fragment>
          ))}
        </MainContainer>
      </Delayed>
      <Delayed open={!isAddNewOpen}>
        <BottomNavBar onClickButton={() => setIsAddNewOpen(true)} />
      </Delayed>
      <Delayed open={isAddNewOpen}>
        <AddExpenses onSave={onAddNew} onClose={() => setIsAddNewOpen(false)} />
      </Delayed>
    </React.Fragment>
  );
};
