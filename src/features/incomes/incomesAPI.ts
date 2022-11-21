import { GET_INCOMES } from "./../endpoints";
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
  const res: IncomesResponse[] = await fetch(GET_INCOMES).then((data) =>
    data.json()
  );

  return res.map((d) => {
    const result: Income = {
      ...d,
      date: moment(d.date),
    };
    return result;
  });
}
