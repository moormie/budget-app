import { ComponentStory, ComponentMeta } from "@storybook/react";
import { expensesMockData } from "../../../types/mockData";
import { HomeScreen } from "./Home";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Screens/Home",
  component: HomeScreen,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<typeof HomeScreen>;

const Template: ComponentStory<typeof HomeScreen> = (args) => (
  <HomeScreen {...args} />
);

export const Default = Template.bind({});

Default.args = {
  expensesList: expensesMockData,
};
