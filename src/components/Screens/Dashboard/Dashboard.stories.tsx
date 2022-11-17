import { ComponentStory, ComponentMeta } from "@storybook/react";
import { mockExpensesData } from "../../../types/mockData";
import { DashboardScreen } from "./Dashboard";
import { MemoryRouter } from "react-router-dom";
import { DEFAULT_VIEWPORT } from "@storybook/addon-viewport";

export default {
  title: "Screens/Dashboard",
  component: DashboardScreen,
  parameters: {
    viewport: {
      defaultViewport: DEFAULT_VIEWPORT,
    },
  },
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
} as ComponentMeta<typeof DashboardScreen>;

const Template: ComponentStory<typeof DashboardScreen> = (args) => (
  <DashboardScreen {...args} />
);

export const Default = Template.bind({});

Default.args = {};
