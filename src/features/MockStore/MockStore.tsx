import { Provider } from "react-redux";
import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ExpensesState } from "../expenses/expensesSlice";
import { ChartType, DetailsState, DetailType } from "../details/detailsSlice";
import { Expenses } from "../../types/Expenses";
import { SortType } from "../../types/SortType";
import { FilterState } from "../filters/filterSlice";

export const mockInitialState: ExpensesState & DetailsState & FilterState = {
  dataList: [],
  status: "idle",
  type: DetailType.EXPENSES,
  chart: ChartType.BAR,
  sortValue: SortType.DATE_DESC,
};

export const Mockstore = (props: {
  initialState: ExpensesState & DetailsState & FilterState;
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
              const itemIndex = state.dataList.findIndex(
                (i) => i.id === action.payload
              );
              state.dataList.splice(itemIndex, 1);
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
            setSortValue: (
              state,
              action: PayloadAction<SortType | undefined>
            ) => {
              state.sortValue = action.payload;
            },
          },
        }).reducer,
      },
    })}
  >
    {props.children}
  </Provider>
);
