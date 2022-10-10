import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
}

const initialState: DetailsState = {
  type: DetailType.EXPENSES,
  chart: ChartType.BAR,
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
  },
});

export const { setType, setChart } = detailsSlice.actions;

export default detailsSlice.reducer;
