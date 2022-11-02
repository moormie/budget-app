import moment from "moment";
import { FC, useEffect, useState } from "react";
import { useAppSelector } from "../app/hooks";
import { Loading } from "../components/Loading";
import { HomeScreen } from "../components/Screens/Home/Home";
import { getSortedExpensesList } from "../helpers/getSortedExpensesList";
import { Expenses } from "../types/Expenses";

const HomePage: FC = () => {
  const { dataList, selectedMonth, loading } = useAppSelector(
    (state) => state.expenses
  );

  const [sortedExpensesList, setSortedExpensesList] = useState<Expenses[]>([]);

  useEffect(() => {
    const actualMonth = dataList.filter(
      (e) =>
        e.date.year() === moment().year() &&
        e.date.format("MMMM") === selectedMonth
    );
    setSortedExpensesList(getSortedExpensesList(actualMonth) as Expenses[]);
  }, [dataList, selectedMonth]);

  return (
    <>
      {loading && <Loading />}
      <HomeScreen expensesList={sortedExpensesList} />
    </>
  );
};

export default HomePage;
