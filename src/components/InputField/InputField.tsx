import { forwardRef } from "react";
import StyledInputField from ".";

interface Props {
  value?: string;
  setValue?: (value: string) => void;
  type?: "text" | "date" | "number";
  endAdornment?: React.ReactNode;
  placeholder?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export const InputField = forwardRef<HTMLInputElement, Props>(
  (
    {
      type = "text",
      endAdornment,
      placeholder,
      value,
      setValue,
      disabled,
      onClick,
    },
    ref
  ) => {
    const onChange = (value: string) => {
      setValue && setValue(value);
    };

    return (
      <StyledInputField.Container onClick={onClick} ref={ref}>
        <StyledInputField.InputField
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
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
