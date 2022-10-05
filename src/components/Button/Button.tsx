import { FC } from "react";
import StyledButton from ".";

interface ButtonProps {
  label: string;
  onClick: () => void;
  icon?: React.ReactNode;
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = ({ label, onClick, icon, disabled }) => {
  return (
    <StyledButton.Button onClick={onClick} disabled={disabled}>
      <StyledButton.Label>{label}</StyledButton.Label>
    </StyledButton.Button>
  );
};
