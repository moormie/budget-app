import { FC } from "react";
import StyledNavBar from ".";
import { Add, BarChart, Menu } from "../../assets";
import { IconButton } from "../IconButton/IconButton";
import { myTheme } from "../../theme";

export const BottomNavBar: FC = () => {
  return (
    <StyledNavBar.MainContainer>
      <StyledNavBar.IconContainer>
        <Menu color={myTheme.colors.dark.grape} />
      </StyledNavBar.IconContainer>
      <StyledNavBar.ButtonContainer>
        <IconButton
          size="large"
          colorPrimary={myTheme.colors.yellow}
          colorSecondary={myTheme.colors.dark.orange}
          onClick={() => {}}
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
