import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Calendar } from "./Calendar";

export default {
  title: "Components/Calendar",
  component: Calendar,
  argTypes: {
    value: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Calendar>;

const Template: ComponentStory<typeof Calendar> = (args) => (
  <Calendar {...args} />
);

export const Default = Template.bind({});

Default.args = {
  setValue: (value) => alert(value),
};
