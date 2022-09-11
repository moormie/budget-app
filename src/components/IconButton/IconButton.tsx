import { FC } from "react";
import { StyledIconButton } from ".";

interface Props {
  onClick: () => void;
  children: React.ReactNode;
}

export const IconButton: FC<Props> = ({ onClick, children }) => {
  return <StyledIconButton onClick={onClick}>{children}</StyledIconButton>;
};
