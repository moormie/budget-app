import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Chart } from "./Chart";

export default {
  title: "Components/Chart",
  component: Chart,
} as ComponentMeta<typeof Chart>;

const Template: ComponentStory<typeof Chart> = (args) => <Chart {...args} />;

export const Default = Template.bind({});

const MockData = [
  { category: "food", amount: 500 },
  { category: "car", amount: 150 },
  { category: "entertainment", amount: 50 },
  { category: "home", amount: 1000 },
  { category: "travel", amount: 50 },
  { category: "medical", amount: 0 },
];

Default.args = {
  dataList: MockData,
};
