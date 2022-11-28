import { createContext, FC, useContext, useEffect, useState } from "react";
import {
  getAllExpensesListener,
  getAllExpensesOnce,
} from "../firebase/expenses";
import { Expenses } from "../types/Expenses";
interface ContextData {
  allExpenses: Expenses[];
  loading: boolean;
}

const ExpensesContext = createContext<ContextData>({
  allExpenses: [],
  loading: true,
});

type Props = {
  children?: React.ReactNode;
};

export const ExpensesProvider: FC<Props> = ({ children }) => {
  const [state, setState] = useState<ContextData>({
    allExpenses: [],
    loading: true,
  });

  const updateState = (expenses: Expenses[]) => {
    setState({
      allExpenses: expenses,
      loading: false,
    });
  };

  useEffect(() => {
    const unsubscribe = getAllExpensesListener(updateState);

    getAllExpensesOnce()
      .then((data) => setState({ allExpenses: data, loading: false }))
      .catch((error) => {
        console.log(error);
        setState({ allExpenses: [], loading: false });
      });
    return unsubscribe;
  }, []);

  return (
    <ExpensesContext.Provider value={state}>
      {children}
    </ExpensesContext.Provider>
  );
};

export const useAllExpenses = () => {
  const store = useContext(ExpensesContext);
  return store;
};
