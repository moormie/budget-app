import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SortType } from "../../types/SortType";

export interface FilterState {
  sortValue?: SortType;
}

const initialState: FilterState = {};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSortValue: (state, action: PayloadAction<SortType | undefined>) => {
      state.sortValue = action.payload;
    },
  },
});

export const { setSortValue } = filterSlice.actions;

export default filterSlice.reducer;
