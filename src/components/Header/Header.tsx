import { FC } from "react";
import StyledHeader from ".";

interface Props {
  title?: string;
  subtitle?: string;
  startElement?: JSX.Element;
  endElement?: JSX.Element;
}

export const Header: FC<Props> = ({
  title,
  subtitle,
  startElement,
  endElement,
}) => {
  return (
    <StyledHeader.Container>
      {startElement}
      <StyledHeader.MiddleContainer>
        {subtitle && <StyledHeader.Subtitle>{subtitle}</StyledHeader.Subtitle>}
        {title && <StyledHeader.Title>{title}</StyledHeader.Title>}
      </StyledHeader.MiddleContainer>
      {endElement}
    </StyledHeader.Container>
  );
};
