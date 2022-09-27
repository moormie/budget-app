import moment from "moment";
import { FC } from "react";
import StyledAmountHeader from ".";

interface Props {
  amount: string;
}

export const AmountHeader: FC<Props> = ({ amount }) => {
  return (
    <StyledAmountHeader.Header>
      <StyledAmountHeader.HeaderText>
        {moment().format("DD MMMM YYYY")}
      </StyledAmountHeader.HeaderText>
      <StyledAmountHeader.HeaderTitle>
        € {amount}
      </StyledAmountHeader.HeaderTitle>
    </StyledAmountHeader.Header>
  );
};
