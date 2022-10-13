import { ComponentStory, ComponentMeta } from "@storybook/react";
import { expensesMockData } from "../../../types/mockData";
import { ExpensesList } from "./Expenses";

export default {
  title: "Screens/ExpensesList",
  component: ExpensesList,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    visible: true,
  },
} as ComponentMeta<typeof ExpensesList>;

const Template: ComponentStory<typeof ExpensesList> = (args) => (
  <ExpensesList {...args} />
);

export const Default = Template.bind({});

Default.args = {
  dataList: expensesMockData,
};
