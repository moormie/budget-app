import { FC } from "react";
import StyledInputField from ".";

interface Props {
  type?: "text" | "date" | "number";
  endAdornment?: React.ReactNode;
  placeholder?: string;
}

export const InputField: FC<Props> = ({
  type = "text",
  endAdornment,
  placeholder,
}) => {
  return (
    <StyledInputField.Container>
      <StyledInputField.InputField type={type} placeholder={placeholder} />
      {endAdornment && (
        <StyledInputField.EndAdornment>
          {endAdornment}
        </StyledInputField.EndAdornment>
      )}
    </StyledInputField.Container>
  );
};
