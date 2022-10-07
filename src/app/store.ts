import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { fetchExpensesData } from "../features/expenses/expensesAPI";
import expensesReducer from "../features/expenses/expensesSlice";

export const store = configureStore({
  reducer: {
    expenses: expensesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: fetchExpensesData,
      },
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
