import { Provider } from "react-redux";
import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ExpensesState } from "../expenses/expensesSlice";
import { ChartType, DetailsState, DetailType } from "../details/detailsSlice";
import { Expenses } from "../../types/Expenses";
import { SortType } from "../../types/SortType";
import { FilterState } from "../filters/filterSlice";
import { Category } from "../../types/Category";
import moment, { Moment } from "moment";
import { CategoryState } from "../category/categorySlice";
import { mockCategoryData, mockExpensesData } from "../../types/mockData";

export const mockInitialState: ExpensesState &
  DetailsState &
  FilterState &
  CategoryState = {
  allExpenses: mockExpensesData,
  status: "idle",
  loading: false,
  type: DetailType.EXPENSES,
  chart: ChartType.BAR,
  sortValue: SortType.DATE_DESC,
  categories: [],
  dateFrom: null,
  dateTo: null,
  amountFrom: 0,
  categoryList: mockCategoryData,
  selectedMonth: moment().format("MMMM"),
};

export const Mockstore = (props: {
  initialState: ExpensesState & DetailsState & FilterState & CategoryState;
  children: JSX.Element;
}) => (
  <Provider
    store={configureStore({
      reducer: {
        expenses: createSlice({
          name: "expenses",
          initialState: props.initialState,
          reducers: {
            addNew: (state, action: PayloadAction<Expenses>) => {
              alert(JSON.stringify(action.payload));
            },
            remove: (state, action: PayloadAction<string>) => {
              const itemIndex = state.allExpenses.findIndex(
                (i) => i.id === action.payload
              );
              state.allExpenses.splice(itemIndex, 1);
            },
          },
        }).reducer,
        details: createSlice({
          name: "details",
          initialState: props.initialState,
          reducers: {
            setType: (state, action: PayloadAction<DetailType>) => {
              state.type = action.payload;
            },
            setChart: (state, action: PayloadAction<ChartType>) => {
              state.chart = action.payload;
            },
          },
        }).reducer,
        filter: createSlice({
          name: "filter",
          initialState: props.initialState,
          reducers: {
            setSortValue: (
              state,
              action: PayloadAction<SortType | undefined>
            ) => {
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
        }).reducer,
        category: createSlice({
          name: "category",
          initialState: props.initialState,
          reducers: {},
        }).reducer,
      },
    })}
  >
    {props.children}
  </Provider>
);
