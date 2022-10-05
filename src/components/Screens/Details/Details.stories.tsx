import { ComponentStory, ComponentMeta } from "@storybook/react";
import { expensesMockData } from "../../../types/mockData";
import { DetailsScreen } from "./Details";

export default {
  title: "Screens/Details",
  component: DetailsScreen,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    expensesByCategories: expensesMockData,
  },
} as ComponentMeta<typeof DetailsScreen>;

const Template: ComponentStory<typeof DetailsScreen> = (args) => (
  <DetailsScreen {...args} />
);

export const Default = Template.bind({});
