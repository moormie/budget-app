import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Details } from "./Details";

export default {
  title: "Pages/Details",
  component: Details,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Details>;

const Template: ComponentStory<typeof Details> = (args) => (
  <Details {...args} />
);

export const Default = Template.bind({});
