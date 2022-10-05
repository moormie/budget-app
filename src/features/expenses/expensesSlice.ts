import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Expenses } from "../../types/Expenses";
import { fetchExpensesData } from "./expensesAPI";

export interface ExpensesState {
  dataList: Expenses[];
  status: "idle" | "loading" | "failed";
}

const initialState: ExpensesState = {
  dataList: [],
  status: "idle",
};

export const getExpensesData = createAsyncThunk("expenses/get", async () => {
  const response = await fetchExpensesData();
  return response.data;
});

const expensesSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getExpensesData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getExpensesData.fulfilled, (state, action) => {
        state.status = "idle";
        state.dataList = action.payload;
      })
      .addCase(getExpensesData.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const selectExpenses = (state: RootState) => state.expenses.dataList;

export default expensesSlice.reducer;
