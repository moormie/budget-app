import { FC } from "react";
import StyledMenuList from ".";

interface Props {
  values: string[];
  open?: boolean;
  selectedItem?: string;
  onSelect?: (value: string) => void;
}

export const MenuList: FC<Props> = ({
  values,
  open = true,
  selectedItem,
  onSelect,
}) => {
  const onClickItem = (value: string) => {
    onSelect && onSelect(value);
  };

  return (
    <StyledMenuList.Container open={open}>
      <StyledMenuList.List>
        {values.map((value, index) => (
          <StyledMenuList.ListItem
            key={index}
            onClick={() => onClickItem(value)}
            selected={value === selectedItem}
          >
            {value}
          </StyledMenuList.ListItem>
        ))}
      </StyledMenuList.List>
    </StyledMenuList.Container>
  );
};
