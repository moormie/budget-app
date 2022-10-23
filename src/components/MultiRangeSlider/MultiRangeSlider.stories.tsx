import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MultiRangeSlider } from "./MultiRangeSlider";
import { useState } from "react";

export default {
  title: "Components/MultiRangeSlider",
  component: MultiRangeSlider,
  args: {
    min: 0,
    max: 100,
  },
} as ComponentMeta<typeof MultiRangeSlider>;

const Template: ComponentStory<typeof MultiRangeSlider> = (args) => {
  const [amountFrom, setAmountFrom] = useState<number>(0);
  const [amountTo, setAmountTo] = useState<number>(100);

  return (
    <MultiRangeSlider
      {...args}
      color="red"
      rangeValues={{ min: amountFrom, max: amountTo }}
      onChangeFrom={setAmountFrom}
      onChangeTo={setAmountTo}
    />
  );
};

export const Default = Template.bind({});

Default.args = {};
