import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { DetailsScreen } from "../components/Screens/Details/Details";
import { selectExpenses } from "../features/expenses/expensesSlice";
import { SimpleExpenses } from "../types/Expenses";

const DetailsPage: FC = () => {
  const expensesList = useAppSelector(selectExpenses);

  const [expensesByCategories, setExpensesByCategories] = useState<
    SimpleExpenses[]
  >([]);
  let navigate = useNavigate();

  useEffect(() => {
    const resultList: SimpleExpenses[] = [];
    expensesList.forEach((data) => {
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
    setExpensesByCategories(resultList);
  }, [expensesList]);

  const onClickBack = () => {
    navigate("/");
  };
  return (
    <DetailsScreen
      expensesByCategories={expensesByCategories}
      onClickBack={onClickBack}
    />
  );
};

export default DetailsPage;
