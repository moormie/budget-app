import React, { FC } from "react";
import { Chart } from "../../../Chart/Chart";
import styled from "styled-components";
import { ListCard } from "../../../ListCard/ListCard";
import { ItemIcon } from "../../../ItemIcon";
import { AmountHeader } from "../../../AmountHeader/AmountHeader";
import { RoundedFlexContainer } from "../../../RoundedFlexContainer";
import { Header } from "../../../Header/Header";
import { ExpensesCategory } from "../../../../types/Expenses";

const Spacing = styled.div`
  height: 18px;
`;

interface Props {
  isBarChart: boolean;
  expensesByCategories: ExpensesCategory[];
}

export const Expenses: FC<Props> = ({ isBarChart, expensesByCategories }) => {
  return (
    <>
      <RoundedFlexContainer
        flexDirection="column"
        justify="center"
        align="center"
      >
        <AmountHeader
          amount={expensesByCategories
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
      <Header title="Summary by Category" />
      <Spacing />

      {expensesByCategories.map((data) => (
        <React.Fragment key={data.category.name}>
          <ListCard
            icon={<ItemIcon category={data.category} />}
            mainLabel={data.category.name}
            endLabel={`€ ${data.amount.toFixed(2)}`}
            endSublabel=""
          />
          <Spacing />
        </React.Fragment>
      ))}
    </>
  );
};
