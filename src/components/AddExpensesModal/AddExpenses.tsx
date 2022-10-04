import { FC } from "react";
import StyledModal from ".";
import { Close } from "../../assets";
import { Category } from "../../types/Category";
import { Button } from "../Button/Button";
import { DatePicker } from "../DatePicker/DatePicker";
import { Header } from "../Header/Header";
import { IconButton } from "../IconButton/IconButton";
import { InputField } from "../InputField/InputField";
import { Select } from "../Select/Select";

interface Props {
  visible?: boolean;
  onClose: (isOpen: boolean) => void;
}

export const AddExpenses: FC<Props> = ({ visible = true, onClose }) => {
  return (
    <StyledModal.MainContainer open={visible}>
      <Header
        endIcon={
          <IconButton onClick={() => onClose(false)}>
            <Close />
          </IconButton>
        }
      />
      <StyledModal.Title>
        <h3>Add Expenses</h3>
      </StyledModal.Title>
      <InputField type="number" endAdornment="€" />
      <StyledModal.Spacing />
      <Select
        value={""}
        options={Object.values(Category).map((e) => e)}
        setValue={() => {}}
        placeholder="Select Category"
      />
      <StyledModal.Spacing />
      <InputField placeholder="Note" />
      <StyledModal.Spacing />
      <DatePicker />
      <StyledModal.Spacing />
      <StyledModal.ButtonContainer>
        <Button label="Save" />
      </StyledModal.ButtonContainer>
    </StyledModal.MainContainer>
  );
};
