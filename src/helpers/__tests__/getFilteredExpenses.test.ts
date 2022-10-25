import moment from "moment";
import { Category } from "../../types/Category";
import { FilterValues } from "../../types/FilterValues";
import { expensesMockData } from "../../types/mockData";
import { getFilteredExpenses } from "../getFilteredExpenses";

const mockFilter: FilterValues = {
  categories: [],
  dateFrom: null,
  dateTo: null,
  amountFrom: 0,
  amountTo: 10000,
  note: "",
};

describe("filtered expenses", () => {
  it("filters expenses by categories", () => {
    expect(
      getFilteredExpenses(expensesMockData, {
        ...mockFilter,
        categories: [Category.CAR, Category.FOOD],
      }).length
    ).toBe(6);
  });
  it("filters by date from", () => {
    expect(
      getFilteredExpenses(expensesMockData, {
        ...mockFilter,
        dateFrom: moment("2022-10-03"),
      }).length
    ).toBe(9);
  });
  it("filters by date to", () => {
    expect(
      getFilteredExpenses(expensesMockData, {
        ...mockFilter,
        dateTo: moment("2022-09-01"),
      }).length
    ).toBe(4);
  });
  it("filters by amount from", () => {
    expect(
      getFilteredExpenses(expensesMockData, { ...mockFilter, amountFrom: 120 })
        .length
    ).toBe(9);
  });
  it("filters by amount to", () => {
    expect(
      getFilteredExpenses(expensesMockData, { ...mockFilter, amountTo: 90 })
        .length
    ).toBe(12);
  });
  it("filters by note", () => {
    expect(
      getFilteredExpenses(expensesMockData, { ...mockFilter, note: "Note" })
        .length
    ).toBe(14);
  });
  it("filters by all value", () => {
    expect(
      getFilteredExpenses(expensesMockData, {
        categories: [Category.TRAVEL],
        dateFrom: moment("2022-10-10"),
        dateTo: moment("2022-10-19"),
        amountFrom: 15,
        amountTo: 70,
        note: "",
      }).length
    ).toBe(1);
  });
});
