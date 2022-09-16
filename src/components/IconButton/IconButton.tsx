import { FC } from "react";
import { StyledIconButton } from ".";

interface Props {
  onClick: () => void;
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
  colorPrimary?: string;
  colorSecondary?: string;
}

export const IconButton: FC<Props> = ({
  onClick,
  children,
  size = "medium",
  colorPrimary,
  colorSecondary,
}) => {
  return (
    <StyledIconButton
      size={size}
      onClick={onClick}
      colorPrimary={colorPrimary}
      colorSecondary={colorSecondary}
    >
      {children}
    </StyledIconButton>
  );
};
