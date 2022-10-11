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
import getColorOfCategory from "../../helpers/getColorOfCategory";

interface Props {
  category: Category;
}
export const ItemIcon: FC<Props> = ({ category }) => {
  const { gray } = myTheme.colors;
  const { primary, secondary } = getColorOfCategory(category);
  switch (category) {
    case Category.FOOD:
      return (
        <ColoredIcon colorPrimary={primary} colorSecondary={secondary}>
          <Shopping color={gray} />
        </ColoredIcon>
      );
    case Category.CAR:
      return (
        <ColoredIcon colorPrimary={primary} colorSecondary={secondary}>
          <Car color={gray} />
        </ColoredIcon>
      );
    case Category.HOME:
      return (
        <ColoredIcon colorPrimary={primary} colorSecondary={secondary}>
          <Home color={gray} />
        </ColoredIcon>
      );
    case Category.ENTERTAINMENT:
      return (
        <ColoredIcon colorPrimary={primary} colorSecondary={secondary}>
          <Entertainment color={gray} />
        </ColoredIcon>
      );
    case Category.MEDICAL:
      return (
        <ColoredIcon colorPrimary={primary} colorSecondary={secondary}>
          <Health color={gray} />
        </ColoredIcon>
      );
    case Category.PERSONAL:
      return (
        <ColoredIcon colorPrimary={primary} colorSecondary={secondary}>
          <Person color={gray} />
        </ColoredIcon>
      );
    case Category.TRAVEL:
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
