import styled from "styled-components";

const lightGray = "#f2f2f2";
const gray = "#e0e0e0";

const Label = styled.p`
  text-transform: uppercase;
  font-weight: 500;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${gray};
  border-radius: 8px;
  width: 100%;
  cursor: pointer;
  &:hover {
    background-color: ${lightGray};
  }
`;

const StyledButton = {
  Label,
  Button,
};

export default StyledButton;
