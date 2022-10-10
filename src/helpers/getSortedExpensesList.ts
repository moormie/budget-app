import { Expenses } from "../types/Expenses";
import { SortTypes } from "../types/SortTypes";

export const getSortedExpensesList = (
  expensesList: Expenses[],
  sortValue: string
) => {
  switch (sortValue) {
    case SortTypes.CATEGORY:
      return [...expensesList].sort((a, b) =>
        a.category.localeCompare(b.category)
      );
    case SortTypes.AMOUNT_ASC:
      return [...expensesList].sort((a, b) => a.amount - b.amount);

    case SortTypes.AMOUNT_DESC:
      return [...expensesList].sort((a, b) => b.amount - a.amount);
    case SortTypes.DATE_ASC:
      return [...expensesList].sort((a, b) =>
        a.date.format("X").localeCompare(b.date.format("X"))
      );
    case SortTypes.DATE_DESC:
      return [...expensesList].sort((a, b) =>
        b.date.format("X").localeCompare(a.date.format("X"))
      );
    default:
      return expensesList;
  }
};
