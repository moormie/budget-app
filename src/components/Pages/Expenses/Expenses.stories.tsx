import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Expenses } from "./Expenses";

export default {
  title: "Pages/Expenses",
  component: Expenses,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Expenses>;

const Template: ComponentStory<typeof Expenses> = (args) => (
  <Expenses {...args} />
);

export const Default = Template.bind({});
