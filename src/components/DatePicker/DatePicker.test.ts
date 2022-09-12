import {
  generateFirstDayOfEachWeek,
  generateWeek,
  generateWeeksOfTheMonth,
} from "./helpers";
import moment from "moment";

describe("counter reducer", () => {
  const firstDayOfEachWeek = [
    moment("2022-09-12"),
    moment("2022-09-19"),
    moment("2022-09-26"),
    moment("2022-10-03"),
    moment("2022-10-10"),
    moment("2022-10-17"),
  ];
  const week = [
    moment("2022-09-12"),
    moment("2022-09-13"),
    moment("2022-09-14"),
    moment("2022-09-15"),
    moment("2022-09-16"),
    moment("2022-09-17"),
    moment("2022-09-18"),
  ];
  const month = [
    [
      moment("2022-08-28"),
      moment("2022-08-29"),
      moment("2022-08-30"),
      moment("2022-08-31"),
      moment("2022-09-01"),
      moment("2022-09-02"),
      moment("2022-09-03"),
    ],
    [
      moment("2022-09-04"),
      moment("2022-09-05"),
      moment("2022-09-06"),
      moment("2022-09-07"),
      moment("2022-09-08"),
      moment("2022-09-09"),
      moment("2022-09-10"),
    ],
    [
      moment("2022-09-11"),
      moment("2022-09-12"),
      moment("2022-09-13"),
      moment("2022-09-14"),
      moment("2022-09-15"),
      moment("2022-09-16"),
      moment("2022-09-17"),
    ],
    [
      moment("2022-09-18"),
      moment("2022-09-19"),
      moment("2022-09-20"),
      moment("2022-09-21"),
      moment("2022-09-22"),
      moment("2022-09-23"),
      moment("2022-09-24"),
    ],
    [
      moment("2022-09-25"),
      moment("2022-09-26"),
      moment("2022-09-27"),
      moment("2022-09-28"),
      moment("2022-09-29"),
      moment("2022-09-30"),
      moment("2022-10-01"),
    ],
    [
      moment("2022-10-02"),
      moment("2022-10-03"),
      moment("2022-10-04"),
      moment("2022-10-05"),
      moment("2022-10-06"),
      moment("2022-10-07"),
      moment("2022-10-08"),
    ],
  ];
  it("generates first day of each week", () => {
    generateFirstDayOfEachWeek(moment("2022-09-12")).forEach((date, index) => {
      expect(date.isSame(firstDayOfEachWeek[index], "date")).toBeTruthy();
    });
  });
  it("generates week", () => {
    generateWeek(moment("2022-09-12")).forEach((date, index) => {
      expect(date.isSame(week[index], "date")).toBeTruthy();
    });
  });
  it("generates month", () => {
    generateWeeksOfTheMonth(moment("2022-09-12"))[0].forEach((date, index) =>
      expect(date.isSame(month[0][index], "date")).toBeTruthy()
    );
  });
});
