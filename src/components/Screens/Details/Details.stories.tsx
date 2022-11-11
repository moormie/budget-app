import { ComponentStory, ComponentMeta } from "@storybook/react";
import { mockExpensesAmountByCategory } from "../../../types/mockData";
import { DetailsScreen } from "./Details";

export default {
  title: "Screens/Details",
  component: DetailsScreen,
  args: {
    expensesByCategories: mockExpensesAmountByCategory,
  },
} as ComponentMeta<typeof DetailsScreen>;

const Template: ComponentStory<typeof DetailsScreen> = (args) => (
  <DetailsScreen {...args} />
);

export const Default = Template.bind({});
