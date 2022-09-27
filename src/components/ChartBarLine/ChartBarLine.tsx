import { FC } from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  width: 10px;
  height: 100%;
  background-color: ${(props) => props.theme.colors.lightGray};
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: end;
  padding: 1px;
`;

const grow = (height: number) => keyframes`
  0% {
    height: 0%;
  }
  100% {
    height: ${height}%;
  }
`;

const Line = styled.div<{ height: number; color?: string }>`
  height: ${(props) => props.height}%;
  width: 100%;
  background-color: ${(props) => props?.color ?? props.theme.colors.gray};
  border-radius: 6px;
  animation: ${(props) => grow(props.height)} 1s ease-out;
`;

interface ChartBarLine {
  height: number;
  color?: string;
}

export const ChartBarLine: FC<ChartBarLine> = ({ height, color }) => {
  return (
    <Container>
      <Line height={height} color={color} />
    </Container>
  );
};
