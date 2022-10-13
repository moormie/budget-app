import { ComponentStory, ComponentMeta } from "@storybook/react";
import { AddExpenses } from "./AddExpenses";

export default {
  title: "Components/AddExpenses",
  component: AddExpenses,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof AddExpenses>;

const Template: ComponentStory<typeof AddExpenses> = (args) => (
  <AddExpenses {...args} />
);

export const Default = Template.bind({});
