import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "../Button/Button";
import { Alert } from "./Alert";
import { useArgs } from "@storybook/client-api";
import { Delayed } from "../Delayed/Delayed";

export default {
  title: "Components/Alert",
  component: Alert,
  args: {
    visible: false,
  },
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = ({ ...args }) => {
  const [{ visible }, updateArgs] = useArgs();

  return (
    <>
      <div style={{ margin: 32 }}>
        <Button
          onClick={() => updateArgs({ visible: !visible })}
          label="OPEN"
        ></Button>
      </div>
      <Delayed visible={visible}>
        <Alert {...args} onClose={() => updateArgs({ visible: !visible })} />
      </Delayed>
    </>
  );
};

export const Default = Template.bind({});
