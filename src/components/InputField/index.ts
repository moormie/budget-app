import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 12px;
  margin: 4px;
  box-sizing: border-box;
`;

const InputField = styled.input`
  font-family: inherit;
  font-size: 16px;
  border: none;
  border-radius: 12px;
  background-color: white;
  outline: none;
  &:focus-visible {
    background-color: white;
  }
  &::-webkit-calendar-picker-indicator {
    display: none;
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &:disabled {
    color: black;
  }
  padding: 18px;
  width: 100%;
`;

const EndAdornment = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
`;

const StyledInputField = {
  Container,
  InputField,
  EndAdornment,
};

export default StyledInputField;
