import { ComponentStory, ComponentMeta } from "@storybook/react";
import { mockExpensesData } from "../../../types/mockData";
import { HomeScreen } from "./Home";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Screens/Home",
  component: HomeScreen,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  args: {
    expensesList: mockExpensesData,
  },
} as ComponentMeta<typeof HomeScreen>;

const Template: ComponentStory<typeof HomeScreen> = (args) => (
  <HomeScreen {...args} />
);

export const Default = Template.bind({});

Default.args = {};
