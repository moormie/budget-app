import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MainCard } from "./MainCard";

export default {
  title: "Components/MainCard",
  component: MainCard,
} as ComponentMeta<typeof MainCard>;

const Template: ComponentStory<typeof MainCard> = (args) => (
  <MainCard {...args} />
);

export const Default = Template.bind({});

Default.args = {
  totalExpenses: 780.5,
  totalIncome: 1350.0,
};
