import { ComponentStory, ComponentMeta } from "@storybook/react";
import { mockExpensesPercentageByCategory } from "../../types/mockData";
import { Legend } from "./Legend";

export default {
  title: "Components/Legend",
  component: Legend,
} as ComponentMeta<typeof Legend>;

const Template: ComponentStory<typeof Legend> = (args) => <Legend {...args} />;

export const Default = Template.bind({});

Default.args = {
  dataList: mockExpensesPercentageByCategory,
};
