import { Moment } from "moment";
import { Category } from "./Category";

export interface ExpensesPercentage {
  category: Category;
  percentage: number;
}
export interface ExpensesCategory {
  category: Category;
  amount: number;
}
export interface Expenses {
  id?: string;
  note?: string;
  date: Moment;
  category: string;
  amount: number;
}
