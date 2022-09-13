import { FC } from "react";
import StyledMainCard from ".";
import { Footer } from "./Footer";

export const MainCard: FC = () => {
  return (
    <StyledMainCard.Container>
      <StyledMainCard.HeaderText>Total Balance</StyledMainCard.HeaderText>
      <StyledMainCard.MainText>€ 1000.00</StyledMainCard.MainText>
      <StyledMainCard.FooterContainer>
        <Footer type="Income" amount="€ 3000.0" />
        <Footer type="Expenses" amount="€ 870.00" />
      </StyledMainCard.FooterContainer>
    </StyledMainCard.Container>
  );
};
