import { createContext, FC, useContext, useEffect, useState } from "react";
import { getAllExpenses } from "../firebase/expenses";
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

  useEffect(() => {
    const load = async () => {
      try {
        const expensesList = await getAllExpenses();
        setState({
          loading: false,
          allExpenses: expensesList,
        });
      } catch (error) {
        console.log(error);
        setState({
          loading: false,
          allExpenses: [],
        });
      }
    };
    load();
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
