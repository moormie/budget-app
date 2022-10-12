import { ComponentStory, ComponentMeta } from "@storybook/react";
import { expensesMockData } from "../../../types/mockData";
import { HomeScreen } from "./Home";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Expenses } from "../../../types/Expenses";
import { ExpensesState } from "../../../features/expenses/expensesSlice";
import { SortType } from "../../../types/SortType";
import {
  ChartType,
  DetailsState,
  DetailType,
} from "../../../features/details/detailsSlice";

const Mockstore = (props: {
  initialState: ExpensesState & DetailsState;
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
            setTransactionSortValue: (
              state,
              action: PayloadAction<SortType>
            ) => {
              state.transactionSortValue = action.payload;
            },
          },
        }).reducer,
      },
    })}
  >
    {props.children}
  </Provider>
);

const initialStateExpenses: ExpensesState & DetailsState = {
  dataList: [],
  status: "idle",
  type: DetailType.EXPENSES,
  chart: ChartType.BAR,
  transactionSortValue: SortType.DATE_DESC,
  summarySortValue: SortType.CATEGORY,
};

export default {
  title: "Screens/Home",
  component: HomeScreen,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Mockstore initialState={initialStateExpenses}>
          <Story />
        </Mockstore>
      </MemoryRouter>
    ),
  ],
  args: {
    expensesList: expensesMockData,
  },
} as ComponentMeta<typeof HomeScreen>;

const Template: ComponentStory<typeof HomeScreen> = (args) => (
  <HomeScreen {...args} />
);

export const Default = Template.bind({});

Default.args = {};
