import { FC } from "react";
import styled from "styled-components";

interface Props {
  size?: number;
  colorPrimary?: string;
  colorSecondary?: string;
  children?: JSX.Element;
}

const Container = styled.div<Props>`
  background: linear-gradient(
    ${(props) => props.colorPrimary ?? props.theme.colors.gray},
    ${(props) => props.colorSecondary ?? props.theme.colors.gray}
  );
  width: ${(props) => props?.size ?? 50}px;
  height: ${(props) => props?.size ?? 50}px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ColoredIcon: FC<Props> = ({
  size,
  colorPrimary,
  colorSecondary,
  children,
}) => {
  return (
    <Container
      size={size}
      colorPrimary={colorPrimary}
      colorSecondary={colorSecondary}
    >
      {children}
    </Container>
  );
};
