import { FC, useMemo, useState } from "react";
import moment, { Moment } from "moment";
import { CaretLeft, CaretRight } from "../../assets";
import { IconButton } from "../IconButton/IconButton";
import StyledCalendar from ".";
import { generateWeeksOfTheMonth } from "./helpers";

export const Calendar: FC = () => {
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
        <StyledCalendar.MainWrapper>
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
                <StyledCalendar.CalendarContentWrapper
                    key={`week-${weekIndex}`}
                >
                    {week.map((day, dayIndex) => (
                        <StyledCalendar.CalendarDayCell
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
                        </StyledCalendar.CalendarDayCell>
                    ))}
                </StyledCalendar.CalendarContentWrapper>
            ))}
        </StyledCalendar.MainWrapper>
    );
};
