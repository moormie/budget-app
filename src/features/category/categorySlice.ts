import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Category } from "../../types/Category";
import { fetchCategoryData } from "./categoryAPI";

export interface CategoryState {
  categoryList: Category[];
  status: "idle" | "loading" | "failed";
  loading: boolean;
}

const initialState: CategoryState = {
  categoryList: [],
  status: "idle",
  loading: true,
};

export const getCategoryData = createAsyncThunk("category/get", async () => {
  try {
    const response = await fetchCategoryData();
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
});

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    addNew: (state, action: PayloadAction<Category>) => {
      state.categoryList.push(action.payload);
    },
    remove: (state, action: PayloadAction<string>) => {
      const itemIndex = state.categoryList.findIndex(
        (i) => i.id === action.payload
      );
      state.categoryList.splice(itemIndex, 1);
    },
    updateList: (state, action: PayloadAction<Category[]>) => {
      state.categoryList = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCategoryData.pending, (state) => {
        state.status = "loading";
        state.loading = true;
      })
      .addCase(getCategoryData.fulfilled, (state, action) => {
        state.status = "idle";
        state.categoryList = action.payload;
        state.loading = false;
      })
      .addCase(getCategoryData.rejected, (state) => {
        state.status = "failed";
        state.loading = false;
      });
  },
});

export const { addNew, remove, updateList } = categorySlice.actions;

export const selectCategory = (state: RootState) => state.category.categoryList;

export default categorySlice.reducer;
