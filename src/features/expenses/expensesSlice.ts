import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import moment from "moment";
import { RootState } from "../../app/store";
import { Expenses } from "../../types/Expenses";
import { fetchExpensesData } from "./expensesAPI";

export interface ExpensesState {
  allExpenses: Expenses[];
  selectedMonth: string;
  status: "idle" | "loading" | "failed";
  loading: boolean;
}

const initialState: ExpensesState = {
  allExpenses: [],
  status: "idle",
  selectedMonth: moment().format("MMMM"),
  loading: true,
};

export const getExpensesData = createAsyncThunk("expenses/get", async () => {
  try {
    const response = await fetchExpensesData();
    return response;
  } catch (error) {
    console.log(error);
    return [];
  }
});

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
  extraReducers: (builder) => {
    builder
      .addCase(getExpensesData.pending, (state) => {
        state.status = "loading";
        state.loading = true;
      })
      .addCase(getExpensesData.fulfilled, (state, action) => {
        state.status = "idle";
        state.allExpenses = action.payload;
        state.loading = false;
      })
      .addCase(getExpensesData.rejected, (state) => {
        state.status = "failed";
        state.loading = false;
      });
  },
});

export const { addNew, remove, selectMonth } = expensesSlice.actions;

export const selectExpenses = (state: RootState) => state.expenses.allExpenses;

export default expensesSlice.reducer;
