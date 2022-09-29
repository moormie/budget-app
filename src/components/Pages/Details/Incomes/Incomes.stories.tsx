import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Incomes } from "./Incomes";

export default {
  title: "Components/Incomes",
  component: Incomes,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Incomes>;

const Template: ComponentStory<typeof Incomes> = (args) => (
  <Incomes {...args} />
);

export const Default = Template.bind({});
