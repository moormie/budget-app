import moment from "moment";
import { Category } from "../../types/Category";
import {
  getCategoriesAmount,
  getCategoriesPercentage,
} from "../getCategoriesAmount";

const dataList = [
  {
    id: "001",
    category: Category.FOOD,
    amount: 15,
    date: moment("2022-09-01"),
  },
  {
    id: "002",
    category: Category.CAR,
    amount: 20,
    date: moment("2022-09-03"),
  },
  {
    id: "003",
    category: Category.FOOD,
    amount: 45,
    date: moment("2022-09-10"),
  },
  {
    id: "004",
    category: Category.CAR,
    amount: 20,
    date: moment("2022-09-14"),
  },
];

const resultList = [
  { category: "Food", amount: 60 },
  { category: "Car", amount: 40 },
];

describe("convert expenses list", () => {
  it("gets categories and amount", () => {
    expect(getCategoriesAmount(dataList).length).toBe(2);
    expect(getCategoriesAmount(dataList)[0]).toStrictEqual(resultList[0]);
    expect(getCategoriesAmount(dataList)[1]).toStrictEqual(resultList[1]);
  });
  it("gets categories and percentage", () => {
    expect(getCategoriesPercentage(dataList)[0]).toStrictEqual(resultList[0]);
    expect(getCategoriesPercentage(dataList)[1]).toStrictEqual(resultList[1]);
  });
});
