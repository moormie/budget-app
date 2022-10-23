import { FC } from "react";
import StyledModal from ".";
import { Close } from "../../assets";
import { Header } from "../Header/Header";
import { IconButton } from "../IconButton/IconButton";
import { ModalBackground } from "../ModalBackground";

interface Props {
  visible?: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const SlideUpModal: FC<Props> = ({ visible, onClose, children }) => {
  return (
    <ModalBackground visible={visible}>
      <StyledModal.MainContainer visible={visible}>
        <Header
          endElement={
            <IconButton onClick={onClose}>
              <Close />
            </IconButton>
          }
        />
        {children}
      </StyledModal.MainContainer>
    </ModalBackground>
  );
};
