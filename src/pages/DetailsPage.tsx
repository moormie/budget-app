import moment from "moment";
import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { Loading } from "../components/Loading";
import { DetailsScreen } from "../components/Screens/Details/Details";
import { getCategoriesAmount } from "../helpers/getCategoriesAmount";
import { SimpleExpenses } from "../types/Expenses";

const DetailsPage: FC = () => {
  const navigate = useNavigate();
  const { dataList, loading } = useAppSelector((state) => state.expenses);

  const [expensesByCategories, setExpensesByCategories] = useState<
    SimpleExpenses[]
  >([]);

  useEffect(() => {
    const actualMonth = dataList.filter(
      (e) =>
        e.date.month() === moment().month() && e.date.year() === moment().year()
    );
    setExpensesByCategories(getCategoriesAmount(actualMonth));
  }, [dataList]);

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
