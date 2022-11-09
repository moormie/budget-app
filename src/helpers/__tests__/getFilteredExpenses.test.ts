import moment from "moment";
import { Expenses } from "../../types/Expenses";
import { FilterValues } from "../../types/FilterValues";
import { getFilteredExpenses } from "../getFilteredExpenses";

const mockExpensesData: Expenses[] = [
  {
    id: "001",
    category: "Food",
    amount: 110,
    date: moment("2022-09-01"),
    note: "Some note...",
  },
  {
    id: "002",
    category: "Car",
    amount: 60,
    date: moment("2022-09-03"),
    note: "",
  },
  {
    id: "003",
    category: "Medical",
    amount: 120,
    date: moment("2022-09-10"),
    note: "Some note...",
  },
  {
    id: "004",
    category: "Food",
    amount: 90,
    date: moment("2022-09-14"),
    note: "",
  },
  {
    id: "005",
    category: "Travel",
    amount: 80,
    date: moment("2022-09-15"),
    note: "Some note...",
  },
  {
    id: "006",
    category: "Home",
    amount: 500,
    date: moment("2022-09-18"),
    note: "Some note...",
  }
]

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
    ).toBe(3);
  });
  it("filters by date from", () => {
    expect(
      getFilteredExpenses(mockExpensesData, {
        ...mockFilter,
        dateFrom: moment("2022-09-15"),
      }).length
    ).toBe(2);
  });
  it("filters by date to", () => {
    expect(
      getFilteredExpenses(mockExpensesData, {
        ...mockFilter,
        dateTo: moment("2022-09-03"),
      }).length
    ).toBe(2);
  });
  it("filters by amount from", () => {
    expect(
      getFilteredExpenses(mockExpensesData, { ...mockFilter, amountFrom: 120 })
        .length
    ).toBe(2);
  });
  it("filters by amount to", () => {
    expect(
      getFilteredExpenses(mockExpensesData, { ...mockFilter, amountTo: 90 })
        .length
    ).toBe(3);
  });
  it("filters by note", () => {
    expect(
      getFilteredExpenses(mockExpensesData, { ...mockFilter, note: "Note" })
        .length
    ).toBe(4);
  });
  it("filters by all value", () => {
    expect(
      getFilteredExpenses(mockExpensesData, {
        categories: [{name: "Food", color: {primary: "green"}}],
        dateFrom: moment("2022-09-13"),
        dateTo: moment("2022-09-19"),
        amountFrom: 80,
        amountTo: 90,
        note: "",
      }).length
    ).toBe(1);
  });
});
