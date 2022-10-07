import styled from "styled-components";

const Label = styled.p`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 14px;
`;

const Button = styled.button<{ variant?: "success" | "error" }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  max-height: 50px;
  background-color: ${(props) =>
    props.variant === "success"
      ? props.theme.colors.dark.green
      : props.variant === "error"
      ? props.theme.colors.red
      : props.theme.colors.gray};
  color: ${(props) =>
    props.variant === "success"
      ? props.theme.colors.yellowGreen
      : props.variant === "error"
      ? props.theme.colors.lightGray
      : props.theme.colors.dark.green};
  border-radius: ${(props) => props.theme.borderRadius};
  width: 100%;
  cursor: pointer;
  &:hover {
    background-color: ${(props) =>
      props.variant === "success"
        ? props.theme.colors.green
        : props.variant === "error"
        ? props.theme.colors.dark.red
        : props.theme.colors.dark.gray};
  }
  &:disabled {
    background-color: #d4d4d4;
    color: white;
  }
`;

const StyledButton = {
  Label,
  Button,
};

export default StyledButton;
