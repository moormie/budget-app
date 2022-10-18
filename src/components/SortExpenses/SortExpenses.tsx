import { FC, useState } from "react";
import StyledModal from ".";
import { SortType } from "../../types/SortType";
import { Button } from "../Button/Button";
import { Select } from "../Select/Select";

interface Props {
  value?: string;
  onSubmit: (value: string) => void;
  onReset: () => void;
}

export const SortExpenses: FC<Props> = ({ value, onSubmit, onReset }) => {
  const [selectedValue, setSelectedValue] = useState(value);

  const saveValue = () => {
    selectedValue && onSubmit(selectedValue);
  };

  return (
    <div>
      <StyledModal.Title>
        <h3>Sort Expenses</h3>
      </StyledModal.Title>
      <Select
        value={selectedValue ?? ""}
        setValue={setSelectedValue}
        options={Object.values(SortType)}
        placeholder="Sort by"
      />
      <StyledModal.Spacing />
      <StyledModal.Spacing />
      <StyledModal.ButtonContainer>
        <Button label="Reset" onClick={onReset} />
        <Button
          variant="success"
          disabled={!selectedValue}
          label="Save"
          onClick={saveValue}
        />
      </StyledModal.ButtonContainer>
    </div>
  );
};
