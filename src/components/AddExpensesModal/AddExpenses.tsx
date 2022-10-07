import { FC, useState } from "react";
import StyledModal from ".";
import moment from "moment";
import { Moment } from "moment";
import { Close } from "../../assets";
import { Category } from "../../types/Category";
import { Expenses } from "../../types/Expenses";
import { Button } from "../Button/Button";
import { DatePicker } from "../DatePicker/DatePicker";
import { Header } from "../Header/Header";
import { IconButton } from "../IconButton/IconButton";
import { InputField } from "../InputField/InputField";
import { Select } from "../Select/Select";

interface Props {
  onSave: (newExpense: Expenses) => void;
  onClose: (isOpen: boolean) => void;
  visible?: boolean;
}

export const AddExpenses: FC<Props> = ({ onSave, visible = true, onClose }) => {
  const [amount, setAmount] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [note, setNote] = useState("");
  const [date, setDate] = useState<Moment | null>(moment());

  const onSubmit = () => {
    if (!!amount && category && date) {
      const newExpense: Expenses = {
        // TODO
        id: "001001122",
        amount: Number(amount),
        category: category as Category,
        note,
        date: moment(date),
      };
      onSave(newExpense);
    }
  };

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
      <InputField
        type="number"
        endAdornment="€"
        value={amount}
        setValue={setAmount}
      />
      <StyledModal.Spacing />
      <Select
        value={category}
        options={Object.values(Category).map((e) => e)}
        setValue={setCategory}
        placeholder="Select Category"
      />
      <StyledModal.Spacing />
      <InputField placeholder="Note" value={note} setValue={setNote} />
      <StyledModal.Spacing />
      <DatePicker value={date} setValue={setDate} />
      <StyledModal.Spacing />
      <StyledModal.ButtonContainer>
        <Button
          variant="success"
          label="Save"
          onClick={onSubmit}
          disabled={!amount || !category || !date}
        />
      </StyledModal.ButtonContainer>
    </StyledModal.MainContainer>
  );
};
