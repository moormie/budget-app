import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { fetchExpensesData } from "../features/expenses/expensesAPI";
import expensesReducer from "../features/expenses/expensesSlice";
import detailsReducer from "../features/details/detailsSlice";
import filterReducer from "../features/filters/filterSlice";

export const store = configureStore({
  reducer: {
    expenses: expensesReducer,
    details: detailsReducer,
    filter: filterReducer,
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
