import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Select } from "./Select";
import { useArgs } from "@storybook/client-api";

export default {
  title: "Components/Select",
  component: Select,
  args: {
    options: ["Test 1", "Test 2", "Test 3"],
  },
  parameters: {
    controls: {
      exclude: ["setValue"],
    },
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => {
  const [{ value = "" }, updateArgs] = useArgs();
  return (
    <Select
      {...args}
      setValue={(value) => updateArgs({ value })}
      value={value}
    />
  );
};

export const Default = Template.bind({});
