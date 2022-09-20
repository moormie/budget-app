import { ComponentStory, ComponentMeta } from "@storybook/react";
import { mockData } from "../../types/mockData";
import { Chart } from "./Chart";

export default {
  title: "Components/Chart",
  component: Chart,
} as ComponentMeta<typeof Chart>;

const Template: ComponentStory<typeof Chart> = (args) => <Chart {...args} />;

export const Default = Template.bind({});

Default.args = {
  dataList: mockData,
};
