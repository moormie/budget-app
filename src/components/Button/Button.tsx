import { FC } from "react";
import StyledButton from ".";

interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  variant?: "success" | "error";
}

export const Button: FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  variant,
}) => {
  return (
    <StyledButton.Button
      onClick={onClick}
      disabled={disabled}
      variant={variant}
    >
      <StyledButton.Label>{label}</StyledButton.Label>
    </StyledButton.Button>
  );
};
