import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.colors.gray};
  border-radius: 8px;
  width: 100%;
`;

const InputField = styled.input`
  border: none;
  border-radius: 8px;
  background-color: ${props => props.theme.colors.gray};
  outline: 2px solid ${props => props.theme.colors.gray};
  &:hover {
    background-color: ${props => props.theme.colors.lightGray};
  }
  &:focus-visible {
    background-color: ${props => props.theme.colors.lightGray};
  }
  &::-webkit-calendar-picker-indicator {
    display: none;
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  padding: 8px;
  width: 100%;
`;

const EndAdornment = styled.div`
  position: absolute;
  width: 31px;
  height: 31px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledInputField = {
  Container,
  InputField,
  EndAdornment,
};

export default StyledInputField;
