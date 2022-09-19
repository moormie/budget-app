import { ComponentStory, ComponentMeta } from "@storybook/react";
import moment from "moment";

import { Calendar } from "./Calendar";

export default {
  title: "Components/Calendar",
  component: Calendar,
} as ComponentMeta<typeof Calendar>;

const Template: ComponentStory<typeof Calendar> = (args) => (
  <Calendar {...args} />
);

export const Default = Template.bind({});

Default.args = {
  value: moment(),
  setValue: (value) => alert(moment(value)),
};
