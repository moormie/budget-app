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

interface FilterValues {
  categories: Category[];
  dateFrom: Moment | null;
  dateTo: Moment | null;
  amountFrom: number;
  amountTo: number;
  note: string;
}

interface Props {
  onSubmit: (
    categories: Category[],
    dateFrom?: Moment | null,
    dateTo?: Moment | null,
    amountFrom?: number,
    amountTo?: number,
    note?: string
  ) => void;
  onReset: () => void;
  maxAmount: number;
  filterValues: FilterValues;
}

export const FilterExpenses: FC<Props> = ({
  onSubmit,
  onReset,
  maxAmount,
  filterValues,
}) => {
  const [categories, setCategories] = useState<Category[]>(
    filterValues.categories
  );
  const [dateFrom, setDateFrom] = useState<Moment | null>(
    filterValues.dateFrom
  );
  const [dateTo, setDateTo] = useState<Moment | null>(filterValues.dateTo);
  const [amountFrom, setAmountFrom] = useState<number>(filterValues.amountFrom);
  const [amountTo, setAmountTo] = useState<number>(filterValues.amountTo);
  const [note, setNote] = useState(filterValues.note);

  const onChangeCategory = (category: Category) => {
    const updatedList = [...categories];
    if (!updatedList.includes(category)) {
      updatedList.push(category);
    } else {
      updatedList.splice(updatedList.indexOf(category), 1);
    }
    setCategories(updatedList);
  };

  const onSave = () => {
    onSubmit(categories, dateFrom, dateTo, amountFrom, amountTo, note);
  };

  const onResetAll = () => {
    setCategories([]);
    setDateFrom(null);
    setDateTo(null);
    setAmountFrom(0);
    setAmountTo(maxAmount);
    setNote("");
    onReset();
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
          checked={categories.includes(category)}
        />
      ))}
      <br />
      <StyledFilter.Line />
      <h4>Date</h4>
      <DatePicker value={dateFrom} setValue={setDateFrom} placeholder="From" />
      <DatePicker value={dateTo} setValue={setDateTo} placeholder="To" />
      <br />
      <StyledFilter.Line />
      <MultiRangeSlider
        min={0}
        max={maxAmount}
        rangeValues={{ min: amountFrom, max: amountTo }}
        onChangeFrom={setAmountFrom}
        onChangeTo={setAmountTo}
        color={myTheme.colors.dark.green}
      />
      <br />
      <StyledFilter.Line />
      <h4>Note</h4>
      <InputField value={note} setValue={setNote} />
      <StyledFilter.ButtonContainer>
        <Button label="Reset" onClick={onResetAll} />
        <Button variant="success" label="Save" onClick={onSave} />
      </StyledFilter.ButtonContainer>
    </div>
  );
};
