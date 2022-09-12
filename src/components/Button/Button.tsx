import { FC } from "react";
import StyledButton from ".";

interface ButtonProps {
  label: string;
  icon?: React.ReactNode;
}

export const Button: FC<ButtonProps> = ({ label, icon }) => {
  return (
    <StyledButton.Button>
      <StyledButton.Label>{label}</StyledButton.Label>
    </StyledButton.Button>
  );
};
