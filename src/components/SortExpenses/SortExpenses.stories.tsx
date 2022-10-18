import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SortExpenses } from "./SortExpenses";

export default {
  title: "Components/SortExpenses",
  component: SortExpenses,
} as ComponentMeta<typeof SortExpenses>;

const Template: ComponentStory<typeof SortExpenses> = (args) => (
  <SortExpenses {...args} />
);

export const Default = Template.bind({});
