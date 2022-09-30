import { FC, useRef, useState } from "react";
import StyledSelect from ".";
import { CaretDown, CaretUp } from "../../assets";
import useOnClickOutside from "../../useOnClickOutside";
import { IconButton } from "../IconButton/IconButton";
import { InputField } from "../InputField/InputField";
import { MenuList } from "../MenuList/MenuList";

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
      <div onClick={() => setOpen(!open)}>
        <InputField
          ref={ref}
          disabled
          value={value}
          endAdornment={
            <IconButton onClick={() => {}}>
              {open ? <CaretUp /> : <CaretDown />}
            </IconButton>
          }
          placeholder={placeholder}
        />
      </div>
      <MenuList
        open={open}
        values={options}
        onSelect={onSelect}
        selectedItem={value}
      />
    </StyledSelect.Container>
  );
};
