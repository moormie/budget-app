import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "../Button/Button";
import { Alert } from "./Alert";
import { useArgs } from "@storybook/client-api";

export default {
  title: "Components/Alert",
  component: Alert,
  args: {
    visible: false,
  },
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = ({ ...args }) => {
  const [{ visible }, updateArgs] = useArgs();

  const handleClose = () => updateArgs({ visible: visible });

  return (
    <>
      <div style={{ margin: 32 }}>
        <Button
          onClick={() => updateArgs({ visible: !visible })}
          label="OPEN"
        ></Button>
      </div>
      <Alert {...args} />
    </>
  );
};

export const Default = Template.bind({});
