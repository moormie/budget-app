import { myTheme } from "../theme";
import { Category } from "../types/Category";

interface Color {
  primary: string;
  secondary?: string;
}

const getColorOfcategory = (category: Category): Color => {
  const { gray, green, grape, yellow, yellowGreen, red, brown, orange, dark } =
    myTheme.colors;
  switch (category) {
    case Category.FOOD:
      return { primary: green, secondary: dark.green };
    case Category.CAR:
      return { primary: grape, secondary: dark.grape };
    case "Home":
      return { primary: brown, secondary: dark.brown };
    case "Entertainment":
      return { primary: yellowGreen, secondary: dark.yellowGreen };
    case "Medical":
      return { primary: red, secondary: dark.red };
    case "Personal":
      return { primary: yellow, secondary: dark.yellow };
    case "Travel":
      return { primary: orange, secondary: dark.orange };
    default:
      return { primary: gray };
  }
};

export default getColorOfcategory;
