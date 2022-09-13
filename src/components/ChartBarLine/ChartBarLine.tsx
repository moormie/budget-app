import { FC } from "react";
import styled from "styled-components";

const lightGray = "#f2f2f2";
const gray = "#e0e0e0";

const Container = styled.div`
  width: 10px;
  height: 100%;
  background-color: ${lightGray};
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: end;
  padding: 1px;
`;
const Line = styled.div<{ height: number }>`
  height: ${(props) => props.height}%;
  width: 100%;
  background-color: ${gray};
  border-radius: 6px;
`;

interface ChartBarLine {
  height: number;
}

export const ChartBarLine: FC<ChartBarLine> = ({ height }) => {
  return (
    <Container>
      <Line height={height} />
    </Container>
  );
};
