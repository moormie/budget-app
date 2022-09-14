import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MainPage } from "./MainPage";

export default {
  title: "Pages/MainPage",
  component: MainPage,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = (args) => (
  <MainPage {...args} />
);

export const Default = Template.bind({});
