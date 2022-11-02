import { Category } from "../types/Category";
import { Expenses } from "../types/Expenses";
import { ExpensesCategory } from "../types/Expenses";

export const convertToExpensesWithCategory = (
  expenses: Expenses[],
  categoryList: Category[]
) => {
  const resultList: ExpensesCategory[] = [];
  expenses.forEach((e) => {
    const category = categoryList.find((c) => c.name === e.category);
    if (category) {
      resultList.push({
        amount: e.amount,
        category: category,
      });
    }
  });
  return resultList;
};
