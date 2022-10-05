import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { HomeScreen } from "../components/Screens/Home/Home";
import {
  getExpensesData,
  selectExpenses,
} from "../features/expenses/expensesSlice";

const HomePage: FC = () => {
  const expensesList = useAppSelector(selectExpenses);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getExpensesData());
  }, [dispatch]);

  return <HomeScreen expensesList={expensesList} />;
};

export default HomePage;
