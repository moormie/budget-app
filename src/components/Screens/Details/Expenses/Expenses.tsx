import React, { FC } from "react";
import { Chart } from "../../../Chart/Chart";
import { expensesMockData } from "../../../../types/mockData";
import styled from "styled-components";
import { ListCard } from "../../../ListCard/ListCard";
import { ItemIcon } from "../../../ItemIcon";
import { SimpleExpenses } from "../../../../types/Expenses";
import { AmountHeader } from "../../../AmountHeader/AmountHeader";
import { RoundedFlexContainer } from "../../../RoundedFlexContainer";
import { Header } from "../../../Header/Header";
import { Select } from "../../../Select/Select";
import { SortType } from "../../../../types/SortType";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { setSummarySortValue } from "../../../../features/details/detailsSlice";

const Spacing = styled.div`
  height: 18px;
`;

interface Props {
  isBarChart: boolean;
  expensesByCategories: SimpleExpenses[];
}

export const Expenses: FC<Props> = ({ isBarChart, expensesByCategories }) => {
  const dispatch = useAppDispatch();
  const { summarySortValue } = useAppSelector((state) => state.details);

  const selectSortValue = (value: string) => {
    dispatch(setSummarySortValue(value as SortType));
  };

  return (
    <>
      <RoundedFlexContainer
        flexDirection="column"
        justify="center"
        align="center"
      >
        <AmountHeader
          amount={expensesMockData
            .map((data) => data.amount)
            .reduce((a, b) => a + b, 0)
            .toFixed(2)}
        />
        <Chart
          type={isBarChart ? "bar" : "pie"}
          dataList={expensesByCategories}
        />
      </RoundedFlexContainer>
      <Spacing />
      <Header
        title="Summary by Category"
        endElement={
          <Select
            style={{ width: 190 }}
            value={summarySortValue}
            setValue={selectSortValue}
            options={[
              SortType.CATEGORY,
              SortType.AMOUNT_ASC,
              SortType.AMOUNT_DESC,
            ]}
            placeholder="Sort by"
          />
        }
      />
      <Spacing />

      {expensesByCategories.map((data) => (
        <React.Fragment key={data.category}>
          <ListCard
            icon={<ItemIcon category={data.category} />}
            mainLabel={data.category}
            endLabel={`€ ${data.amount.toFixed(2)}`}
            endSublabel=""
          />
          <Spacing />
        </React.Fragment>
      ))}
    </>
  );
};
