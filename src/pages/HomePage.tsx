import moment from "moment";
import { FC, useEffect, useState, useMemo } from "react";
import { useAppSelector } from "../app/hooks";
import { Loading } from "../components/Loading";
import { HomeScreen } from "../components/Screens/Home/Home";
import { Expenses } from "../types/Expenses";

const HomePage: FC = () => {
  const { dataList, status } = useAppSelector((state) => state.expenses);

  const [sortedExpensesList, setSortedExpensesList] = useState<Expenses[]>([]);

  const loading = useMemo(() => {
    return status === "loading";
  }, [status]);

  useEffect(() => {
    dataList.length > 0 &&
      setSortedExpensesList(
        [...dataList].sort((a, b) =>
          moment(a.date).format("X").localeCompare(moment(b.date).format("X"))
        )
      );
  }, [dataList]);

  return (
    <>
      {loading && <Loading />}
      <HomeScreen expensesList={loading ? [] : sortedExpensesList} />
    </>
  );
};

export default HomePage;
