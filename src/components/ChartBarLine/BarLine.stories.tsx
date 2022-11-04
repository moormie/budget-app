import { ComponentStory, ComponentMeta } from "@storybook/react";

import { BarLine } from "./BarLine";

export default {
  title: "Components/BarLine",
  component: BarLine,
  decorators: [
    (Story) => (
      <div style={{ height: 200 }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof BarLine>;

const Template: ComponentStory<typeof BarLine> = (args) => (
  <BarLine {...args} />
);

export const Default = Template.bind({});

Default.args = {
  height: 78,
  colorPrimary: "blue",
};
