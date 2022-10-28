import { FC } from "react";
import { Category } from "../../types/Category";
import { myTheme } from "../../theme";
import {
  Car,
  Shopping,
  Home,
  Add,
  Entertainment,
  Health,
  Person,
  Plane,
} from "../../assets";
import { ColoredIcon } from "../ColoredIcon/ColoredIcon";

interface Props {
  category?: Category;
}

const getIcon = (categoryName?: string) => {
  const { gray } = myTheme.colors;

  switch (categoryName) {
    case "Food":
      return <Shopping color={gray} />;
    case "Car":
      return <Car color={gray} />;
    case "Home":
      return <Home color={gray} />;
    case "Entertainment":
      return <Entertainment color={gray} />;
    case "Medical":
      return <Health color={gray} />;
    case "Personal":
      return <Person color={gray} />;
    case "Travel":
      return <Plane color={gray} />;
    default:
      return <Add color={gray} />;
  }
};
export const ItemIcon: FC<Props> = ({ category }) => {
  const { gray } = myTheme.colors.dark;

  return (
    <ColoredIcon
      colorPrimary={category?.color.primary ?? gray}
      colorSecondary={category?.color.secondary ?? gray}
    >
      {getIcon(category?.name)}
    </ColoredIcon>
  );
};
