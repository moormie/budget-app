import React, { FC, useState } from "react";
import styled from "styled-components";
import { Header } from "../../Header/Header";
import { MainCard } from "../../MainCard/MainCard";
import { ListCard } from "../../ListCard/ListCard";
import { BottomNavBar } from "../../BottomNavBar/BottomNavBar";
import { mockIncomesData } from "../../../types/mockData";
import { myTheme } from "../../../theme";
import { ItemIcon } from "../../ItemIcon";
import { ColoredIcon } from "../../ColoredIcon/ColoredIcon";
import { IconButton } from "../../IconButton/IconButton";
import { Settings as SettingsIcon } from "../../../assets";
import { Settings } from "../../Settings/Settings";
import fox from "../../../fox.png";
import { AddExpenses } from "../../AddExpenses/AddExpenses";
import { Delayed } from "../../Delayed";
import { Expenses } from "../../../types/Expenses";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  addNew,
  remove,
  selectMonth,
} from "../../../features/expenses/expensesSlice";
import moment from "moment";
import { Alert } from "../../Alert/Alert";
import { SlideUpModal } from "../../SlideUpModal/SlideUpModal";
import { Select } from "../../Select/Select";

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
  const { categoryList } = useAppSelector((state) => state.category);
  const { selectedMonth } = useAppSelector((state) => state.expenses);

  const [selectedExpense, setSelectedExpense] = useState<Expenses>();
  const [isAddNewOpen, setIsAddNewOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const onSelect = (expense: Expenses) => {
    if (expense.id === selectedExpense?.id) {
      setSelectedExpense(undefined);
    } else {
      setSelectedExpense(expense);
    }
  };

  const onAddNew = (newExpense: Expenses) => {
    dispatch(addNew(newExpense));
    setIsAddNewOpen(false);
  };

  const onDelete = () => {
    if (selectedExpense?.id) {
      dispatch(remove(selectedExpense.id));
      setSelectedExpense(undefined);
      setIsDeleteOpen(false);
    }
  };

  const onSelectMonth = (month: string) => {
    dispatch(selectMonth(month));
  };

  return (
    <React.Fragment>
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
            <IconButton onClick={() => setIsSettingsOpen(true)}>
              <SettingsIcon />
            </IconButton>
          }
        />
        <Spacing />
        <MainCard
          totalIncome={mockIncomesData
            .map((data) => data.amount)
            .reduce((a, b) => a + b, 0)}
          totalExpenses={expensesList
            .map((data) => data.amount)
            .reduce((a, b) => a + b, 0)}
        />
        <Spacing />
        <Header
          title={`Transactions 🍂`}
          endElement={
            <Select
              style={{ width: 150 }}
              value={selectedMonth ?? ""}
              setValue={onSelectMonth}
              options={[
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
              ]}
            />
          }
        />
        <Spacing />
        {expensesList.map((data) => (
          <React.Fragment key={data.id}>
            <Delayed visible={!isAddNewOpen && !isSettingsOpen}>
              <ListCard
                icon={
                  <ItemIcon
                    category={categoryList.find(
                      (c) => c.name === data.category
                    )}
                  />
                }
                mainLabel={data.category}
                sublabel={data.note}
                endLabel={`€ ${data.amount}`}
                endSublabel={moment(data.date).format("DD/MM/YYYY")}
                selected={selectedExpense?.id === data.id}
                onSelect={() => onSelect(data)}
                onClickDelete={() => setIsDeleteOpen(true)}
              />
            </Delayed>
            <Spacing />
          </React.Fragment>
        ))}
      </MainContainer>
      <Delayed visible={!isAddNewOpen}>
        <BottomNavBar onClickButton={() => setIsAddNewOpen(true)} />
      </Delayed>
      <Delayed visible={isAddNewOpen}>
        <SlideUpModal onClose={() => setIsAddNewOpen(false)}>
          <AddExpenses categoryList={categoryList} onSave={onAddNew} />
        </SlideUpModal>
      </Delayed>
      <Delayed visible={isDeleteOpen}>
        <Alert
          message={`Delete transaction: ${selectedExpense?.category} - € ${selectedExpense?.amount}`}
          note={selectedExpense?.note}
          onClose={() => setIsDeleteOpen(false)}
          onSubmit={onDelete}
        />
      </Delayed>
      <Delayed visible={isSettingsOpen}>
        <SlideUpModal onClose={() => setIsSettingsOpen(false)}>
          <Settings />
        </SlideUpModal>
      </Delayed>
    </React.Fragment>
  );
};
