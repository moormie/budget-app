import styled from "styled-components";

export const StyledIconButton = styled.button`
  width: 34px;
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background-color: #e0e0e0;
  &:hover {
    filter: brightness(0.85);
  }
`;