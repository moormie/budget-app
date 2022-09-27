import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";
import { NavBar } from "./NavBar";

export default {
  title: "Components/NavBar",
  component: NavBar,
  args: {
    elements: ["Home", "Profile", "Settings"],
  },
  parameters: {
    controls: {
      exclude: ["selectedElement", "onSelectElement"],
    },
  },
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => {
  const [selected, setSelected] = useState("Home");
  return (
    <NavBar
      {...args}
      selectedElement={selected}
      onSelectElement={setSelected}
    />
  );
};

export const Default = Template.bind({});
