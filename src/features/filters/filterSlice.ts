import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Moment } from "moment";
import { Category } from "../../types/Category";
import { SortType } from "../../types/SortType";

export interface FilterState {
  sortValue?: SortType;
  categories: Category[];
  dateFrom: Moment | null;
  dateTo: Moment | null;
  amountFrom: number;
  amountTo?: number;
  note?: string;
}

const initialState: FilterState = {
  categories: [],
  dateFrom: null,
  dateTo: null,
  amountFrom: 0,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSortValue: (state, action: PayloadAction<SortType | undefined>) => {
      state.sortValue = action.payload;
    },
    setCategories: (state, action: PayloadAction<Category[]>) => {
      state.categories = action.payload;
    },
    setDateFrom: (state, action: PayloadAction<Moment | null>) => {
      state.dateFrom = action.payload;
    },
    setDateTo: (state, action: PayloadAction<Moment | null>) => {
      state.dateTo = action.payload;
    },
    setAmountFrom: (state, action: PayloadAction<number>) => {
      state.amountFrom = action.payload;
    },
    setAmountTo: (state, action: PayloadAction<number>) => {
      state.amountTo = action.payload;
    },
    setNote: (state, action: PayloadAction<string>) => {
      state.note = action.payload;
    },
  },
});

export const {
  setSortValue,
  setCategories,
  setDateFrom,
  setDateTo,
  setAmountFrom,
  setAmountTo,
  setNote,
} = filterSlice.actions;

export default filterSlice.reducer;
