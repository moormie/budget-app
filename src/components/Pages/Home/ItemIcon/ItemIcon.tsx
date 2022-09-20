import { FC } from "react";
import { Category } from "../../../../types/Category";
import { myTheme } from "../../../../theme";
import {
  Car,
  Shopping,
  Home,
  Add,
  Entertainment,
  Health,
  Person,
  Plane,
} from "../../../../assets";
import { ColoredIcon } from "../../../ColoredIcon/ColoredIcon";

interface Props {
  category: Category;
}
export const ItemIcon: FC<Props> = ({ category }) => {
  const { gray, green, grape, yellow, yellowGreen, red, brown, orange, dark } =
    myTheme.colors;
  switch (category) {
    case "Food":
      return (
        <ColoredIcon colorPrimary={green} colorSecondary={dark.green}>
          <Shopping color={gray} />
        </ColoredIcon>
      );
    case "Car":
      return (
        <ColoredIcon colorPrimary={grape} colorSecondary={dark.grape}>
          <Car color={gray} />
        </ColoredIcon>
      );
    case "Home":
      return (
        <ColoredIcon colorPrimary={brown} colorSecondary={dark.brown}>
          <Home color={gray} />
        </ColoredIcon>
      );
    case "Entertainment":
      return (
        <ColoredIcon
          colorPrimary={yellowGreen}
          colorSecondary={dark.yellowGreen}
        >
          <Entertainment color={gray} />
        </ColoredIcon>
      );
    case "Medical":
      return (
        <ColoredIcon colorPrimary={red} colorSecondary={dark.red}>
          <Health color={gray} />
        </ColoredIcon>
      );
    case "Personal":
      return (
        <ColoredIcon colorPrimary={yellow} colorSecondary={dark.yellow}>
          <Person color={gray} />
        </ColoredIcon>
      );
    case "Travel":
      return (
        <ColoredIcon colorPrimary={orange} colorSecondary={dark.orange}>
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
