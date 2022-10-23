import { FC } from "react";
import StyledModal from ".";
import { Button } from "../Button/Button";

interface Props {
  message: string;
  note?: string;
  visible?: boolean;
  onClose: () => void;
  onSubmit: () => void;
}

export const Alert: FC<Props> = ({
  message,
  note,
  visible,
  onClose,
  onSubmit,
}) => {
  return (
    <StyledModal.Container visible={visible}>
      <StyledModal.Modal visible={visible}>
        <h2>Are you sure?</h2>
        <span>{message}</span>
        <p>{note}</p>
        <StyledModal.ButtonContainer>
          <Button label="Cancel" onClick={onClose} />
          <Button label="Delete" onClick={onSubmit} variant="error" />
        </StyledModal.ButtonContainer>
      </StyledModal.Modal>
    </StyledModal.Container>
  );
};
