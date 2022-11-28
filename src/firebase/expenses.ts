import { Expenses } from "./../types/Expenses";
import { set, ref, get, child, onValue } from "firebase/database";
import { database } from "./realtime_db";
import moment from "moment";

export const saveExpensesData = async (newData: Expenses) => {
  const { id, date, category, amount, note } = newData;
  try {
    await set(ref(database, "expenses/" + id), {
      date: date.format("YYYY-MM-DDTHH:mm"),
      category,
      amount,
      note,
    });
  } catch (error) {
    throw new Error(error as string);
  }
};

export const getAllExpensesOnce = async () => {
  let result: Expenses[] = [];
  const snapshot = await get(child(ref(database), "expenses"));

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

export const getAllExpensesListener = (
  updateData: (expenses: Expenses[]) => void
) => {
  const expensesRef = ref(database, "expenses");
  return onValue(expensesRef, (snapshot) => {
    let result: Expenses[] = [];
    const data = snapshot.val();
    for (let key in data) {
      result.push({
        id: key,
        amount: data[key].amount,
        date: moment(data[key].date),
        note: data[key].note,
        category: data[key].category,
      });
    }
    updateData(result);
  });
};
