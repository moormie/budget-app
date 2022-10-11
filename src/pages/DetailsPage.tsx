import { FC, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { Loading } from "../components/Loading";
import { DetailsScreen } from "../components/Screens/Details/Details";
import { getSortedExpensesList } from "../helpers/getSortedExpensesList";
import { SimpleExpenses } from "../types/Expenses";

const DetailsPage: FC = () => {
  const { dataList, status } = useAppSelector((state) => state.expenses);
  const { summarySortValue } = useAppSelector((state) => state.details);

  const loading = useMemo(() => {
    return status === "loading";
  }, [status]);

  const [expensesByCategories, setExpensesByCategories] = useState<
    SimpleExpenses[]
  >([]);
  let navigate = useNavigate();

  useEffect(() => {
    const resultList: SimpleExpenses[] = [];
    dataList.forEach((data) => {
      let exist = resultList.find((r) => r.category === data.category);
      if (exist) {
        exist.amount += data.amount;
      } else {
        resultList.push({
          category: data.category,
          amount: data.amount,
        });
      }
    });
    const sortedList = getSortedExpensesList(resultList, summarySortValue);
    setExpensesByCategories(sortedList);
  }, [dataList, summarySortValue]);

  const onClickBack = () => {
    navigate("/");
  };
  return (
    <>
      {loading && <Loading />}
      <DetailsScreen
        expensesByCategories={expensesByCategories}
        onClickBack={onClickBack}
      />
    </>
  );
};

export default DetailsPage;
