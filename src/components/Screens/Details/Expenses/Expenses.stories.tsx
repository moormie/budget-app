import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
  mockInitialState,
  Mockstore,
} from "../../../../features/MockStore/MockStore";
import { Expenses } from "./Expenses";

const dataList = [
  {
    id: "001",
    category: "Food",
    amount: 1550,
  },
  {
    id: "002",
    category: "Car",
    amount: 60,
  },
  {
    id: "003",
    category: "Medical",
    amount: 120,
  },
  {
    id: "005",
    category: "Travel",
    amount: 1072,
  },
  {
    id: "006",
    category: "Home",
    amount: 500,
  },
  { id: "008", category: "Entertainment", amount: 45 },
  { id: "009", category: "Personal", amount: 160 },
];

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
    expensesByCategories: dataList,
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
