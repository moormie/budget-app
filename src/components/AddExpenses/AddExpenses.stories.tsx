import { ComponentStory, ComponentMeta } from "@storybook/react";
import { mockCategoryData } from "../../types/mockData";
import { AddExpenses } from "./AddExpenses";

export default {
  title: "Components/AddExpenses",
  component: AddExpenses,
  args: {
    categoryList: mockCategoryData,
  },
} as ComponentMeta<typeof AddExpenses>;

const Template: ComponentStory<typeof AddExpenses> = (args) => (
  <AddExpenses {...args} />
);

export const Default = Template.bind({});
