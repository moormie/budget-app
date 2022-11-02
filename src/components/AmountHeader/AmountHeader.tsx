import { FC } from "react";
import StyledAmountHeader from ".";

interface Props {
  date: string;
  amount: string;
}

export const AmountHeader: FC<Props> = ({ date, amount }) => {
  return (
    <StyledAmountHeader.Header>
      <StyledAmountHeader.HeaderText>{date}</StyledAmountHeader.HeaderText>
      <StyledAmountHeader.HeaderTitle>
        € {amount}
      </StyledAmountHeader.HeaderTitle>
    </StyledAmountHeader.Header>
  );
};
