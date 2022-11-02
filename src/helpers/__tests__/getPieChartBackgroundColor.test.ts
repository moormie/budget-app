import { getPieChartBackgroundColor } from "../getPieChartBackgroundColor";
import { myTheme } from "../../theme";
import { ExpensesPercentage } from "../../types/Expenses";

const dataList: ExpensesPercentage[] = [
  {
    category: { name: "Food", color: { primary: "#778C62" } },
    percentage: 15,
  },
  {
    category: { name: "Car", color: { primary: "#665075" } },
    percentage: 20,
  },
  {
    category: { name: "Travel", color: { primary: "#DF810B" } },
    percentage: 65,
  },
];

const resultList = [
  {
    color: myTheme.colors.green,
    start: "0.00%",
    end: "15.00%",
  },
  {
    color: myTheme.colors.grape,
    start: "15.00%",
    end: "35.00%",
  },
  {
    color: myTheme.colors.orange,
    start: "35.00%",
    end: "100.00%",
  },
];

describe("pie chart background", () => {
  it("gets pie chart conic-gradient colors", () => {
    expect(getPieChartBackgroundColor(dataList).length).toBe(3);
    expect(getPieChartBackgroundColor(dataList)).toStrictEqual(resultList);
  });
});
