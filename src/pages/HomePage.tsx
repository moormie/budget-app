import { FC, useEffect, useState, useMemo } from "react";
import { useAppSelector } from "../app/hooks";
import { Loading } from "../components/Loading";
import { HomeScreen } from "../components/Screens/Home/Home";
import { getSortedExpensesList } from "../helpers/getSortedExpensesList";
import { Expenses } from "../types/Expenses";

const HomePage: FC = () => {
  const { dataList, status } = useAppSelector((state) => state.expenses);
  const { transactionSortValue: sortValue } = useAppSelector(
    (state) => state.details
  );

  const [sortedExpensesList, setSortedExpensesList] = useState<Expenses[]>([]);

  const loading = useMemo(() => {
    return status === "loading";
  }, [status]);

  useEffect(() => {
    const resultList = getSortedExpensesList(dataList, sortValue);
    setSortedExpensesList(resultList as Expenses[]);
  }, [sortValue, dataList]);

  return (
    <>
      {loading && <Loading />}
      <HomeScreen expensesList={sortedExpensesList} />
    </>
  );
};

export default HomePage;
