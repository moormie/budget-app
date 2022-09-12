import { ComponentStory, ComponentMeta } from "@storybook/react";

import { BottomNavBar } from "./BottomNavBar";

export default {
  title: "Components/BottomNavBar",
  component: BottomNavBar,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof BottomNavBar>;

const Template: ComponentStory<typeof BottomNavBar> = (args) => (
  <BottomNavBar {...args} />
);

export const Default = Template.bind({});
