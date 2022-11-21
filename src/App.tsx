import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { addNew, getExpensesData } from "./features/expenses/expensesSlice";
import { useEffect, useState } from "react";
import ExpensesPage from "./pages/ExpensesPage";
import { getCategoryData } from "./features/category/categorySlice";
import { BottomNavBar } from "./components/BottomNavBar/BottomNavBar";
import { Expenses } from "./types/Expenses";
import { Delayed } from "./components/Delayed/Delayed";
import { SlideUpModal } from "./components/SlideUpModal/SlideUpModal";
import { AddExpenses } from "./components/AddExpenses/AddExpenses";
import { getIncomesData } from "./features/incomes/incomesSlice";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getExpensesData());
    dispatch(getIncomesData());
    dispatch(getCategoryData());
  }, [dispatch]);

  const [isAddNewOpen, setIsAddNewOpen] = useState(false);

  const onAddNewExpense = (newExpense: Expenses) => {
    dispatch(addNew(newExpense));
    setIsAddNewOpen(false);
  };

  const { categoryList } = useAppSelector((state) => state.category);

  return (
    <BrowserRouter>
      <BottomNavBar onClickButton={() => setIsAddNewOpen(true)} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details" element={<DetailsPage />} />
        <Route path="/expenses" element={<ExpensesPage />} />
      </Routes>
      <Delayed visible={isAddNewOpen}>
        <SlideUpModal onClose={() => setIsAddNewOpen(false)}>
          <AddExpenses categoryList={categoryList} onSave={onAddNewExpense} />
        </SlideUpModal>
      </Delayed>
    </BrowserRouter>
  );
}

export default App;
