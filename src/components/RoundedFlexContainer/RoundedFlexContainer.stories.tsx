import { ComponentStory, ComponentMeta } from "@storybook/react";

import { RoundedFlexContainer } from "./RoundedFlexContainer";

export default {
  title: "Components/Container",
  component: RoundedFlexContainer,
  args: {
    children: <p>TEST CONTAINER</p>,
  },
} as ComponentMeta<typeof RoundedFlexContainer>;

const Template: ComponentStory<typeof RoundedFlexContainer> = (args) => (
  <RoundedFlexContainer {...args} />
);

export const Default = Template.bind({});
