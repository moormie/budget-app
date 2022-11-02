import { ExpensesCategory } from "../../types/Expenses";
import {
  getCategoriesAmount,
  getCategoriesPercentage,
} from "../getCategoriesAmount";

const dataList: ExpensesCategory[] = [
  {
    category: { name: "Food", color: { primary: "blue" } },
    amount: 15,
  },
  {
    category: { name: "Car", color: { primary: "blue" } },
    amount: 20,
  },
  {
    category: { name: "Food", color: { primary: "blue" } },
    amount: 45,
  },
  {
    category: { name: "Car", color: { primary: "blue" } },
    amount: 20,
  },
];

describe("convert expenses list", () => {
  it("gets categories and amount", () => {
    const categoryList = getCategoriesAmount(dataList);
    expect(categoryList.length).toBe(2);
    expect(categoryList[0].category.name).toBe("Food");
    expect(categoryList[0].amount).toBe(60);
    expect(categoryList[1].category.name).toBe("Car");
    expect(categoryList[1].amount).toBe(40);
  });
  it("gets categories and percentage", () => {
    const categoryList = getCategoriesPercentage(dataList);
    expect(categoryList.length).toBe(2);
    expect(categoryList[0].category.name).toBe("Food");
    expect(categoryList[0].percentage).toBe(60);
    expect(categoryList[1].category.name).toBe("Car");
    expect(categoryList[1].percentage).toBe(40);
  });
});
