import { ComponentStory, ComponentMeta } from "@storybook/react";
import { expensesMockData } from "../../types/mockData";
import { PieChart } from "./PieChart";

export default {
  title: "Components/PieChart",
  component: PieChart,
} as ComponentMeta<typeof PieChart>;

const Template: ComponentStory<typeof PieChart> = (args) => (
  <PieChart {...args} />
);

export const Default = Template.bind({});

Default.args = {
  dataList: expensesMockData,
};
