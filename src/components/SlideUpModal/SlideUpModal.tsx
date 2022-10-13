import { FC } from "react";
import StyledModal from ".";

interface Props {
  visible?: boolean;
  children: React.ReactNode;
}

export const SlideUpModal: FC<Props> = ({ visible, children }) => {
  return (
    <StyledModal.MainContainer open={visible ?? true}>
      {children}
    </StyledModal.MainContainer>
  );
};
