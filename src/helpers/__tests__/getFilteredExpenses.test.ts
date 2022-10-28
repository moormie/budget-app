import moment from "moment";
import { FilterValues } from "../../types/FilterValues";
import { mockExpensesData } from "../../types/mockData";
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
      getFilteredExpenses(mockExpensesData, {
        ...mockFilter,
        categories: [{name: "Car", color: {primary: "green"}}, {name: "Food", color: {primary: "blue"}}],
      }).length
    ).toBe(6);
  });
  it("filters by date from", () => {
    expect(
      getFilteredExpenses(mockExpensesData, {
        ...mockFilter,
        dateFrom: moment("2022-10-03"),
      }).length
    ).toBe(9);
  });
  it("filters by date to", () => {
    expect(
      getFilteredExpenses(mockExpensesData, {
        ...mockFilter,
        dateTo: moment("2022-09-01"),
      }).length
    ).toBe(4);
  });
  it("filters by amount from", () => {
    expect(
      getFilteredExpenses(mockExpensesData, { ...mockFilter, amountFrom: 120 })
        .length
    ).toBe(9);
  });
  it("filters by amount to", () => {
    expect(
      getFilteredExpenses(mockExpensesData, { ...mockFilter, amountTo: 90 })
        .length
    ).toBe(12);
  });
  it("filters by note", () => {
    expect(
      getFilteredExpenses(mockExpensesData, { ...mockFilter, note: "Note" })
        .length
    ).toBe(14);
  });
  it("filters by all value", () => {
    expect(
      getFilteredExpenses(mockExpensesData, {
        categories: [{name: "Travel", color: {primary: "green"}}],
        dateFrom: moment("2022-10-10"),
        dateTo: moment("2022-10-19"),
        amountFrom: 15,
        amountTo: 70,
        note: "",
      }).length
    ).toBe(1);
  });
});
