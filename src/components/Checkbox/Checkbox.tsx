import { FC } from "react";
import styled from "styled-components";

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
`;

const CheckboxInput = styled.input`
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;
  margin: 0 4px 0 0;
  font: inherit;
  color: currentColor;
  width: 1.3em;
  height: 1.3em;
  border: 2px solid ${(props) => props.theme.colors.green};
  border-radius: 0.4em;
  display: grid;
  place-content: center;
  ::before {
    content: "";
    width: 0.9em;
    height: 0.9em;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em ${(props) => props.theme.colors.green};
    border-radius: 0.3em;
  }
  :checked::before {
    transform: scale(1);
  }
`;

interface Props {
  value: string;
  setValue: (value: string) => void;
}

export const Checkbox: FC<Props> = ({ value, setValue }) => {
  return (
    <CheckboxContainer>
      <CheckboxInput
        type="checkbox"
        value={value}
        name="checkbox"
        onChange={(e) => setValue(e.target.value)}
      />
      <label>{value}</label>
    </CheckboxContainer>
  );
};
