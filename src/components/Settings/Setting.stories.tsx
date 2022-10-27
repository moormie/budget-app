import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Settings } from "./Settings";

export default {
  title: "Components/Settings",
  component: Settings,
} as ComponentMeta<typeof Settings>;

const Template: ComponentStory<typeof Settings> = (args) => (
  <Settings {...args} />
);

export const Default = Template.bind({});

Default.args = {};
