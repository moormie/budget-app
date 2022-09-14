import { FC } from "react";
import StyledMainCard from "..";
import { ArrowDown, ArrowUp } from "../../../assets";

interface FooterProps {
  type: "Income" | "Expenses";
  amount: number;
}

export const Footer: FC<FooterProps> = ({ type, amount }) => {
  return (
    <StyledMainCard.FooterItem>
      {type === "Income" ? (
        <ArrowUp width="24px" height="24px" />
      ) : (
        <ArrowDown width="24px" height="24px" />
      )}
      <div>
        <StyledMainCard.FooterText>{type}</StyledMainCard.FooterText>
        <StyledMainCard.FooterText>
          <b>€ {amount}</b>
        </StyledMainCard.FooterText>
      </div>
    </StyledMainCard.FooterItem>
  );
};
