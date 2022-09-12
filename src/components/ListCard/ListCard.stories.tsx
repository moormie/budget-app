import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Car } from "../../assets";

import { ListCard } from "./ListCard";

export default {
  title: "Components/ListCard",
  component: ListCard,
} as ComponentMeta<typeof ListCard>;

const Template: ComponentStory<typeof ListCard> = (args) => (
  <ListCard {...args} />
);

export const Default = Template.bind({});

Default.args = {
  icon: <Car />,
  mainLabel: "Vehicle",
  endLabel: "€ 18.0",
  endSublabel: "19 March 2022",
};
