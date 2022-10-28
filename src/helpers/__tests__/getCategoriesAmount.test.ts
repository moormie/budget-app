import moment from "moment";
import {
  getCategoriesAmount,
  getCategoriesPercentage,
} from "../getCategoriesAmount";

const dataList = [
  {
    id: "001",
    category: "Food",
    amount: 15,
    date: moment("2022-09-01"),
  },
  {
    id: "002",
    category: "Car",
    amount: 20,
    date: moment("2022-09-03"),
  },
  {
    id: "003",
    category: "Food",
    amount: 45,
    date: moment("2022-09-10"),
  },
  {
    id: "004",
    category: "Car",
    amount: 20,
    date: moment("2022-09-14"),
  },
];

describe("convert expenses list", () => {
  it("gets categories and amount", () => {
    const categoryList = getCategoriesAmount(dataList);
    expect(categoryList.length).toBe(2);
    expect(categoryList[0]).toStrictEqual({ category: "Food", amount: 60 });
    expect(categoryList[1]).toStrictEqual({ category: "Car", amount: 40 });
  });
  it("gets categories and percentage", () => {
    const categoryList = getCategoriesPercentage(dataList)
    expect(categoryList.length).toBe(2);
    expect(categoryList[0]).toStrictEqual({category: "Food", percentage: 60});
    expect(categoryList[1]).toStrictEqual({category: "Car", percentage: 40});
  });
});
