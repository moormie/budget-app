import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import { useAppDispatch } from "./app/hooks";
import { getExpensesData } from "./features/expenses/expensesSlice";
import { useEffect } from "react";
import ExpensesPage from "./pages/ExpensesPage";
import { getCategoryData } from "./features/category/categorySlice";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getExpensesData());
    dispatch(getCategoryData());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details" element={<DetailsPage />} />
        <Route path="/expenses" element={<ExpensesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
