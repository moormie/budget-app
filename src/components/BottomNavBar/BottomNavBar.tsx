import { FC } from "react";
import StyledNavBar from ".";
import { Add, BarChart, Menu } from "../../assets";
import { IconButton } from "../IconButton/IconButton";
import { myTheme } from "../../theme";
import { Link } from "react-router-dom";

interface Props {
  onClickButton: () => void;
}

export const BottomNavBar: FC<Props> = ({ onClickButton }) => {
  return (
    <StyledNavBar.MainContainer>
      <StyledNavBar.IconContainer>
        <Link to="details">
          <BarChart color={myTheme.colors.dark.grape} width="24" height="24" />
        </Link>
      </StyledNavBar.IconContainer>
      <StyledNavBar.ButtonContainer>
        <IconButton
          size="large"
          colorPrimary={myTheme.colors.yellow}
          colorSecondary={myTheme.colors.dark.orange}
          onClick={onClickButton}
        >
          <Add color={myTheme.colors.lightGray} width="28" height="28" />
        </IconButton>
      </StyledNavBar.ButtonContainer>
      <StyledNavBar.IconContainer>
        <Link to="expenses">
          <Menu color={myTheme.colors.dark.grape} width="24" height="24" />
        </Link>
      </StyledNavBar.IconContainer>
    </StyledNavBar.MainContainer>
  );
};
