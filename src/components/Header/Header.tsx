import { FC } from "react";
import StyledHeader from ".";
import { Settings } from "../../assets";
import { ColoredIcon } from "../ColoredIcon/ColoredIcon";
import { IconButton } from "../IconButton/IconButton";

interface Props {}

export const Header: FC<Props> = () => {
  return (
    <StyledHeader.Container>
      <ColoredIcon />
      <StyledHeader.MiddleContainer>
        <StyledHeader.Subtitle>Welcome!</StyledHeader.Subtitle>
        <StyledHeader.Title>User Name</StyledHeader.Title>
      </StyledHeader.MiddleContainer>
      <IconButton onClick={() => {}}>
        <Settings />
      </IconButton>
    </StyledHeader.Container>
  );
};
