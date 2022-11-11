import { ComponentStory, ComponentMeta } from "@storybook/react";
import { mockExpensesAmountByCategory } from "../../../../types/mockData";
import { Expenses } from "./Expenses";

export default {
  title: "Components/Expenses",
  component: Expenses,
  args: {
    expensesByCategories: mockExpensesAmountByCategory,
    isBarChart: true,
  },
  argTypes: {
    isBarChart: {
      control: {
        type: "boolean",
      },
    },
  },
} as ComponentMeta<typeof Expenses>;

const Template: ComponentStory<typeof Expenses> = (args) => (
  <Expenses {...args} />
);

export const Default = Template.bind({});
