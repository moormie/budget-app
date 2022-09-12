import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";
import { Calendar } from "../../assets";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Button",
  icon: <Calendar />,
};
