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

interface Props {
  value: Moment | null;
  setValue: (value: Moment | null) => void;
}

export const DatePicker: FC<Props> = ({ value, setValue }) => {
  const [open, setOpen] = useState(false);

  const onChangeDate = (date: Moment) => {
    setValue(date);
    setOpen(false);
  };

  const ref = useRef(null);
  useOnClickOutside(ref, () => setOpen(false));

  return (
    <StyledDatePicker.Container ref={ref}>
      <InputField
        placeholder="DD/MM/YYYY"
        value={
          value
            ? moment(value).format("DD/MM/YYYY")
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
      <Delayed visible={open}>
        <Calendar value={value} setValue={onChangeDate} />
      </Delayed>
    </StyledDatePicker.Container>
  );
};
