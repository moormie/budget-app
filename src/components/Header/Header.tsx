import { FC } from "react";
import StyledHeader from ".";

interface Props {
  title?: string;
  subtitle?: string;
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
}

export const Header: FC<Props> = ({ title, subtitle, startIcon, endIcon }) => {
  return (
    <StyledHeader.Container>
      {startIcon}
      <StyledHeader.MiddleContainer>
        {subtitle && <StyledHeader.Subtitle>{subtitle}</StyledHeader.Subtitle>}
        {title && <StyledHeader.Title>{title}</StyledHeader.Title>}
      </StyledHeader.MiddleContainer>
      {endIcon}
    </StyledHeader.Container>
  );
};
