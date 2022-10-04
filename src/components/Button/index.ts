import styled from "styled-components";

const Label = styled.p`
  text-transform: uppercase;
  font-weight: 500;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.dark.green};
  color: ${(props) => props.theme.colors.yellowGreen};
  border-radius: ${(props) => props.theme.borderRadius};
  width: 100%;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.colors.lightGray};
  }
`;

const StyledButton = {
  Label,
  Button,
};

export default StyledButton;
