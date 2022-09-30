import { Expenses } from "./Expenses";
import { Income } from "./Income";

export const expensesMockData: Expenses[] = [
  {
    id: "001",
    category: "Food",
    amount: 110,
    date: "01-09-2022",
    note: "Some note...",
  },
  {
    id: "002",
    category: "Car",
    amount: 60,
    date: "03-09-2022",
    note: "Some note...",
  },
  {
    id: "003",
    category: "Medical",
    amount: 120,
    date: "10-09-2022",
    note: "Some note...",
  },
  {
    id: "004",
    category: "Food",
    amount: 90,
    date: "14-09-2022",
    note: "Some note...",
  },
  {
    id: "005",
    category: "Travel",
    amount: 80,
    date: "19-09-2022",
    note: "Some note...",
  },
  {
    id: "006",
    category: "Home",
    amount: 500,
    date: "19-09-2022",
    note: "Some note...",
  },
  {
    id: "007",
    category: "Travel",
    amount: 62,
    date: "20-09-2022",
  },
  {
    id: "008",
    category: "Entertainment",
    amount: 45,
    date: "20-09-2022",
  },
  {
    id: "009",
    category: "Personal",
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
