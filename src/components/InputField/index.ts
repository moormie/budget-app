import styled from "styled-components";

const lightGray = "#f2f2f2";
const gray = "#e0e0e0";

const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: ${gray};
  border-radius: 8px;
  width: 100%;
`;

const InputField = styled.input`
  border: none;
  border-radius: 8px;
  background-color: ${gray};
  outline: 2px solid ${gray};
  &:hover {
    background-color: ${lightGray};
  }
  &:focus-visible {
    background-color: ${lightGray};
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
