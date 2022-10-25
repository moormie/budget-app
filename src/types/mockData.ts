import moment from "moment";
import { Category } from "./Category";
import { Expenses } from "./Expenses";
import { Income } from "./Income";

export const expensesMockData: Expenses[] = [
  {
    id: "001",
    category: Category.FOOD,
    amount: 110,
    date: moment("2022-09-01"),
    note: "Some note...",
  },
  {
    id: "002",
    category: Category.CAR,
    amount: 60,
    date: moment("2022-09-03"),
    note: "Some note...",
  },
  {
    id: "003",
    category: Category.MEDICAL,
    amount: 120,
    date: moment("2022-09-10"),
    note: "Some note...",
  },
  {
    id: "004",
    category: Category.FOOD,
    amount: 90,
    date: moment("2022-09-14"),
    note: "Some note...",
  },
  {
    id: "005",
    category: Category.TRAVEL,
    amount: 80,
    date: moment("2022-09-15"),
    note: "Some note...",
  },
  {
    id: "006",
    category: Category.HOME,
    amount: 500,
    date: moment("2022-09-18"),
    note: "Some note...",
  },
  {
    id: "007",
    category: Category.TRAVEL,
    amount: 62,
    date: moment("2022-09-19"),
  },
  {
    id: "008",
    category: Category.ENTERTAINMENT,
    amount: 45,
    date: moment("2022-09-20"),
  },
  {
    id: "009",
    category: Category.PERSONAL,
    amount: 160,
    date: moment("2022-09-20"),
  },
  {
    id: "010",
    category: Category.FOOD,
    amount: 110,
    date: moment("2022-10-01"),
    note: "Some note...",
  },
  {
    id: "012",
    category: Category.CAR,
    amount: 60,
    date: moment("2022-10-03"),
    note: "Some note...",
  },
  {
    id: "013",
    category: Category.MEDICAL,
    amount: 120,
    date: moment("2022-10-10"),
    note: "Some note...",
  },
  {
    id: "014",
    category: Category.FOOD,
    amount: 90,
    date: moment("2022-10-13"),
    note: "Some note...",
  },
  {
    id: "015",
    category: Category.TRAVEL,
    amount: 80,
    date: moment("2022-10-11"),
    note: "Some note...",
  },
  {
    id: "016",
    category: Category.HOME,
    amount: 500,
    date: moment("2022-08-18"),
    note: "Some note...",
  },
  {
    id: "017",
    category: Category.TRAVEL,
    amount: 62,
    date: moment("2022-08-19"),
  },
  {
    id: "018",
    category: Category.ENTERTAINMENT,
    amount: 45,
    date: moment("2022-09-20"),
  },
  {
    id: "019",
    category: Category.PERSONAL,
    amount: 160,
    date: moment("2022-08-20"),
  },
  {
    id: "020",
    category: Category.HOME,
    amount: 500,
    date: moment("2022-10-18"),
    note: "Some note...",
  },
  {
    id: "021",
    category: Category.TRAVEL,
    amount: 62,
    date: moment("2022-10-19"),
  },
  {
    id: "022",
    category: Category.ENTERTAINMENT,
    amount: 45,
    date: moment("2022-10-20"),
  },
  {
    id: "023",
    category: Category.PERSONAL,
    amount: 160,
    date: moment("2022-10-20"),
  },
  {
    id: "024",
    category: Category.MEDICAL,
    amount: 120,
    date: moment("2022-10-22"),
    note: "Some note...",
  },
];

export const incomesMockData: Income[] = [
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
