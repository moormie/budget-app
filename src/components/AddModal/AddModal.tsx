import { FC, useState } from "react";
import StyledModal from ".";
import { Button } from "../Button/Button";
import { InputField } from "../InputField/InputField";
import { ModalBackground } from "../ModalBackground";
import { HexColorPicker } from "react-colorful";

interface Props {
  visible?: boolean;
  onClose: () => void;
  onSubmit: (name: string, primary: string) => void;
  errorMessage?: string;
}

export const AddModal: FC<Props> = ({
  visible,
  onClose,
  onSubmit,
  errorMessage,
}) => {
  const [category, setCategory] = useState("");
  const [color, setColor] = useState("#aabbcc");

  return (
    <ModalBackground visible={visible}>
      <StyledModal.Modal visible={visible}>
        <h3>Add new category</h3>
        <StyledModal.InputContainer>
          <InputField
            placeholder="Category Name"
            value={category}
            setValue={setCategory}
          />
        </StyledModal.InputContainer>
        <StyledModal.ErrorText>{errorMessage}</StyledModal.ErrorText>
        <p>Pick a color</p>

        <div>
          <HexColorPicker
            color={color}
            onChange={setColor}
            style={{ minWidth: 280 }}
          />
        </div>
        <StyledModal.ButtonContainer>
          <Button label="Cancel" onClick={onClose} />
          <Button
            label="Save"
            onClick={() => onSubmit(category, color)}
            variant="success"
            disabled={!category}
          />
        </StyledModal.ButtonContainer>
      </StyledModal.Modal>
    </ModalBackground>
  );
};
