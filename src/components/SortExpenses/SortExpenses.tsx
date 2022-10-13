import { FC, useState } from "react";
import StyledModal from ".";
import { SortType } from "../../types/SortType";
import { Button } from "../Button/Button";
import { Select } from "../Select/Select";

interface Props {
  onSubmit: () => void;
}

export const SortExpenses: FC<Props> = ({ onSubmit }) => {
  const [sortValue, setSortValue] = useState<string>("");

  return (
    <div>
      <StyledModal.Title>
        <h3>Sort Expenses</h3>
        <Select
          value={sortValue}
          setValue={setSortValue}
          options={Object.values(SortType)}
          placeholder="Sort by"
        />
        <StyledModal.Spacing />
        <StyledModal.Spacing />
        <Button label="Save" onClick={onSubmit} />
      </StyledModal.Title>
    </div>
  );
};
