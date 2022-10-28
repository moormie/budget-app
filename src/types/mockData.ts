import moment from "moment";
import { Category } from "./Category";
import { Expenses } from "./Expenses";
import { Income } from "./Income";
import { myTheme } from "../theme";

const { green, grape, yellow, yellowGreen, red, brown, orange, dark } =
  myTheme.colors;

export const mockCategoryData: Category[] = [
  {
    name: "Food",
    color: { primary: green, secondary: dark.green },
  },
  {
    name: "Car",
    color: { primary: grape, secondary: dark.grape },
  },
  {
    name: "Home",
    color: { primary: brown, secondary: dark.brown },
  },
  {
    name: "Entertainment",
    color: { primary: yellowGreen, secondary: dark.yellowGreen },
  },
  {
    name: "Medical",
    color: { primary: red, secondary: dark.red },
  },
  {
    name: "Personal",
    color: { primary: yellow, secondary: dark.yellow },
  },
  {
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
];

export const mockIncomesData: Income[] = [
  {
    id: "001",
    name: "Salary",
    amount: 3000,
    date: "01/09/2022",
  },
  {
    id: "002",
    name: "Gift",
    amount: 250,
    date: "20/09/2022",
    note: "Some note...",
  },
  {
    id: "003",
    name: "Salary",
    amount: 3000,
    date: "01/10/2022",
  },
];
