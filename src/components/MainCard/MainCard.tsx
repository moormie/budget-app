import { FC } from "react";
import StyledMainCard from ".";
import { Footer } from "./Footer";

interface Props {
  totalExpenses: number;
  totalIncome: number;
}

export const MainCard: FC<Props> = ({ totalExpenses, totalIncome }) => {
  return (
    <StyledMainCard.Container>
      <StyledMainCard.HeaderText>Total Balance</StyledMainCard.HeaderText>
      <StyledMainCard.MainText>
        € {totalIncome - totalExpenses}
      </StyledMainCard.MainText>
      <StyledMainCard.FooterContainer>
        <Footer type="Income" amount={totalIncome} />
        <Footer type="Expenses" amount={totalExpenses} />
      </StyledMainCard.FooterContainer>
    </StyledMainCard.Container>
  );
};
