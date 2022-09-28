import { FC } from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  border-radius: ${(props) => props.theme.borderRadius};
  box-sizing: border-box;
  width: 100%;
  background-color: white;
  box-shadow: rgba(17, 17, 17, 0.05) 0px 0px 12px;
`;

interface Props {
  children: React.ReactNode;
}

export const Container: FC<Props> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};
