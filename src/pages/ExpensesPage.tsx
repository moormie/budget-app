import { FC, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { Loading } from "../components/Loading";
import { ExpensesList } from "../components/Screens/Expenses/Expenses";

const ExpensesPage: FC = () => {
  const navigate = useNavigate();
  const { dataList, status } = useAppSelector((state) => state.expenses);

  const loading = useMemo(() => {
    return status === "loading";
  }, [status]);

  const onClickBack = () => {
    navigate("/");
  };

  return (
    <>
      {loading && <Loading />}
      <ExpensesList dataList={dataList} onClickBack={onClickBack} />;
    </>
  );
};

export default ExpensesPage;
