import { ComponentStory, ComponentMeta } from "@storybook/react";
import { NavBar } from "./NavBar";

export default {
  title: "Components/NavBar",
  component: NavBar,
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />;

export const Default = Template.bind({});

Default.args = {
  elements: ["Home", "Profile", "Settings"],
  selectedElement: "Home",
  onSelectElement: (element) => alert(element),
};
