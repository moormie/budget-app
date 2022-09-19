import { ComponentStory, ComponentMeta } from "@storybook/react";
import { DatePicker } from "./DatePicker";

export default {
  title: "Components/DatePicker",
  component: DatePicker,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof DatePicker>;

const Template: ComponentStory<typeof DatePicker> = (args) => (
  <DatePicker {...args} />
);

export const Default = Template.bind({});

Default.args = {};
