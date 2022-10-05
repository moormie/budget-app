import { Expenses } from "../../types/Expenses";
import { expensesMockData } from "../../types/mockData";

interface Data {
  data: Expenses[];
}

export function fetchExpensesData() {
  return new Promise<Data>((resolve) =>
    setTimeout(() => resolve({ data: expensesMockData }), 500)
  );
}
