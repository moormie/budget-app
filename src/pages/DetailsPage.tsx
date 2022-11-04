import moment from "moment";
import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { Loading } from "../components/Loading";
import { DetailsScreen } from "../components/Screens/Details/Details";
import { convertToExpensesWithCategory } from "../converters/convertToSimpleExpenses";
import { getCategoriesAmount } from "../helpers/getCategoriesAmount";
import { ExpensesCategory } from "../types/Expenses";

const DetailsPage: FC = () => {
  const navigate = useNavigate();
  const {
    dataList,
    selectedMonth,
    loading: expensesLoading,
  } = useAppSelector((state) => state.expenses);
  const { categoryList, loading: categoryLoading } = useAppSelector(
    (state) => state.category
  );

  const [expensesByCategories, setExpensesByCategories] = useState<
    ExpensesCategory[]
  >([]);

  useEffect(() => {
    const actualMonth = dataList.filter(
      (e) =>
        e.date.year() === moment().year() &&
        e.date.format("MMMM") === selectedMonth
    );
    const convertedList = convertToExpensesWithCategory(
      actualMonth,
      categoryList
    );
    const categoriesAmount = getCategoriesAmount(convertedList);
    setExpensesByCategories(categoriesAmount);
  }, [dataList, categoryList, selectedMonth]);

  const onClickBack = () => {
    navigate("/");
  };
  return (
    <>
      {(expensesLoading || categoryLoading) && <Loading />}
      <DetailsScreen
        expensesByCategories={expensesByCategories}
        onClickBack={onClickBack}
      />
    </>
  );
};

export default DetailsPage;
