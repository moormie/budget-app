import { FC, useState, useRef } from "react";
import StyledDatePicker from ".";
import { Calendar } from "../Calendar/Calendar";
import { Calendar as CalendarIcon } from "../../assets/CalendarIcon";
import { InputField } from "../InputField/InputField";
import { Moment } from "moment";
import moment from "moment";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import { Delayed } from "../Delayed";
import { myTheme } from "../../theme";
import { IconButton } from "../IconButton/IconButton";
import { Close } from "../../assets";

interface Props {
  value: Moment | null;
  setValue: (value: Moment | null) => void;
  placeholder?: string;
}

export const DatePicker: FC<Props> = ({ value, setValue, placeholder }) => {
  const [open, setOpen] = useState(false);

  const onChangeDate = (date: Moment) => {
    setValue(date);
    setOpen(false);
  };

  const ref = useRef(null);
  useOnClickOutside(ref, () => setOpen(false));

  return (
    <StyledDatePicker.Container>
      <InputField
        placeholder={placeholder ?? "DD/MM/YYYY"}
        value={value ? moment(value).format("DD/MM/YYYY") : ""}
        disabled
        endAdornment={
          <>
            {value && (
              <div style={{ marginRight: 8 }}>
                <IconButton onClick={() => setValue(null)}>
                  <Close
                    width="18px"
                    height="18px"
                    color={myTheme.colors.dark.red}
                  />
                </IconButton>
              </div>
            )}
            <IconButton onClick={() => setOpen(!open)}>
              <CalendarIcon
                width="18px"
                height="18px"
                color={myTheme.colors.dark.green}
              />
            </IconButton>
          </>
        }
      />
      <div ref={ref}>
        <Delayed visible={open}>
          <Calendar
            value={value}
            setValue={onChangeDate}
            style={{ zIndex: 20, right: "calc(50% - 140px)" }}
          />
        </Delayed>
      </div>
    </StyledDatePicker.Container>
  );
};
