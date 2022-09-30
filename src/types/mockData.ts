import { Category } from "./Category";
import { Expenses } from "./Expenses";
import { Income } from "./Income";

export const expensesMockData: Expenses[] = [
  {
    id: "001",
    category: Category.FOOD,
    amount: 110,
    date: "01-09-2022",
    note: "Some note...",
  },
  {
    id: "002",
    category: Category.CAR,
    amount: 60,
    date: "03-09-2022",
    note: "Some note...",
  },
  {
    id: "003",
    category: Category.MEDICAL,
    amount: 120,
    date: "10-09-2022",
    note: "Some note...",
  },
  {
    id: "004",
    category: Category.FOOD,
    amount: 90,
    date: "14-09-2022",
    note: "Some note...",
  },
  {
    id: "005",
    category: Category.TRAVEL,
    amount: 80,
    date: "19-09-2022",
    note: "Some note...",
  },
  {
    id: "006",
    category: Category.HOME,
    amount: 500,
    date: "19-09-2022",
    note: "Some note...",
  },
  {
    id: "007",
    category: Category.TRAVEL,
    amount: 62,
    date: "20-09-2022",
  },
  {
    id: "008",
    category: Category.ENTERTAINMENT,
    amount: 45,
    date: "20-09-2022",
  },
  {
    id: "009",
    category: Category.PERSONAL,
    amount: 160,
    date: "20-09-2022",
  },
];

export const incomesMockData: Income[] = [
  {
    id: "001",
    name: "Salary",
    amount: 3000,
    date: "01-09-2022",
  },
  {
    id: "002",
    name: "Gift",
    amount: 250,
    date: "20-09-2022",
    note: "Some note...",
  },
];
