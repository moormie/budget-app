import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Car } from "../../assets";

import { ColoredIcon } from "./ColoredIcon";

export default {
  title: "Components/ColoredIcon",
  component: ColoredIcon,
  argTypes: {
    colorPrimary: { control: "color" },
    colorSecondary: { control: "color" },
  },
} as ComponentMeta<typeof ColoredIcon>;

const Template: ComponentStory<typeof ColoredIcon> = (args) => (
  <ColoredIcon {...args} />
);

export const Default = Template.bind({});

Default.args = {
  children: <Car />,
};
