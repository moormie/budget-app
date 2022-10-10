import { Expenses } from "../types/Expenses";
import { SortType } from "../types/SortType";

export const getSortedExpensesList = (
  expensesList: Expenses[],
  sortValue: string
) => {
  switch (sortValue) {
    case SortType.CATEGORY:
      return [...expensesList].sort((a, b) =>
        a.category.localeCompare(b.category)
      );
    case SortType.AMOUNT_ASC:
      return [...expensesList].sort((a, b) => a.amount - b.amount);

    case SortType.AMOUNT_DESC:
      return [...expensesList].sort((a, b) => b.amount - a.amount);
    case SortType.DATE_ASC:
      return [...expensesList].sort((a, b) =>
        a.date.format("X").localeCompare(b.date.format("X"))
      );
    case SortType.DATE_DESC:
      return [...expensesList].sort((a, b) =>
        b.date.format("X").localeCompare(a.date.format("X"))
      );
    default:
      return expensesList;
  }
};
