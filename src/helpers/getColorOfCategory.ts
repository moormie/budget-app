import { myTheme } from "../theme";
import { Category } from "../types/Category";

interface Color {
  primary: string;
  secondary?: string;
}

const getColorOfCategory = (category: Category): Color => {
  const { gray, green, grape, yellow, yellowGreen, red, brown, orange, dark } =
    myTheme.colors;
  switch (category) {
    case Category.FOOD:
      return { primary: green, secondary: dark.green };
    case Category.CAR:
      return { primary: grape, secondary: dark.grape };
    case Category.HOME:
      return { primary: brown, secondary: dark.brown };
    case Category.ENTERTAINMENT:
      return { primary: yellowGreen, secondary: dark.yellowGreen };
    case Category.MEDICAL:
      return { primary: red, secondary: dark.red };
    case Category.PERSONAL:
      return { primary: yellow, secondary: dark.yellow };
    case Category.TRAVEL:
      return { primary: orange, secondary: dark.orange };
    default:
      return { primary: gray };
  }
};

export default getColorOfCategory;
