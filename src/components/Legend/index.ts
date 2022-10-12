import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 33% 33% 33%;
  width: 100%;
  background-color: white;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
`;

const Marker = styled.div<{ colorPrimary: string; colorSecondary?: string }>`
  width: 13px;
  height: 13px;
  background: linear-gradient(
    ${(props) => props.colorPrimary},
    ${(props) => props.colorSecondary ?? props.colorPrimary}
  );
  border-radius: 4px;
  margin: 4px;
  margin-right: 8px;
`;

const StyledLegend = {
  Container,
  Item,
  Marker,
};

export default StyledLegend;
