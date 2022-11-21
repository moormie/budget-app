import moment from "moment";
import { Expenses } from "../../types/Expenses";

interface ExpensesResponse {
  id?: string;
  note?: string;
  date: string;
  category: string;
  amount: number;
}

export async function fetchExpensesData() {
  const res: ExpensesResponse[] = await fetch(
    "https://96127e0a-25e5-41e6-a27f-23d8a6847817.mock.pstmn.io/expenses"
  ).then((data) => data.json());

  return res.map((d) => {
    const result: Expenses = {
      ...d,
      date: moment(d.date),
    };
    return result;
  });
}
