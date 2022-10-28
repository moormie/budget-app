import { Moment } from "moment";

export interface ExpensesPercentage {
  category: string;
  percentage: number;
}
export interface SimpleExpenses {
  category: string;
  amount: number;
}
export interface Expenses extends SimpleExpenses {
  id?: string;
  note?: string;
  date: Moment;
}
