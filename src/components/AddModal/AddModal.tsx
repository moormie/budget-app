import { FC, useState } from "react";
import StyledModal from ".";
import { Button } from "../Button/Button";
import { InputField } from "../InputField/InputField";
import { ModalBackground } from "../ModalBackground";

interface Props {
  visible?: boolean;
  onClose: () => void;
  onSubmit: () => void;
}

export const AddModal: FC<Props> = ({ visible, onClose, onSubmit }) => {
  const [category, setCategory] = useState("");
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
        <StyledModal.ButtonContainer>
          <Button label="Cancel" onClick={onClose} />
          <Button
            label="Save"
            onClick={onSubmit}
            variant="success"
            disabled={!category}
          />
        </StyledModal.ButtonContainer>
      </StyledModal.Modal>
    </ModalBackground>
  );
};
