import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ChartBarLine } from "./ChartBarLine";

export default {
  title: "Components/ChartBarLine",
  component: ChartBarLine,
  decorators: [
    (Story) => (
      <div style={{ height: 200 }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof ChartBarLine>;

const Template: ComponentStory<typeof ChartBarLine> = (args) => (
  <ChartBarLine {...args} />
);

export const Default = Template.bind({});

Default.args = {
  height: 78,
};
