import { FC } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 10px;
  height: 100%;
  background-color: ${props => props.theme.colors.lightGray};
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: end;
  padding: 1px;
`;
const Line = styled.div<{ height: number }>`
  height: ${(props) => props.height}%;
  width: 100%;
  background-color: ${props => props.theme.colors.gray};
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
