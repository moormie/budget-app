import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { fetchExpensesData } from "../features/expenses/expensesAPI";
import expensesReducer from "../features/expenses/expensesSlice";
import detailsReducer from "../features/details/detailsSlice";

export const store = configureStore({
  reducer: {
    expenses: expensesReducer,
    details: detailsReducer,
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
