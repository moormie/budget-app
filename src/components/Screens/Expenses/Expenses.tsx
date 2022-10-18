import moment from "moment";
import React, { FC, useState } from "react";
import StyledExpenses from ".";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { ArrowUpDown, CaretLeft, Sliders } from "../../../assets";
import { setTransactionSortValue } from "../../../features/details/detailsSlice";
import { Expenses } from "../../../types/Expenses";
import { SortType } from "../../../types/SortType";
import { Delayed } from "../../Delayed/Delayed";
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
  const [isSortOpen, setIsSortOpen] = useState(false);
  const dispatch = useAppDispatch();
  const { transactionSortValue } = useAppSelector((state) => state.details);

  const onSubmit = (value: string) => {
    dispatch(setTransactionSortValue(value as SortType));
    setIsSortOpen(false);
  };

  const onReset = () => {
    dispatch(setTransactionSortValue(undefined));
    setIsSortOpen(false);
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
              <IconButton onClick={() => {}}>
                <Sliders />
              </IconButton>
            </>
          }
        />
        <StyledExpenses.Spacing />
        {dataList.map((data) => (
          <React.Fragment key={data.id}>
            <Delayed visible={!isSortOpen}>
              <ListCard
                icon={<ItemIcon category={data.category} />}
                mainLabel={data.category}
                sublabel={data.note}
                endLabel={`€ ${data.amount}`}
                endSublabel={moment(data.date).format("DD/MM/YYYY")}
              />
            </Delayed>
            <StyledExpenses.Spacing />
          </React.Fragment>
        ))}
      </StyledExpenses.Container>
      <Delayed visible={isSortOpen}>
        <SlideUpModal onClose={() => setIsSortOpen(false)}>
          <SortExpenses
            value={transactionSortValue}
            onSubmit={onSubmit}
            onReset={onReset}
          />
        </SlideUpModal>
      </Delayed>
    </>
  );
};
