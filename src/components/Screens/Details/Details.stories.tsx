import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
  mockInitialState,
  Mockstore,
} from "../../../features/MockStore/MockStore";
import { mockExpensesAmountByCategory } from "../../../types/mockData";
import { DetailsScreen } from "./Details";

export default {
  title: "Screens/Details",
  component: DetailsScreen,
  decorators: [
    (Story) => (
      <Mockstore initialState={mockInitialState}>
        <Story />
      </Mockstore>
    ),
  ],
  args: {
    expensesByCategories: mockExpensesAmountByCategory,
  },
} as ComponentMeta<typeof DetailsScreen>;

const Template: ComponentStory<typeof DetailsScreen> = (args) => (
  <DetailsScreen {...args} />
);

export const Default = Template.bind({});
