import { FC, useState } from "react";
import StyledDatePicker from ".";
import { Calendar } from "../Calendar/Calendar";
import { Calendar as CalendarIcon } from "../../assets/CalendarIcon";
import { InputField } from "../InputField/InputField";
import { IconButton } from "../IconButton/IconButton";
import { Moment } from "moment";
import moment from "moment";

export const DatePicker: FC = () => {
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Moment | null>(null);

  const onChangeDate = (date: Moment) => {
    setSelectedDate(date);
    setOpen(false);
  };

  return (
    <StyledDatePicker.Container>
      <InputField
        placeholder="DD/MM/YYYY"
        value={
          selectedDate
            ? moment(selectedDate).format("DD/MM/YYYY")
            : moment().format("DD/MM/YYYY")
        }
        disabled
        endAdornment={
          <IconButton onClick={() => setOpen(!open)}>
            <CalendarIcon width="18px" height="18px" />
          </IconButton>
        }
      />
      <StyledDatePicker.DateContainer>
        <Calendar open={open} value={selectedDate} setValue={onChangeDate} />
      </StyledDatePicker.DateContainer>
    </StyledDatePicker.Container>
  );
};
