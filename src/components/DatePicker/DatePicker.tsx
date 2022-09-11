import { FC, useMemo, useState } from "react";
import moment, { Moment } from "moment";
import { CaretLeft, CaretRight } from "../../assets";
import { IconButton } from "../IconButton/IconButton";
import StyledDatePicker from ".";
import { generateWeeksOfTheMonth } from "./helpers";

export const DatePicker: FC = () => {
  const [selectedDate, setSelectedDate] = useState<Moment>(moment());
  const [calendarDate, setCalendarDate] = useState<Moment>(moment());

  const currentDay = useMemo(() => moment(), []);

  const onChangeMonth = (month: "forward" | "backward") => {
    month === "forward"
      ? setCalendarDate((date) => moment(date).add(1, "month"))
      : setCalendarDate((date) => moment(date).subtract(1, "month"));
  };

  const weeksOfTheMonth = useMemo(
    (): Moment[][] => generateWeeksOfTheMonth(calendarDate),
    [calendarDate]
  );

  return (
    <StyledDatePicker.MainWrapper>
      <StyledDatePicker.CalendarHeaderWrapper>
        <IconButton onClick={() => onChangeMonth("backward")}>
          <CaretLeft />
        </IconButton>
        <h3>{calendarDate.clone().format("MMM YYYY")}</h3>
        <IconButton onClick={() => onChangeMonth("forward")}>
          <CaretRight />
        </IconButton>
      </StyledDatePicker.CalendarHeaderWrapper>
      <StyledDatePicker.WeekDaysWrapper>
        {weeksOfTheMonth[0].map((day, index) => (
          <StyledDatePicker.WeekDayCell key={`week-day-${index}`}>
            {moment(day).format("dd")}
          </StyledDatePicker.WeekDayCell>
        ))}
      </StyledDatePicker.WeekDaysWrapper>
      {weeksOfTheMonth.map((week, weekIndex) => (
        <StyledDatePicker.CalendarContentWrapper key={`week-${weekIndex}`}>
          {week.map((day, dayIndex) => (
            <StyledDatePicker.CalendarDayCell
              key={`day-${dayIndex}`}
              onClick={() => setSelectedDate(moment(day))}
              variant={
                currentDay.isSame(day, "date")
                  ? "today"
                  : selectedDate.isSame(day, "date")
                  ? "selected"
                  : !calendarDate.isSame(day, "month")
                  ? "nextMonth"
                  : "default"
              }
            >
              {day.date()}
            </StyledDatePicker.CalendarDayCell>
          ))}
        </StyledDatePicker.CalendarContentWrapper>
      ))}
    </StyledDatePicker.MainWrapper>
  );
};
