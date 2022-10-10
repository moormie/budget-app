import React, { FC, useEffect, useState } from "react";
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
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { addNew, remove } from "../../../features/expenses/expensesSlice";
import moment from "moment";
import { Alert } from "../../Alert/Alert";
import { Select } from "../../Select/Select";
import { SortType } from "../../../types/SortType";
import { getSortedExpensesList } from "../../../helpers/getSortedExpensesList";
import { setSortValue } from "../../../features/details/detailsSlice";

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
  const { sortValue } = useAppSelector((state) => state.details);
  const [expenses, setExpenses] = useState(expensesList);
  const [selectedExpense, setSelectedExpense] = useState<Expenses>();
  const [isAddNewOpen, setIsAddNewOpen] = useState(false);

  const onAddNew = (newExpense: Expenses) => {
    dispatch(addNew(newExpense));
    setIsAddNewOpen(false);
  };

  const onDelete = () => {
    if (selectedExpense?.id) {
      dispatch(remove(selectedExpense.id));
      setSelectedExpense(undefined);
    }
  };

  const selectSortValue = (value: string) => {
    dispatch(setSortValue(value as SortType));
  };

  useEffect(() => {
    const resultList = getSortedExpensesList(expensesList, sortValue);
    setExpenses(resultList);
  }, [sortValue, expensesList]);

  return (
    <React.Fragment>
      <Delayed visible={!isAddNewOpen}>
        <MainContainer>
          <Header
            title="John Doe"
            subtitle="Welcome"
            startElement={
              <ColoredIcon
                colorPrimary={myTheme.colors.grape}
                colorSecondary={myTheme.colors.grape}
              >
                <img src={fox} alt="" style={{ width: 36, height: 36 }} />
              </ColoredIcon>
            }
            endElement={
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
          <Header
            title="Transactions"
            endElement={
              <Select
                style={{ width: 190 }}
                value={sortValue}
                setValue={selectSortValue}
                options={Object.values(SortType)}
                placeholder="Sort by"
              />
            }
          />
          <Spacing />
          {expenses.map((data) => (
            <React.Fragment key={data.id}>
              <ListCard
                icon={<ItemIcon category={data.category} />}
                mainLabel={data.category}
                sublabel={data.note}
                endLabel={`€ ${data.amount}`}
                endSublabel={moment(data.date).format("DD/MM/YYYY")}
                onClickDelete={() => setSelectedExpense(data)}
              />
              <Spacing />
            </React.Fragment>
          ))}
        </MainContainer>
      </Delayed>
      <Delayed visible={!isAddNewOpen}>
        <BottomNavBar onClickButton={() => setIsAddNewOpen(true)} />
      </Delayed>
      <Delayed visible={isAddNewOpen}>
        <AddExpenses onSave={onAddNew} onClose={() => setIsAddNewOpen(false)} />
      </Delayed>
      <Delayed visible={selectedExpense !== undefined}>
        <Alert
          message={`Delete transaction: ${selectedExpense?.category} - € ${selectedExpense?.amount}`}
          note={selectedExpense?.note}
          onClose={() => setSelectedExpense(undefined)}
          onSubmit={onDelete}
        />
      </Delayed>
    </React.Fragment>
  );
};
