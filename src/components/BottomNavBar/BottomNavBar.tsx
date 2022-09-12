import { FC } from "react";
import StyledNavBar from ".";
import { Add, BarChart, Menu } from "../../assets";
import { IconButton } from "../IconButton/IconButton";

export const BottomNavBar: FC = () => {
  return (
    <StyledNavBar.MainContainer>
      <StyledNavBar.IconContainer>
        <Menu />
      </StyledNavBar.IconContainer>
      <StyledNavBar.ButtonContainer>
        <IconButton size="large" onClick={() => {}}>
          <Add />
        </IconButton>
      </StyledNavBar.ButtonContainer>
      <StyledNavBar.IconContainer>
        <BarChart />
      </StyledNavBar.IconContainer>
    </StyledNavBar.MainContainer>
  );
};
