import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SortType } from "../../types/SortType";

export enum DetailType {
  INCOME = "Income",
  EXPENSES = "Expenses",
}

export enum ChartType {
  BAR = "bar",
  PIE = "pie",
}
export interface DetailsState {
  type: DetailType;
  chart: ChartType;
  transactionSortValue?: SortType;
  summarySortValue: SortType;
}

const initialState: DetailsState = {
  type: DetailType.EXPENSES,
  chart: ChartType.BAR,
  summarySortValue: SortType.CATEGORY,
};

const detailsSlice = createSlice({
  name: "details",
  initialState,
  reducers: {
    setType: (state, action: PayloadAction<DetailType>) => {
      state.type = action.payload;
    },
    setChart: (state, action: PayloadAction<ChartType>) => {
      state.chart = action.payload;
    },
    setTransactionSortValue: (
      state,
      action: PayloadAction<SortType | undefined>
    ) => {
      state.transactionSortValue = action.payload;
    },
    setSummarySortValue: (state, action: PayloadAction<SortType>) => {
      state.summarySortValue = action.payload;
    },
  },
});

export const {
  setType,
  setChart,
  setTransactionSortValue,
  setSummarySortValue,
} = detailsSlice.actions;

export default detailsSlice.reducer;
