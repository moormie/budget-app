import { ComponentStory, ComponentMeta } from "@storybook/react";
import { mockData } from "../../types/mockData";
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
  dataList: mockData,
  type: "bar",
};
