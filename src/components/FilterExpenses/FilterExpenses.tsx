import { Moment } from "moment";
import { FC, useState } from "react";
import StyledFilter from ".";
import { myTheme } from "../../theme";
import { Category } from "../../types/Category";
import { Button } from "../Button/Button";
import { Checkbox } from "../Checkbox/Checkbox";
import { DatePicker } from "../DatePicker/DatePicker";
import { InputField } from "../InputField/InputField";
import { MultiRangeSlider } from "../MultiRangeSlider";

interface Props {
  onSubmit: () => void;
  onReset: () => void;
}

export const FilterExpenses: FC<Props> = ({ onReset, onSubmit }) => {

  //TODO redux store
  const [categories, setCategories] = useState<Category[]>([]);
  const [dateFrom, setDateFrom] = useState<Moment | null>(null);
  const [dateTo, setDateTo] = useState<Moment | null>(null);
  const [amountFrom, setAmountFrom] = useState<number>(0);
  const [amountTo, setAmountTo] = useState<number>(100);
  const [note, setNote] = useState("");

  const onChangeCategory = (category: Category) => {
    const updatedList = [...categories];
    if (!updatedList.includes(category)) {
      updatedList.push(category);
    } else {
      updatedList.splice(updatedList.indexOf(category), 1);
    }
    setCategories(updatedList);
  };

  return (
    <div>
      <StyledFilter.Title>
        <h3>Filter Expenses</h3>
      </StyledFilter.Title>
      <h4>Category</h4>
      {Object.values(Category).map((category) => (
        <Checkbox
          key={category}
          value={category}
          setValue={() => onChangeCategory(category)}
        />
      ))}
      <hr />
      <h4>Date</h4>
      <DatePicker value={dateFrom} setValue={setDateFrom} placeholder="From" />
      <DatePicker value={dateTo} setValue={setDateTo} placeholder="To" />
      <hr />
      <h4>Amount</h4>
      <MultiRangeSlider
        min={0}
        max={100}
        rangeValues={{ min: amountFrom, max: amountTo }}
        onChangeFrom={setAmountFrom}
        onChangeTo={setAmountTo}
        color={myTheme.colors.dark.green}
      />
      <hr />
      <h4>Note</h4>
      <InputField value={note} setValue={setNote} />
      <StyledFilter.ButtonContainer>
        <Button label="Reset" onClick={onReset} />
        <Button variant="success" label="Save" onClick={onSubmit} />
      </StyledFilter.ButtonContainer>
    </div>
  );
};
