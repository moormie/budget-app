import { Category } from "../types/Category";
import { SimpleExpenses } from "../types/Expenses";
import { ExpensesCategory } from "../types/ExpensesCategory";

export const convertToExpensesWithCategory = (
  expenses: SimpleExpenses[],
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
