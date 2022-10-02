import { FC, useRef, useState } from "react";
import StyledSelect from ".";
import { CaretDown, CaretUp } from "../../assets";
import useOnClickOutside from "../../useOnClickOutside";
import { InputField } from "../InputField/InputField";
import { MenuList } from "../MenuList/MenuList";
import { Delayed } from "../Delayed";

interface Props {
  value: string;
  setValue: (value: string) => void;
  options: string[];
  placeholder?: string;
}

export const Select: FC<Props> = ({
  value,
  setValue,
  options,
  placeholder,
}) => {
  const [open, setOpen] = useState(false);

  const onSelect = (item: string) => {
    setValue(item);
    setOpen(false);
  };
  const ref = useRef(null);
  useOnClickOutside(ref, () => setOpen(false));

  return (
    <StyledSelect.Container>
      <InputField
        ref={ref}
        disabled
        value={value}
        endAdornment={open ? <CaretUp /> : <CaretDown />}
        placeholder={placeholder}
        onClick={() => setOpen(!open)}
      />
      <Delayed open={open}>
        <MenuList values={options} onSelect={onSelect} selectedItem={value} />
      </Delayed>
    </StyledSelect.Container>
  );
};
