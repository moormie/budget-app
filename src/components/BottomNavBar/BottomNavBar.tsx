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
          <Menu color={myTheme.colors.dark.grape} />
        </Link>
      </StyledNavBar.IconContainer>
      <StyledNavBar.ButtonContainer>
        <IconButton
          size="large"
          colorPrimary={myTheme.colors.yellow}
          colorSecondary={myTheme.colors.dark.orange}
          onClick={onClickButton}
        >
          <Add color={myTheme.colors.lightGray} />
        </IconButton>
      </StyledNavBar.ButtonContainer>
      <StyledNavBar.IconContainer>
        <BarChart color={myTheme.colors.dark.grape} />
      </StyledNavBar.IconContainer>
    </StyledNavBar.MainContainer>
  );
};
