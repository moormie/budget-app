import { ComponentStory, ComponentMeta } from "@storybook/react";
import { getCategoriesPercentage } from "../../helpers/getCategoriesAmount";
import { mockCategoryData, mockExpensesData } from "../../types/mockData";
import { PieChart } from "./PieChart";

export default {
  title: "Components/PieChart",
  component: PieChart,
} as ComponentMeta<typeof PieChart>;

const Template: ComponentStory<typeof PieChart> = (args) => (
  <PieChart {...args} />
);

export const Default = Template.bind({});

Default.args = {
  dataList: getCategoriesPercentage(mockExpensesData),
  categoryList: mockCategoryData,
};
