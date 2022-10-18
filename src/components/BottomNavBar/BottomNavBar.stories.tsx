import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";

import { BottomNavBar } from "./BottomNavBar";

export default {
  title: "Components/BottomNavBar",
  component: BottomNavBar,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<typeof BottomNavBar>;

const Template: ComponentStory<typeof BottomNavBar> = (args) => (
  <BottomNavBar {...args} />
);

export const Default = Template.bind({});
