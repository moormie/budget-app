import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "../Button/Button";
import { AddModal } from "./AddModal";
import { useArgs } from "@storybook/client-api";
import { Delayed } from "../Delayed/Delayed";

export default {
  title: "Components/AddModal",
  component: AddModal,
  args: {
    visible: false,
  },
} as ComponentMeta<typeof AddModal>;

const Template: ComponentStory<typeof AddModal> = ({ ...args }) => {
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
        <AddModal
          {...args}
          visible={visible}
          onClose={() => updateArgs({ visible: !visible })}
        />
      </Delayed>
    </>
  );
};

export const Default = Template.bind({});
