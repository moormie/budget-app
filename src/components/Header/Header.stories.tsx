import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Person, Settings } from "../../assets";
import { ColoredIcon } from "../ColoredIcon/ColoredIcon";
import { Header } from "./Header";

export default {
  title: "Components/Header",
  component: Header,
  argTypes: {
    startElement: {
      table: {
        disable: true,
      },
    },
    endElement: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Default = Template.bind({});
export const NoIcons = Template.bind({});
export const StartIcon = Template.bind({});
export const EndIcon = Template.bind({});

Default.args = {
  title: "User Name",
  subtitle: "Welcome!",
  startElement: (
    <ColoredIcon>
      <Person />
    </ColoredIcon>
  ),
  endElement: (
    <ColoredIcon>
      <Settings />
    </ColoredIcon>
  ),
};
NoIcons.args = {
  title: "User Name",
  subtitle: "Welcome!",
};
StartIcon.args = {
  title: "User Name",
  subtitle: "Welcome!",
  startElement: (
    <ColoredIcon>
      <Person />
    </ColoredIcon>
  ),
};
EndIcon.args = {
  title: "User Name",
  endElement: (
    <ColoredIcon>
      <Settings />
    </ColoredIcon>
  ),
};
