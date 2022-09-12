import styled from "styled-components";

interface IconButtonProps {
  size: "small" | "medium" | "large";
}

export const StyledIconButton = styled.button<IconButtonProps>`
  width: ${(props) =>
    props.size === "small" ? "20px" : props.size === "large" ? "50px" : "34px"};
  height: ${(props) =>
    props.size === "small" ? "20px" : props.size === "large" ? "50px" : "34px"};
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
