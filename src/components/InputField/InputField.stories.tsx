import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Calendar } from "../../assets";
import { IconButton } from "../IconButton/IconButton";

import { InputField } from "./InputField";

export default {
  title: "Components/InputField",
  component: InputField,
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
} as ComponentMeta<typeof InputField>;

const Template: ComponentStory<typeof InputField> = (args) => (
  <>
    <InputField placeholder="Default" />
    <InputField endAdornment={<Calendar />} placeholder="End Icon" />
    <InputField
      placeholder="End Button"
      endAdornment={
        <IconButton onClick={() => alert("Clicked")}>
          <Calendar />
        </IconButton>
      }
    />
    <InputField
      placeholder="End Large Button"
      endAdornment={
        <IconButton onClick={() => alert("Clicked")} size="large">
          <Calendar />
        </IconButton>
      }
    />
  </>
);

export const Default = Template.bind({});
