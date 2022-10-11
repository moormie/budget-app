import { Category } from "../../types/Category";
import getColorOfCategory from "../getColorOfCategory";
import { myTheme } from "../../theme";

const { green, grape, yellow, yellowGreen, red, brown, orange, dark } =
  myTheme.colors;

describe("category color", () => {
  it("gets color of the category", () => {
    expect(getColorOfCategory(Category.FOOD)).toStrictEqual({
      primary: green,
      secondary: dark.green,
    });
    expect(getColorOfCategory(Category.CAR)).toStrictEqual({
      primary: grape,
      secondary: dark.grape,
    });
    expect(getColorOfCategory(Category.HOME)).toStrictEqual({
      primary: brown,
      secondary: dark.brown,
    });
    expect(getColorOfCategory(Category.ENTERTAINMENT)).toStrictEqual({
      primary: yellowGreen,
      secondary: dark.yellowGreen,
    });
    expect(getColorOfCategory(Category.MEDICAL)).toStrictEqual({
      primary: red,
      secondary: dark.red,
    });
    expect(getColorOfCategory(Category.PERSONAL)).toStrictEqual({
      primary: yellow,
      secondary: dark.yellow,
    });
    expect(getColorOfCategory(Category.TRAVEL)).toStrictEqual({
      primary: orange,
      secondary: dark.orange,
    });
  });
  it("gets categories and percentage", () => {});
});
