import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MenuList } from "./MenuList";

export default {
  title: "Components/MenuList",
  component: MenuList,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof MenuList>;

const Template: ComponentStory<typeof MenuList> = (args) => (
  <MenuList {...args} />
);

export const Default = Template.bind({});

Default.args = {
  values: ["Test 1", "Test 2", "Test 3"],
};
