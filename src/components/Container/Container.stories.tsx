import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Container } from "./Container";

export default {
  title: "Components/Container",
  component: Container,
  args: {
    children: <p>TEST CONTAINER</p>,
  },
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => (
  <Container {...args} />
);

export const Default = Template.bind({});
