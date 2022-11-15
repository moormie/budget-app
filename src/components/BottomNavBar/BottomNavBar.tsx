import { FC } from "react";
import StyledNavBar from ".";
import { Add, BarChart, Home, Menu, Person } from "../../assets";
import { IconButton } from "../IconButton/IconButton";
import { myTheme } from "../../theme";
import { Link, useLocation } from "react-router-dom";

interface Props {
  onClickButton: () => void;
}

export const BottomNavBar: FC<Props> = ({ onClickButton }) => {
  const location = useLocation();

  const getIconColor = (path: string) => {
    return path === location.pathname
      ? myTheme.colors.dark.grape
      : myTheme.colors.dark.green;
  };

  return (
    <StyledNavBar.MainContainer>
      <StyledNavBar.IconContainer>
        <Link to="/">
          <Home color={getIconColor("/")} width="24" height="24" />
        </Link>
      </StyledNavBar.IconContainer>
      <StyledNavBar.IconContainer>
        <Link to="details">
          <BarChart color={getIconColor("/details")} width="24" height="24" />
        </Link>
      </StyledNavBar.IconContainer>
      <StyledNavBar.IconContainer></StyledNavBar.IconContainer>
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
          <Menu color={getIconColor("/expenses")} width="24" height="24" />
        </Link>
      </StyledNavBar.IconContainer>
      <StyledNavBar.IconContainer>
        <Link to="profile">
          <Person color={getIconColor("/profile")} width="24" height="24" />
        </Link>
      </StyledNavBar.IconContainer>
    </StyledNavBar.MainContainer>
  );
};
