import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import incomesReducer from "../features/incomes/incomesSlice";
import expensesReducer from "../features/expenses/expensesSlice";
import detailsReducer from "../features/details/detailsSlice";
import filterReducer from "../features/filters/filterSlice";
import categoryReducer from "../features/category/categorySlice";

export const store = configureStore({
  reducer: {
    expenses: expensesReducer,
    incomes: incomesReducer,
    details: detailsReducer,
    filter: filterReducer,
    category: categoryReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
