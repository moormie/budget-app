import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CaretLeft } from "../../assets";
import { IconButton } from "./IconButton";

export default {
  title: "Components/IconButton",
  component: IconButton,
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} />
);

export const Default = Template.bind({});

Default.args = {
  children: <CaretLeft />,
  onClick: () => alert("clicked"),
};
