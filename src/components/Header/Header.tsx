import { FC } from "react";
import StyledHeader from ".";
import { Settings } from "../../assets";
import { ColoredIcon } from "../ColoredIcon/ColoredIcon";
import { IconButton } from "../IconButton/IconButton";
import { myTheme } from "../../theme";
import fox from "../../fox.png";

interface Props {}

export const Header: FC<Props> = () => {
  return (
    <StyledHeader.Container>
      <ColoredIcon
        colorPrimary={myTheme.colors.grape}
        colorSecondary={myTheme.colors.grape}
      >
        <img src={fox} alt="" style={{ width: 36, height: 36 }} />
      </ColoredIcon>
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
