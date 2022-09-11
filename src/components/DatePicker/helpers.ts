import moment from "moment";
import { Moment } from "moment";

export const generateFirstDayOfEachWeek = (day: Moment): Moment[] => {
  const dates: Moment[] = [day];
  for (let i = 1; i < 6; i++) {
    const date = day.clone().add(i, "week");
    dates.push(date);
  }
  return dates;
};

export const generateWeek = (day: Moment): Moment[] => {
  const dates: Moment[] = [];
  for (let i = 0; i < 7; i++) {
    const date = day.clone().add(i, "day");
    dates.push(date);
  }
  return dates;
};

export const generateWeeksOfTheMonth = (calendarDate: Moment): Moment[][] => {
  const firstDayOfTheMonth = calendarDate.clone().startOf("month");
  const firstDayOfFirstWeekOfMonth = moment(firstDayOfTheMonth).startOf("week");
  const firstDayOfEachWeek = generateFirstDayOfEachWeek(
    firstDayOfFirstWeekOfMonth
  );
  return firstDayOfEachWeek.map((date) => generateWeek(date));
};
