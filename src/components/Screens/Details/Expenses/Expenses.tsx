import React, { FC } from "react";
import { Chart } from "../../../Chart/Chart";
import styled from "styled-components";
import { ListCard } from "../../../ListCard/ListCard";
import { ItemIcon } from "../../../ItemIcon";
import { AmountHeader } from "../../../AmountHeader/AmountHeader";
import { RoundedFlexContainer } from "../../../RoundedFlexContainer";
import { Header } from "../../../Header/Header";
import { ExpensesCategory } from "../../../../types/Expenses";
import moment from "moment";

const Spacing = styled.div`
  height: 18px;
`;

const ListCardContainer = styled.div`
  @media (min-width: 1120px) {
    height: calc(100vh - 604px);
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
      background: ${(props) => props.theme.colors.dark.gray};
      border-radius: 3px;
    }
  }
`;
interface Props {
  isBarChart: boolean;
  expensesByCategories: ExpensesCategory[];
  date: string;
}

export const Expenses: FC<Props> = ({
  isBarChart,
  expensesByCategories,
  date,
}) => {
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
          date={`${date} ${moment().year()}`}
        />
        <Chart
          type={isBarChart ? "bar" : "pie"}
          dataList={expensesByCategories}
        />
      </RoundedFlexContainer>
      <Spacing />
      <Header title="Summary by Category" />
      <Spacing />
      <ListCardContainer>
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
      </ListCardContainer>
    </>
  );
};
