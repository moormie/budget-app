import styled from "styled-components";

const Label = styled.p`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 14px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: ${(props) => props.theme.colors.dark.green};
  color: ${(props) => props.theme.colors.yellowGreen};
  border-radius: ${(props) => props.theme.borderRadius};
  width: 100%;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.colors.green};
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
