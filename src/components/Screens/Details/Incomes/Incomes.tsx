import moment from "moment";
import React from "react";
import { FC } from "react";
import styled from "styled-components";
import { Cash } from "../../../../assets";
import { Income } from "../../../../types/Income";
import { AmountHeader } from "../../../AmountHeader/AmountHeader";
import { ColoredIcon } from "../../../ColoredIcon/ColoredIcon";
import { ListCard } from "../../../ListCard/ListCard";
import { RoundedFlexContainer } from "../../../RoundedFlexContainer";

const Spacing = styled.div`
  height: 18px;
`;

interface Props {
  dataList: Income[];
}

export const Incomes: FC<Props> = ({ dataList }) => {
  return (
    <>
      <RoundedFlexContainer justify="center">
        <AmountHeader
          amount={dataList
            .map((data) => data.amount)
            .reduce((a, b) => a + b, 0)
            .toFixed(2)}
          date={moment().format("DD MMMM YYYY")}
        />
      </RoundedFlexContainer>
      <Spacing />
      {dataList.map((data) => (
        <React.Fragment key={data.id}>
          <ListCard
            icon={
              <ColoredIcon>
                <Cash />
              </ColoredIcon>
            }
            mainLabel={data.name}
            endLabel={`€ ${data.amount.toFixed(2)}`}
            endSublabel={moment(data.date).format("DD/MM/YYYY")}
          />
          <Spacing />
        </React.Fragment>
      ))}
    </>
  );
};
