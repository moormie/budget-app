import { ComponentStory, ComponentMeta } from "@storybook/react";
import { AmountHeader } from "./AmountHeader";

export default {
  title: "Components/AmountHeader",
  component: AmountHeader,
  argTypes: {
    colorPrimary: { control: "color" },
    colorSecondary: { control: "color" },
  },
} as ComponentMeta<typeof AmountHeader>;

const Template: ComponentStory<typeof AmountHeader> = (args) => (
  <AmountHeader {...args} />
);

export const Default = Template.bind({});

Default.args = {
  amount: "1200",
};
