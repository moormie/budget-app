import moment, { Moment } from "moment";
import React, { FC, useState } from "react";
import StyledExpenses from ".";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { ArrowUpDown, CaretLeft, Sliders } from "../../../assets";
import { remove } from "../../../features/expenses/expensesSlice";
import {
  setAmountFrom,
  setAmountTo,
  setCategories,
  setDateFrom,
  setDateTo,
  setNote,
  setSortValue,
} from "../../../features/filters/filterSlice";
import { Category } from "../../../types/Category";
import { Expenses } from "../../../types/Expenses";
import { SortType } from "../../../types/SortType";
import { Alert } from "../../Alert/Alert";
import { Delayed } from "../../Delayed/Delayed";
import { FilterExpenses } from "../../FilterExpenses/FilterExpenses";
import { Header } from "../../Header/Header";
import { IconButton } from "../../IconButton/IconButton";
import { ItemIcon } from "../../ItemIcon";
import { ListCard } from "../../ListCard/ListCard";
import { SlideUpModal } from "../../SlideUpModal/SlideUpModal";
import { SortExpenses } from "../../SortExpenses/SortExpenses";

interface Props {
  dataList: Expenses[];
  onClickBack: () => void;
}

export const ExpensesList: FC<Props> = ({ dataList, onClickBack }) => {
  const dispatch = useAppDispatch();
  const { sortValue } = useAppSelector((state) => state.filter);

  const { categories, dateFrom, dateTo, amountFrom, amountTo, note } =
    useAppSelector((state) => state.filter);

  const [isSortOpen, setIsSortOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedExpense, setSelectedExpense] = useState<Expenses>();
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const onSelect = (expense: Expenses) => {
    if (expense.id === selectedExpense?.id) {
      setSelectedExpense(undefined);
    } else {
      setSelectedExpense(expense);
    }
  };

  const onSubmitSort = (value: string) => {
    dispatch(setSortValue(value as SortType));
    setIsSortOpen(false);
  };

  const onResetSort = () => {
    dispatch(setSortValue(undefined));
    setIsSortOpen(false);
  };

  const onSubmitFilter = (
    categories: Category[],
    dateFrom?: Moment | null,
    dateTo?: Moment | null,
    amountFrom?: number,
    amountTo?: number,
    note?: string
  ) => {
    dispatch(setCategories(categories));
    dispatch(setDateFrom(dateFrom ?? null));
    dispatch(setDateTo(dateTo ?? null));
    dispatch(setAmountFrom(amountFrom ?? 0));
    dispatch(
      setAmountTo(amountTo ?? Math.max(...dataList.map((data) => data.amount)))
    );
    dispatch(setNote(note ?? ""));
    setIsFilterOpen(false);
  };

  const onResetFilter = () => {
    categories.length > 0 && dispatch(setCategories([]));
    dateFrom !== null && dispatch(setDateFrom(null));
    dateTo !== null && dispatch(setDateTo(null));
    amountFrom !== 0 && dispatch(setAmountFrom(0));
    amountTo !== undefined &&
      dispatch(setAmountTo(Math.max(...dataList.map((data) => data.amount))));
    !!note && dispatch(setNote(""));
  };

  const onDeleteExpense = () => {
    if (selectedExpense?.id) {
      dispatch(remove(selectedExpense.id));
      setSelectedExpense(undefined);
      setIsDeleteOpen(false);
    }
  };

  return (
    <>
      <StyledExpenses.Container>
        <Header
          title="All Expenses"
          startElement={
            <IconButton onClick={onClickBack}>
              <CaretLeft />
            </IconButton>
          }
          endElement={
            <>
              <IconButton onClick={() => setIsSortOpen(true)}>
                <ArrowUpDown />
              </IconButton>
              <IconButton onClick={() => setIsFilterOpen(true)}>
                <Sliders />
              </IconButton>
            </>
          }
        />
        <StyledExpenses.Spacing />
        {dataList.map((data) => (
          <React.Fragment key={data.id}>
            <Delayed visible={!isSortOpen && !isFilterOpen}>
              <ListCard
                icon={<ItemIcon category={data.category} />}
                mainLabel={data.category}
                sublabel={data.note}
                endLabel={`€ ${data.amount}`}
                endSublabel={moment(data.date).format("DD/MM/YYYY")}
                selected={selectedExpense?.id === data.id}
                onSelect={() => onSelect(data)}
                onClickDelete={() => setIsDeleteOpen(true)}
              />
            </Delayed>
            <StyledExpenses.Spacing />
          </React.Fragment>
        ))}
      </StyledExpenses.Container>
      <Delayed visible={isSortOpen}>
        <SlideUpModal onClose={() => setIsSortOpen(false)}>
          <SortExpenses
            value={sortValue}
            onSubmit={onSubmitSort}
            onReset={onResetSort}
          />
        </SlideUpModal>
      </Delayed>
      <Delayed visible={isFilterOpen}>
        <SlideUpModal onClose={() => setIsFilterOpen(false)}>
          <FilterExpenses
            onSubmit={onSubmitFilter}
            onReset={onResetFilter}
            maxAmount={Math.max(...dataList.map((data) => data.amount))}
            filterValues={{
              categories,
              dateFrom,
              dateTo,
              amountFrom,
              amountTo:
                amountTo ?? Math.max(...dataList.map((data) => data.amount)),
              note: note ?? "",
            }}
          />
        </SlideUpModal>
      </Delayed>
      <Delayed visible={isDeleteOpen}>
        <Alert
          message={`Delete transaction: ${selectedExpense?.category} - € ${selectedExpense?.amount}`}
          note={selectedExpense?.note}
          onClose={() => setIsDeleteOpen(false)}
          onSubmit={onDeleteExpense}
        />
      </Delayed>
    </>
  );
};
