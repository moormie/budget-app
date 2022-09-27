import { ComponentStory, ComponentMeta } from "@storybook/react";
import { expensesMockData } from "../../types/mockData";
import { Chart } from "./Chart";

export default {
  title: "Components/Chart",
  component: Chart,
  argTypes: {
    type: {
      options: ["bar", "pie"],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof Chart>;

const Template: ComponentStory<typeof Chart> = (args) => <Chart {...args} />;

export const Default = Template.bind({});

Default.args = {
  dataList: expensesMockData,
  type: "bar",
};
