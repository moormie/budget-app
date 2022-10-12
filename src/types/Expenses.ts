import { Moment } from "moment";
import { Category } from "./Category";

export interface ExpensesPercentage {
  category: Category;
  percentage: number;
}
export interface SimpleExpenses {
  category: Category;
  amount: number;
}
export interface Expenses extends SimpleExpenses {
  id?: string;
  note?: string;
  date: Moment;
}
