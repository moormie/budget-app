import { FC } from "react";
import styled from "styled-components";

interface FlexProps {
  flexDirection?: "column" | "row";
  justify?: "end" | "center" | "start";
  align?: "end" | "center" | "start";
  [key: string]: any;
}

const Container = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection ?? "row"};
  justify-content: ${(props) => props.justify ?? "start"};
  align-items: ${(props) => props.align ?? ""};
  padding: 16px;
  border-radius: ${(props) => props.theme.borderRadius};
  box-sizing: border-box;
  width: 100%;
  background-color: white;
  box-shadow: rgba(17, 17, 17, 0.05) 0px 0px 12px;
`;

interface Props extends FlexProps {
  children: React.ReactNode;
}

export const RoundedFlexContainer: FC<Props> = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};
