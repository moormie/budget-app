import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";
import { SideNavBar } from "./SideNavBar";

export default {
  title: "Components/SideNavBar",
  component: SideNavBar,
  parameters: {
    controls: {
      exclude: ["selectedElement", "onSelectElement"],
    },
  },
} as ComponentMeta<typeof SideNavBar>;

const Template: ComponentStory<typeof SideNavBar> = (args) => {
  const [selected, setSelected] = useState("dashboard");
  return (
    <SideNavBar
      {...args}
      selectedElement={selected}
      onSelectElement={setSelected}
    />
  );
};

export const Default = Template.bind({});
