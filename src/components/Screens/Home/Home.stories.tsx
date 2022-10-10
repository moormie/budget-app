import { ComponentStory, ComponentMeta } from "@storybook/react";
import { expensesMockData } from "../../../types/mockData";
import { HomeScreen } from "./Home";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Expenses } from "../../../types/Expenses";
import { ExpensesState } from "../../../features/expenses/expensesSlice";

const Mockstore = (props: {
  initialState: ExpensesState;
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
          },
        }).reducer,
      },
    })}
  >
    {props.children}
  </Provider>
);

const initialState: ExpensesState = {
  dataList: [],
  status: "idle",
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
        <Mockstore initialState={initialState}>
          <Story />
        </Mockstore>
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<typeof HomeScreen>;

const Template: ComponentStory<typeof HomeScreen> = (args) => (
  <HomeScreen {...args} />
);

export const Default = Template.bind({});

Default.args = {
  expensesList: expensesMockData,
};
