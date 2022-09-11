import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Calendar } from "../../assets";

import { InputField } from "./InputField";

export default {
  title: "Components/InputField",
  component: InputField,
} as ComponentMeta<typeof InputField>;

const Template: ComponentStory<typeof InputField> = (args) => (
  <InputField {...args} />
);

export const Default = Template.bind({});

export const EndIcon = Template.bind({});
EndIcon.args = {
  endAdornment: <Calendar />,
  placeholder: "Placeholder",
};
