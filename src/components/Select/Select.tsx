import { FC, useState } from "react";
import StyledSelect from ".";
import { CaretDown, CaretUp } from "../../assets";
import { IconButton } from "../IconButton/IconButton";
import { InputField } from "../InputField/InputField";
import { MenuList } from "../MenuList/MenuList";

interface Props {}

export const Select: FC = () => {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string>("");

  const onSelect = (item: string) => {
    setSelectedItem(item);
    setOpen(false);
  };

  return (
    <StyledSelect.Container onClick={() => setOpen(!open)}>
      <InputField
        disabled
        value={selectedItem}
        endAdornment={
          <IconButton onClick={() => {}}>
            {open ? <CaretUp /> : <CaretDown />}
          </IconButton>
        }
      />
      <StyledSelect.SelectContainer>
        <MenuList
          open={open}
          values={["Test 1", "Test 2", "Test 3"]}
          onSelect={onSelect}
          selectedItem={selectedItem}
        />
      </StyledSelect.SelectContainer>
    </StyledSelect.Container>
  );
};
