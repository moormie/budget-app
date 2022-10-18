import { FC } from "react";
import StyledModal from ".";
import { Close } from "../../assets";
import { Header } from "../Header/Header";
import { IconButton } from "../IconButton/IconButton";

interface Props {
  visible?: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const SlideUpModal: FC<Props> = ({ visible, onClose, children }) => {
  return (
    <StyledModal.MainContainer open={visible}>
      <Header
        endElement={
          <IconButton onClick={onClose}>
            <Close />
          </IconButton>
        }
      />
      {children}
    </StyledModal.MainContainer>
  );
};
