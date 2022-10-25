import styled from "styled-components";

const black = "#000000";
const white = "#ffffff";

const MainWrapper = styled.div<{ visible: boolean }>`
  width: 240px;
  border-radius: ${(props) => props.theme.borderRadius};
  padding: 20px;
  background-color: ${(props) => props.theme.colors.green};
  box-shadow: -6px 7px 54px -24px rgba(0, 0, 0, 0.5);
  position: absolute;
  animation: ${(props) =>
      props.visible ? props.theme.animation.show : props.theme.animation.hide}
    0.4s ease-out;
`;

const CalendarHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 40px;
`;

const WeekDaysWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const WeekDayCell = styled.div`
  height: 30px;
  width: 30px;
  margin: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.dark.green};
  font-weight: bold;
`;

const CalendarContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

interface CalendarDayCellProps {
  variant: "default" | "nextMonth" | "today" | "selected";
}

const CalendarDayCell = styled.div<CalendarDayCellProps>`
  color: ${(props) =>
    props.variant === "selected"
      ? props.theme.colors.dark.green
      : props.variant === "today"
      ? white
      : props.variant === "nextMonth"
      ? props.theme.colors.lightGray
      : black};
  background-color: ${(props) =>
    props.variant === "selected"
      ? props.theme.colors.lightGray
      : props.variant === "today"
      ? props.theme.colors.dark.green
      : ""};
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  margin: 2px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.colors.yellowGreen};
    color: ${(props) => props.theme.colors.dark.green};
  }
`;

const StyledCalendar = {
  MainWrapper,
  CalendarHeaderWrapper,
  WeekDaysWrapper,
  WeekDayCell,
  CalendarContentWrapper,
  CalendarDayCell,
};
export default StyledCalendar;
