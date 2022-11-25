import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import moment from "moment";
import { RootState } from "../../app/store";
import { Expenses } from "../../types/Expenses";

export interface ExpensesState {
  allExpenses: Expenses[];
  selectedMonth: string;
  status: "idle" | "loading" | "failed";
}

const initialState: ExpensesState = {
  allExpenses: [],
  status: "idle",
  selectedMonth: moment().format("MMMM"),
};

const expensesSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    addNew: (state, action: PayloadAction<Expenses>) => {
      state.allExpenses.push(action.payload);
    },
    remove: (state, action: PayloadAction<string>) => {
      const itemIndex = state.allExpenses.findIndex(
        (i) => i.id === action.payload
      );
      state.allExpenses.splice(itemIndex, 1);
    },
    selectMonth: (state, action: PayloadAction<string>) => {
      state.selectedMonth = action.payload;
    },
  },
});

export const { addNew, remove, selectMonth } = expensesSlice.actions;

export const selectExpenses = (state: RootState) => state.expenses.allExpenses;

export default expensesSlice.reducer;
