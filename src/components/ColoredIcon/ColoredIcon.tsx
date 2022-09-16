import { FC } from "react";
import styled from "styled-components";

interface Props {
  size?: number;
  color?: string;
  children?: JSX.Element;
}

const Container = styled.div<Props>`
  background-color: ${(props) => props?.color ?? props.theme.colors.gray};
  width: ${(props) => props?.size ?? 50}px;
  height: ${(props) => props?.size ?? 50}px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ColoredIcon: FC<Props> = ({ size, color, children }) => {
  return (
    <Container size={size} color={color}>
      {children}
    </Container>
  );
};
