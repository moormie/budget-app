import { FC } from "react";
import { StyledIconButton } from ".";

interface Props {
  onClick: () => void;
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
}

export const IconButton: FC<Props> = ({
  onClick,
  children,
  size = "medium",
}) => {
  return (
    <StyledIconButton size={size} onClick={onClick}>
      {children}
    </StyledIconButton>
  );
};
