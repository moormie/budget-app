import { Expenses } from "../../types/Expenses";
import { mockExpensesData } from "../../types/mockData";

interface Data {
  data: Expenses[];
}

export function fetchExpensesData() {
  return new Promise<Data>((resolve) =>
    setTimeout(() => resolve({ data: mockExpensesData }), 500)
  );
}
