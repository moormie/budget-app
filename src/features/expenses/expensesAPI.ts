import { GET_EXPENSES } from "./../endpoints";
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
  const res: ExpensesResponse[] = await fetch(GET_EXPENSES).then((data) =>
    data.json()
  );

  return res.map((d) => {
    const result: Expenses = {
      ...d,
      date: moment(d.date),
    };
    return result;
  });
}
