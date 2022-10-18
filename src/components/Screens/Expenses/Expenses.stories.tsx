import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
  mockInitialState,
  Mockstore,
} from "../../../features/MockStore/MockStore";
import { expensesMockData } from "../../../types/mockData";
import { ExpensesList } from "./Expenses";

export default {
  title: "Screens/ExpensesList",
  component: ExpensesList,
  args: {
    visible: true,
  },
  decorators: [
    (Story) => (
      <Mockstore initialState={mockInitialState}>
        <Story />
      </Mockstore>
    ),
  ],
} as ComponentMeta<typeof ExpensesList>;

const Template: ComponentStory<typeof ExpensesList> = (args) => (
  <ExpensesList {...args} />
);

export const Default = Template.bind({});

Default.args = {
  dataList: expensesMockData,
};
