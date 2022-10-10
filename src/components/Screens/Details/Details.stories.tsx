import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Provider } from "react-redux";
import {
  ChartType,
  DetailsState,
  DetailType,
} from "../../../features/details/detailsSlice";
import { expensesMockData } from "../../../types/mockData";
import { DetailsScreen } from "./Details";

const Mockstore = (props: {
  initialState: DetailsState;
  children: JSX.Element;
}) => (
  <Provider
    store={configureStore({
      reducer: {
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
      },
    })}
  >
    {props.children}
  </Provider>
);

const initialState: DetailsState = {
  type: DetailType.EXPENSES,
  chart: ChartType.BAR,
};

export default {
  title: "Screens/Details",
  component: DetailsScreen,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <Mockstore initialState={initialState}>
        <Story />
      </Mockstore>
    ),
  ],
  args: {
    expensesByCategories: expensesMockData,
  },
} as ComponentMeta<typeof DetailsScreen>;

const Template: ComponentStory<typeof DetailsScreen> = (args) => (
  <DetailsScreen {...args} />
);

export const Default = Template.bind({});
