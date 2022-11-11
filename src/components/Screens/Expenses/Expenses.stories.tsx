import { ComponentStory, ComponentMeta } from "@storybook/react";
import { mockExpensesData } from "../../../types/mockData";
import { ExpensesList } from "./Expenses";

export default {
  title: "Screens/ExpensesList",
  component: ExpensesList,
  args: {
    visible: true,
  },
} as ComponentMeta<typeof ExpensesList>;

const Template: ComponentStory<typeof ExpensesList> = (args) => (
  <ExpensesList {...args} />
);

export const Default = Template.bind({});

Default.args = {
  dataList: mockExpensesData,
};
