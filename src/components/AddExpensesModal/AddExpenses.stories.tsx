import { ComponentStory, ComponentMeta } from "@storybook/react";
import { AddExpenses } from "./AddExpenses";
import { useArgs } from "@storybook/client-api";

export default {
  title: "Components/AddExpenses",
  component: AddExpenses,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    visible: true,
  },
} as ComponentMeta<typeof AddExpenses>;

const Template: ComponentStory<typeof AddExpenses> = (args) => {
  const [{ isOpen = false }, updateArgs] = useArgs();

  return (
    <AddExpenses
      {...args}
      visible={isOpen}
      onClose={(open) => updateArgs({ open })}
    />
  );
};

export const Default = Template.bind({});
