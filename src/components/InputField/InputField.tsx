import { forwardRef } from "react";
import StyledInputField from ".";

interface Props {
  value?: string;
  setValue?: (value: string) => void;
  type?: "text" | "date" | "number";
  endAdornment?: React.ReactNode;
  placeholder?: string;
  disabled?: boolean;
}

export const InputField = forwardRef<HTMLInputElement, Props>(
  (
    { type = "text", endAdornment, placeholder, value, setValue, disabled },
    ref
  ) => {
    const onChange = (value: string) => {
      setValue && setValue(value);
    };

    return (
      <StyledInputField.Container>
        <StyledInputField.InputField
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          ref={ref}
        />
        {endAdornment && (
          <StyledInputField.EndAdornment>
            {endAdornment}
          </StyledInputField.EndAdornment>
        )}
      </StyledInputField.Container>
    );
  }
);
