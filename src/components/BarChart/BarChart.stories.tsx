import { ComponentStory, ComponentMeta } from "@storybook/react";
import { expensesMockData } from "../../types/mockData";
import { BarChart } from "./BarChart";

export default {
  title: "Components/Chart",
  component: BarChart,
  argTypes: {
    type: {
      options: ["bar", "pie"],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof BarChart>;

const Template: ComponentStory<typeof BarChart> = (args) => (
  <BarChart {...args} />
);

export const Default = Template.bind({});

Default.args = {
  dataList: expensesMockData,
  type: "bar",
};
