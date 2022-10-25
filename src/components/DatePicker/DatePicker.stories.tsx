import { ComponentStory, ComponentMeta } from "@storybook/react";
import { DatePicker } from "./DatePicker";
import { useArgs } from "@storybook/client-api";
import moment from "moment";

export default {
  title: "Components/DatePicker",
  component: DatePicker,
} as ComponentMeta<typeof DatePicker>;

const Template: ComponentStory<typeof DatePicker> = (args) => {
  const [{ value = moment() }, updateArgs] = useArgs();
  return (
    <DatePicker
      {...args}
      setValue={(value) => updateArgs({ value })}
      value={value}
    />
  );
};

export const Default = Template.bind({});

Default.args = {};
