import { FC } from "react";
import StyledMainCard from "..";
import { ArrowDown, ArrowUp } from "../../../assets";
import { myTheme } from "../../../theme";

interface FooterProps {
  type: "Income" | "Expenses";
  amount: number;
}

export const Footer: FC<FooterProps> = ({ type, amount }) => {
  return (
    <StyledMainCard.FooterItem>
      {type === "Income" ? (
        <ArrowUp width="24px" height="24px" color={myTheme.colors.dark.green} />
      ) : (
        <ArrowDown width="24px" height="24px" color={myTheme.colors.dark.red} />
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
