import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
  mockInitialState,
  Mockstore,
} from "../../../../features/MockStore/MockStore";
import { mockExpensesAmountByCategory } from "../../../../types/mockData";
import { Expenses } from "./Expenses";

export default {
  title: "Components/Expenses",
  component: Expenses,
  decorators: [
    (Story) => (
      <Mockstore initialState={mockInitialState}>
        <Story />
      </Mockstore>
    ),
  ],
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
