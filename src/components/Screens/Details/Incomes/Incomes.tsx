import React from "react";
import { FC } from "react";
import styled from "styled-components";
import { Cash } from "../../../../assets";
import { mockIncomesData } from "../../../../types/mockData";
import { AmountHeader } from "../../../AmountHeader/AmountHeader";
import { ColoredIcon } from "../../../ColoredIcon/ColoredIcon";
import { ListCard } from "../../../ListCard/ListCard";
import { RoundedFlexContainer } from "../../../RoundedFlexContainer";

const Spacing = styled.div`
  height: 18px;
`;

interface Props {}

export const Incomes: FC<Props> = () => {
  return (
    <>
      <RoundedFlexContainer justify="center">
        <AmountHeader
          amount={mockIncomesData
            .map((data) => data.amount)
            .reduce((a, b) => a + b, 0)
            .toFixed(2)}
        />
      </RoundedFlexContainer>
      <Spacing />
      {mockIncomesData.map((data) => (
        <React.Fragment key={data.id}>
          <ListCard
            icon={
              <ColoredIcon>
                <Cash />
              </ColoredIcon>
            }
            mainLabel={data.name}
            endLabel={`€ ${data.amount.toFixed(2)}`}
            endSublabel={data.date}
          />
          <Spacing />
        </React.Fragment>
      ))}
    </>
  );
};
