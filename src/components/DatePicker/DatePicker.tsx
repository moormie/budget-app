import { FC, useState, useRef } from "react";
import StyledDatePicker from ".";
import { Calendar } from "../Calendar/Calendar";
import { Calendar as CalendarIcon } from "../../assets/CalendarIcon";
import { InputField } from "../InputField/InputField";
import { Moment } from "moment";
import moment from "moment";
import useOnClickOutside from "../../useOnClickOutside";
import { Delayed } from "../Delayed";
import { myTheme } from "../../theme";

export const DatePicker: FC = () => {
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Moment | null>(moment());

  const onChangeDate = (date: Moment) => {
    setSelectedDate(date);
    setOpen(false);
  };

  const ref = useRef(null);
  useOnClickOutside(ref, () => setOpen(false));

  return (
    <StyledDatePicker.Container ref={ref}>
      <InputField
        placeholder="DD/MM/YYYY"
        value={
          selectedDate
            ? moment(selectedDate).format("DD/MM/YYYY")
            : moment().format("DD/MM/YYYY")
        }
        disabled
        endAdornment={
          <CalendarIcon
            width="18px"
            height="18px"
            color={myTheme.colors.dark.green}
          />
        }
        onClick={() => setOpen(!open)}
      />
      <Delayed open={open}>
        <Calendar value={selectedDate} setValue={onChangeDate} />
      </Delayed>
    </StyledDatePicker.Container>
  );
};
