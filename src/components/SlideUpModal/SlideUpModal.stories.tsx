import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SlideUpModal } from "./SlideUpModal";

export default {
  title: "Components/SlideUpModal",
  component: SlideUpModal,
  args: {
    visible: true,
  },
} as ComponentMeta<typeof SlideUpModal>;

const Template: ComponentStory<typeof SlideUpModal> = (args) => (
  <SlideUpModal {...args}>
    <div>This is the modal</div>
  </SlideUpModal>
);

export const Default = Template.bind({});
