import { ComponentStory, ComponentMeta } from "@storybook/react";
import moment from "moment";
import { Moment } from "moment";
import { useState } from "react";
import { Calendar } from "./Calendar";

export default {
  title: "Components/Calendar",
  component: Calendar,
  parameters: {
    controls: {
      exclude: ["value", "setValue"],
    },
  },
} as ComponentMeta<typeof Calendar>;

const Template: ComponentStory<typeof Calendar> = (args) => {
  const [value, setValue] = useState<Moment>(moment());

  return <Calendar {...args} value={value} setValue={setValue} />;
};
export const Default = Template.bind({});
