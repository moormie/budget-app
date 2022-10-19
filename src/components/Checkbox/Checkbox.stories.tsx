import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Checkbox } from "./Checkbox";
import { useArgs } from "@storybook/client-api";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => {
  const [{ value = "" }, updateArgs] = useArgs();

  return (
    <Checkbox
      {...args}
      setValue={(value) => updateArgs({ value })}
      value={value}
    />
  );
};

export const Default = Template.bind({});

Default.args = {
  value: "Test",
};
