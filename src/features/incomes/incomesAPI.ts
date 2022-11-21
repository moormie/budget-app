import moment from "moment";
import { Income } from "../../types/Income";

interface IncomesResponse {
  id?: string;
  name: string;
  date: string;
  amount: number;
  note?: string;
}

export async function fetchIncomesData() {
  const res: IncomesResponse[] = await fetch(
    "https://b02e7c08-4b06-4b1e-acbd-294d5b8ba12b.mock.pstmn.io/incomes"
  ).then((data) => data.json());

  return res.map((d) => {
    const result: Income = {
      ...d,
      date: moment(d.date),
    };
    return result;
  });
}
