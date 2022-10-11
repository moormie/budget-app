import { Category } from "../../types/Category";
import { getPieChartBackgroundColor } from "../getPieChartBackgroundColor";
import { myTheme } from "../../theme";

const dataList = [
  {
    category: Category.FOOD,
    amount: 15,
  },
  {
    category: Category.CAR,
    amount: 20,
  },
  {
    category: Category.TRAVEL,
    amount: 45,
  },
  {
    category: Category.CAR,
    amount: 20,
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
    end: "55.00%",
  },
  {
    color: myTheme.colors.orange,
    start: "55.00%",
    end: "100.00%",
  },
];

describe("pie chart background", () => {
  it("gets pie chart conic-gradient colors", () => {
    expect(getPieChartBackgroundColor(dataList).length).toBe(3);
    expect(getPieChartBackgroundColor(dataList)).toStrictEqual(resultList);
  });
});
