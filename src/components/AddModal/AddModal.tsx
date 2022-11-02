import { FC, useState } from "react";
import StyledModal from ".";
import { Button } from "../Button/Button";
import { InputField } from "../InputField/InputField";
import { ModalBackground } from "../ModalBackground";
import { HexColorPicker } from "react-colorful";

interface Props {
  visible?: boolean;
  onClose: () => void;
  onSubmit: (name: string, primary: string, secondary?: string) => void;
  errorMessage?: string;
}

export const AddModal: FC<Props> = ({
  visible,
  onClose,
  onSubmit,
  errorMessage,
}) => {
  const [category, setCategory] = useState("");
  const [colorPrimary, setColorPrimary] = useState("#aabbcc");
  const [colorSecondary, setColorSecondary] = useState("#aabbcc");

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
        <StyledModal.ColorPicker>
          <div>
            <HexColorPicker
              color={colorPrimary}
              onChange={setColorPrimary}
              style={{ maxWidth: 160 }}
            />
          </div>
          <div>
            <HexColorPicker
              color={colorSecondary}
              onChange={setColorSecondary}
              style={{ maxWidth: 160 }}
            />
          </div>
        </StyledModal.ColorPicker>
        <StyledModal.ButtonContainer>
          <Button label="Cancel" onClick={onClose} />
          <Button
            label="Save"
            onClick={() => onSubmit(category, colorPrimary, colorSecondary)}
            variant="success"
            disabled={!category}
          />
        </StyledModal.ButtonContainer>
      </StyledModal.Modal>
    </ModalBackground>
  );
};
