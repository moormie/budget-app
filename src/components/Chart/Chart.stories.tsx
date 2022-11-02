import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
  mockInitialState,
  Mockstore,
} from "../../features/MockStore/MockStore";
import { mockExpensesData } from "../../types/mockData";
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
  decorators: [
    (Story) => (
      <Mockstore initialState={mockInitialState}>
        <Story />
      </Mockstore>
    ),
  ],
} as ComponentMeta<typeof Chart>;

const Template: ComponentStory<typeof Chart> = (args) => <Chart {...args} />;

export const Default = Template.bind({});

Default.args = {
  dataList: mockExpensesData,
  type: "bar",
};
