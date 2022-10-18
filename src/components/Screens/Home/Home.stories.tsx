import { ComponentStory, ComponentMeta } from "@storybook/react";
import { expensesMockData } from "../../../types/mockData";
import { HomeScreen } from "./Home";
import { MemoryRouter } from "react-router-dom";
import { mockInitialState, Mockstore } from "../../../features/MockStore/MockStore";

export default {
  title: "Screens/Home",
  component: HomeScreen,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Mockstore initialState={mockInitialState}>
          <Story />
        </Mockstore>
      </MemoryRouter>
    ),
  ],
  args: {
    expensesList: expensesMockData,
  },
} as ComponentMeta<typeof HomeScreen>;

const Template: ComponentStory<typeof HomeScreen> = (args) => (
  <HomeScreen {...args} />
);

export const Default = Template.bind({});

Default.args = {};
