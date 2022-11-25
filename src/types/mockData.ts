import moment from "moment";
import { Category } from "./Category";
import { Expenses } from "./Expenses";
import { Income } from "./Income";
import { myTheme } from "../theme";
import { convertToExpensesWithCategory } from "../converters/convertToSimpleExpenses";
import {
  getCategoriesAmount,
  getCategoriesPercentage,
} from "../helpers/getCategoriesAmount";

const { green, grape, yellow, yellowGreen, red, brown, orange, dark } =
  myTheme.colors;

export const mockCategoryData: Category[] = [
  {
    id: "001",
    name: "Food",
    color: { primary: green, secondary: dark.green },
  },
  {
    id: "002",
    name: "Car",
    color: { primary: grape, secondary: dark.grape },
  },
  { id: "003", name: "Home", color: { primary: brown, secondary: dark.brown } },
  {
    id: "004",
    name: "Entertainment",
    color: { primary: yellowGreen, secondary: dark.yellowGreen },
  },
  { id: "005", name: "Medical", color: { primary: red, secondary: dark.red } },
  {
    id: "006",
    name: "Personal",
    color: { primary: yellow, secondary: dark.yellow },
  },
  {
    id: "007",
    name: "Travel",
    color: { primary: orange, secondary: dark.orange },
  },
];

export const mockExpensesData: Expenses[] = [
  {
    id: "001",
    category: "Food",
    amount: 110,
    date: moment("2022-09-01"),
    note: "Some note...",
  },
  {
    id: "002",
    category: "Car",
    amount: 60,
    date: moment("2022-09-03"),
    note: "Some note...",
  },
  {
    id: "003",
    category: "Medical",
    amount: 120,
    date: moment("2022-09-10"),
    note: "Some note...",
  },
  {
    id: "004",
    category: "Food",
    amount: 90,
    date: moment("2022-09-14"),
    note: "Some note...",
  },
  {
    id: "005",
    category: "Travel",
    amount: 80,
    date: moment("2022-09-15"),
    note: "Some note...",
  },
  {
    id: "006",
    category: "Home",
    amount: 500,
    date: moment("2022-09-18"),
    note: "Some note...",
  },
  {
    id: "007",
    category: "Travel",
    amount: 62,
    date: moment("2022-09-19"),
  },
  {
    id: "008",
    category: "Medical",
    amount: 45,
    date: moment("2022-09-20"),
  },
  {
    id: "009",
    category: "Personal",
    amount: 160,
    date: moment("2022-09-20"),
  },
  {
    id: "010",
    category: "Food",
    amount: 110,
    date: moment("2022-10-01"),
    note: "Some note...",
  },
  {
    id: "012",
    category: "Car",
    amount: 60,
    date: moment("2022-10-03"),
    note: "Some note...",
  },
  {
    id: "013",
    category: "Medical",
    amount: 120,
    date: moment("2022-10-10"),
    note: "Some note...",
  },
  {
    id: "014",
    category: "Food",
    amount: 90,
    date: moment("2022-10-13"),
    note: "Some note...",
  },
  {
    id: "015",
    category: "Travel",
    amount: 80,
    date: moment("2022-10-11"),
    note: "Some note...",
  },
  {
    id: "016",
    category: "Home",
    amount: 500,
    date: moment("2022-08-18"),
    note: "Some note...",
  },
  {
    id: "017",
    category: "Travel",
    amount: 62,
    date: moment("2022-08-19"),
  },
  {
    id: "018",
    category: "Entertainment",
    amount: 45,
    date: moment("2022-09-20"),
  },
  {
    id: "019",
    category: "Personal",
    amount: 160,
    date: moment("2022-08-20"),
  },
  {
    id: "020",
    category: "Home",
    amount: 500,
    date: moment("2022-10-18"),
    note: "Some note...",
  },
  {
    id: "021",
    category: "Travel",
    amount: 62,
    date: moment("2022-10-19"),
  },
  {
    id: "022",
    category: "Entertainment",
    amount: 45,
    date: moment("2022-10-20"),
  },
  {
    id: "023",
    category: "Personal",
    amount: 160,
    date: moment("2022-10-20"),
  },
  {
    id: "024",
    category: "Medical",
    amount: 120,
    date: moment("2022-10-22"),
    note: "Some note...",
  },
  {
    id: "025",
    category: "Home",
    amount: 500,
    date: moment("2022-11-01"),
    note: "Some note...",
  },
  {
    id: "026",
    category: "Travel",
    amount: 62,
    date: moment("2022-11-02"),
  },
  {
    id: "027",
    category: "Entertainment",
    amount: 45,
    date: moment("2022-11-03"),
  },
  {
    id: "028",
    category: "Personal",
    amount: 160,
    date: moment("2022-11-04"),
  },
  {
    id: "029",
    category: "Car",
    amount: 60,
    date: moment("2022-11-04"),
  },
  {
    id: "030",
    category: "Medical",
    amount: 20,
    date: moment("2022-11-07"),
    note: "Some note...",
  },
  {
    id: "031",
    category: "Food",
    amount: 20,
    date: moment("2022-11-03"),
    note: "Some note...",
  },
  {
    id: "032",
    category: "Food",
    amount: 20,
    date: moment("2022-11-07"),
    note: "Some note...",
  },
];

export const mockExpensesWithCategory = convertToExpensesWithCategory(
  mockExpensesData,
  mockCategoryData
);

export const mockExpensesPercentageByCategory = getCategoriesPercentage(
  mockExpensesWithCategory
);

export const mockExpensesAmountByCategory = getCategoriesAmount(
  mockExpensesWithCategory
);

export const mockIncomesData: Income[] = [
  {
    id: "001",
    name: "Salary",
    amount: 3000,
    date: moment("2022-09-10"),
  },
  {
    id: "002",
    name: "Gift",
    amount: 250,
    date: moment("2022-09-20"),
    note: "Some note...",
  },
  {
    id: "003",
    name: "Salary",
    amount: 3000,
    date: moment("2022-10-10"),
  },
  {
    id: "003",
    name: "Salary",
    amount: 3000,
    date: moment("2022-11-10"),
  },
];
