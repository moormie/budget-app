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
  sortValue: SortType;
}

const initialState: DetailsState = {
  type: DetailType.EXPENSES,
  chart: ChartType.BAR,
  sortValue: SortType.DATE_DESC,
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
    setSortValue: (state, action: PayloadAction<SortType>) => {
      state.sortValue = action.payload;
    },
  },
});

export const { setType, setChart, setSortValue } = detailsSlice.actions;

export default detailsSlice.reducer;
