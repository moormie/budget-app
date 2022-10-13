import moment from "moment";
import React, { FC } from "react";
import StyledExpenses from ".";
import { ArrowUpDown, CaretLeft, Sliders } from "../../../assets";
import { Expenses } from "../../../types/Expenses";
import { Header } from "../../Header/Header";
import { IconButton } from "../../IconButton/IconButton";
import { ItemIcon } from "../../ItemIcon";
import { ListCard } from "../../ListCard/ListCard";

interface Props {
  dataList: Expenses[];
  onClickBack: () => void;
}

export const ExpensesList: FC<Props> = ({ dataList, onClickBack }) => {
  return (
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
            <IconButton onClick={() => {}}>
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
          <ListCard
            icon={<ItemIcon category={data.category} />}
            mainLabel={data.category}
            sublabel={data.note}
            endLabel={`€ ${data.amount}`}
            endSublabel={moment(data.date).format("DD/MM/YYYY")}
          />
          <StyledExpenses.Spacing />
        </React.Fragment>
      ))}
    </StyledExpenses.Container>
  );
};
