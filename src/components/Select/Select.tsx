import { FC, useState } from "react";
import StyledSelect from ".";
import { CaretDown, CaretUp } from "../../assets";
import { IconButton } from "../IconButton/IconButton";
import { InputField } from "../InputField/InputField";
import { MenuList } from "../MenuList/MenuList";

interface Props {
  value: string;
  setValue: (value: string) => void;
  options: string[];
}

export const Select: FC<Props> = ({ value, setValue, options }) => {
  const [open, setOpen] = useState(false);

  const onSelect = (item: string) => {
    setValue(item);
    setOpen(false);
  };

  return (
    <StyledSelect.Container onClick={() => setOpen(!open)}>
      <InputField
        disabled
        value={value}
        endAdornment={
          <IconButton onClick={() => {}}>
            {open ? <CaretUp /> : <CaretDown />}
          </IconButton>
        }
      />
      <StyledSelect.SelectContainer>
        <MenuList
          open={open}
          values={options}
          onSelect={onSelect}
          selectedItem={value}
        />
      </StyledSelect.SelectContainer>
    </StyledSelect.Container>
  );
};
