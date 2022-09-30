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
import getColorOfcategory from "../../helpers/getColorOfCategory";

interface Props {
  category: Category;
}
export const ItemIcon: FC<Props> = ({ category }) => {
  const { gray } = myTheme.colors;
  const { primary, secondary } = getColorOfcategory(category);
  switch (category) {
    case "Food":
      return (
        <ColoredIcon colorPrimary={primary} colorSecondary={secondary}>
          <Shopping color={gray} />
        </ColoredIcon>
      );
    case "Car":
      return (
        <ColoredIcon colorPrimary={primary} colorSecondary={secondary}>
          <Car color={gray} />
        </ColoredIcon>
      );
    case "Home":
      return (
        <ColoredIcon colorPrimary={primary} colorSecondary={secondary}>
          <Home color={gray} />
        </ColoredIcon>
      );
    case "Entertainment":
      return (
        <ColoredIcon colorPrimary={primary} colorSecondary={secondary}>
          <Entertainment color={gray} />
        </ColoredIcon>
      );
    case "Medical":
      return (
        <ColoredIcon colorPrimary={primary} colorSecondary={secondary}>
          <Health color={gray} />
        </ColoredIcon>
      );
    case "Personal":
      return (
        <ColoredIcon colorPrimary={primary} colorSecondary={secondary}>
          <Person color={gray} />
        </ColoredIcon>
      );
    case "Travel":
      return (
        <ColoredIcon colorPrimary={primary} colorSecondary={secondary}>
          <Plane color={gray} />
        </ColoredIcon>
      );
    default:
      return (
        <ColoredIcon>
          <Add color={gray} />
        </ColoredIcon>
      );
  }
};
