import { Expenses } from "./../types/Expenses";
import { set, ref, get, child } from "firebase/database";
import { database } from "./realtime_db";
import moment from "moment";

export const saveExpensesData = (newData: Expenses) => {
  const { id, date, category, amount, note } = newData;
  set(ref(database, "expenses/" + id), {
    date: date.format("YYYY-MM-DDTHH:mm"),
    category,
    amount,
    note,
  });
};

export const getAllExpenses = async () => {
  let result: Expenses[] = [];
  const snapshot = await get(child(ref(database), `expenses`));

  if (snapshot.exists()) {
    const data = snapshot.val();
    result = Object.keys(data).map((key) => ({
      id: key,
      amount: data[key].amount,
      date: moment(data[key].date),
      note: data[key].note,
      category: data[key].category,
    }));
  }
  return result;
};
