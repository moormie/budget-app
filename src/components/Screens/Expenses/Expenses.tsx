import moment from "moment";
import React, { FC, useState } from "react";
import StyledExpenses from ".";
import { useAppSelector } from "../../../app/hooks";
import { ArrowUpDown, CaretLeft, Sliders } from "../../../assets";
import { Expenses } from "../../../types/Expenses";
import { FilterValues } from "../../../types/FilterValues";
import { mockCategoryData } from "../../../types/mockData";
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
  submitSort: (value: string) => void;
  resetSort: () => void;
  submitFilter: (values: FilterValues) => void;
  resetFilter: () => void;
  deleteExpense: (id: string) => void;
}

export const ExpensesList: FC<Props> = ({
  dataList,
  onClickBack,
  submitSort,
  resetSort,
  submitFilter,
  resetFilter,
  deleteExpense,
}) => {
  const { dataList: allExpenses } = useAppSelector((state) => state.expenses);
  const {
    sortValue,
    categories,
    dateFrom,
    dateTo,
    amountFrom,
    amountTo,
    note,
  } = useAppSelector((state) => state.filter);

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
    submitSort(value);
    setIsSortOpen(false);
  };

  const onResetSort = () => {
    resetSort();
    setIsSortOpen(false);
  };

  const onSubmitFilter = (values: FilterValues) => {
    submitFilter(values);
    setIsFilterOpen(false);
  };

  const onDeleteExpense = () => {
    if (selectedExpense?.id) {
      deleteExpense(selectedExpense.id);
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
                icon={
                  <ItemIcon
                    category={mockCategoryData.find(
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
            onReset={resetFilter}
            maxAmount={Math.max(...allExpenses.map((data) => data.amount))}
            filterValues={{
              categories,
              dateFrom,
              dateTo,
              amountFrom,
              amountTo:
                amountTo ?? Math.max(...allExpenses.map((data) => data.amount)),
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
