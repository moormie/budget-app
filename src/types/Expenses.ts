import { Category } from "./Category";

export interface Expenses {
  id?: string;
  category: Category;
  amount: number;
  note?: string;
  date: string;
}
