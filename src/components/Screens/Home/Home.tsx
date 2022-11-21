import React, { FC, useState } from "react";
import styled from "styled-components";
import { Header } from "../../Header/Header";
import { MainCard } from "../../MainCard/MainCard";
import { ListCard } from "../../ListCard/ListCard";
import { myTheme } from "../../../theme";
import { ItemIcon } from "../../ItemIcon";
import { ColoredIcon } from "../../ColoredIcon/ColoredIcon";
import { IconButton } from "../../IconButton/IconButton";
import { Settings as SettingsIcon } from "../../../assets";
import { Settings } from "../../Settings/Settings";
import fox from "../../../fox.png";
import { Delayed } from "../../Delayed";
import { Expenses } from "../../../types/Expenses";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { remove, selectMonth } from "../../../features/expenses/expensesSlice";
import moment from "moment";
import { Alert } from "../../Alert/Alert";
import { SlideUpModal } from "../../SlideUpModal/SlideUpModal";
import { Select } from "../../Select/Select";
import { updateList } from "../../../features/category/categorySlice";
import { Category } from "../../../types/Category";

const MainContainer = styled.div`
  padding: 24px;
  @media (max-width: 1120px) {
    padding-bottom: 60px;
  }
`;

const Spacing = styled.div`
  height: 18px;
`;

const ListCardContainer = styled.div`
  @media (min-width: 1120px) {
    height: calc(100vh - 360px);
    overflow: auto;
    ::-webkit-scrollbar {
      width: 5px;
      margin-left: 8px;
    }
    ::-webkit-scrollbar-track {
      background: ${(props) => props.theme.colors.lightGray};
      border-radius: 4px;
    }
    ::-webkit-scrollbar-thumb {
      background: ${(props) => props.theme.colors.gray};
      border-radius: 3px;
    }
  }
`;

interface Props {
  expensesList: Expenses[];
}

export const HomeScreen: FC<Props> = ({ expensesList }) => {
  const dispatch = useAppDispatch();
  const { categoryList } = useAppSelector((state) => state.category);
  const { selectedMonth } = useAppSelector((state) => state.expenses);
  const { allIncomes } = useAppSelector((state) => state.incomes);

  const [selectedExpense, setSelectedExpense] = useState<Expenses>();
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const onSelect = (expense: Expenses) => {
    if (expense.id === selectedExpense?.id) {
      setSelectedExpense(undefined);
    } else {
      setSelectedExpense(expense);
    }
  };

  const onDeleteExpense = () => {
    if (selectedExpense?.id) {
      dispatch(remove(selectedExpense.id));
      setSelectedExpense(undefined);
      setIsDeleteOpen(false);
    }
  };

  const onSelectMonth = (month: string) => {
    dispatch(selectMonth(month));
  };

  const onUpdateCategories = (categories: Category[]) => {
    dispatch(updateList(categories));
    setIsSettingsOpen(false);
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
          totalIncome={allIncomes
            .filter(
              (income) =>
                income.date.year() === moment().year() &&
                income.date.format("MMMM") === selectedMonth
            )
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
              options={moment.months()}
            />
          }
        />
        <Spacing />
        <ListCardContainer>
          {expensesList.map((data) => (
            <React.Fragment key={data.id}>
              <Delayed visible={!isSettingsOpen}>
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
        </ListCardContainer>
      </MainContainer>

      <Delayed visible={isDeleteOpen}>
        <Alert
          message={`Delete transaction: ${selectedExpense?.category} - € ${selectedExpense?.amount}`}
          note={selectedExpense?.note}
          onClose={() => setIsDeleteOpen(false)}
          onSubmit={onDeleteExpense}
        />
      </Delayed>
      <Delayed visible={isSettingsOpen}>
        <SlideUpModal onClose={() => setIsSettingsOpen(false)}>
          <Settings onSave={onUpdateCategories} />
        </SlideUpModal>
      </Delayed>
    </React.Fragment>
  );
};
