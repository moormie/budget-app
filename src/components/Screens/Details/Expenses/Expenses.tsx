import React, { FC, useId } from "react";
import { Chart } from "../../../Chart/Chart";
import { expensesMockData } from "../../../../types/mockData";
import styled from "styled-components";
import { ListCard } from "../../../ListCard/ListCard";
import { ItemIcon } from "../../../ItemIcon";
import { SimpleExpenses } from "../../../../types/Expenses";
import { AmountHeader } from "../../../AmountHeader/AmountHeader";
import { RoundedFlexContainer } from "../../../RoundedFlexContainer";

const Spacing = styled.div`
  height: 18px;
`;

interface Props {
  isBarChart: boolean;
  expensesByCategories: SimpleExpenses[];
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
      <h3>Summary by Category</h3>
      {expensesByCategories.map((data) => (
        <React.Fragment key={useId() + data.category}>
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
