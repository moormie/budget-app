import { FC, useEffect, useMemo, useState } from "react";
import moment, { Moment } from "moment";
import { CaretLeft, CaretRight } from "../../assets";
import { IconButton } from "../IconButton/IconButton";
import StyledCalendar from ".";
import { generateWeeksOfTheMonth } from "./helpers";

interface CalendarProps {
  value: Moment | null;
  setValue: (date: Moment) => void;
  visible?: boolean;
  style?: React.CSSProperties;
}

export const Calendar: FC<CalendarProps> = ({
  visible = true,
  value,
  setValue,
  style,
}) => {
  const [calendarDate, setCalendarDate] = useState<Moment>(moment());

  useEffect(() => {
    if (value && visible) {
      setCalendarDate(value);
    }
  }, [value, visible]);

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
    <StyledCalendar.MainWrapper visible={visible} style={style}>
      <StyledCalendar.CalendarHeaderWrapper>
        <IconButton onClick={() => onChangeMonth("backward")}>
          <CaretLeft />
        </IconButton>
        <h3>{calendarDate.clone().format("MMM YYYY")}</h3>
        <IconButton onClick={() => onChangeMonth("forward")}>
          <CaretRight />
        </IconButton>
      </StyledCalendar.CalendarHeaderWrapper>
      <StyledCalendar.WeekDaysWrapper>
        {weeksOfTheMonth[0].map((day, index) => (
          <StyledCalendar.WeekDayCell key={`week-day-${index}`}>
            {moment(day).format("dd")}
          </StyledCalendar.WeekDayCell>
        ))}
      </StyledCalendar.WeekDaysWrapper>
      {weeksOfTheMonth.map((week, weekIndex) => (
        <StyledCalendar.CalendarContentWrapper key={`week-${weekIndex}`}>
          {week.map((day, dayIndex) => (
            <StyledCalendar.CalendarDayCell
              key={`day-${dayIndex}`}
              onClick={() => setValue(moment(day))}
              variant={
                currentDay.isSame(day, "date")
                  ? "today"
                  : value?.isSame(day, "date")
                  ? "selected"
                  : !calendarDate.isSame(day, "month")
                  ? "nextMonth"
                  : "default"
              }
            >
              {day.date()}
            </StyledCalendar.CalendarDayCell>
          ))}
        </StyledCalendar.CalendarContentWrapper>
      ))}
    </StyledCalendar.MainWrapper>
  );
};
