import { Moment } from "moment";
import { Category } from "./Category";

export interface FilterValues {
  categories: Category[];
  dateFrom: Moment | null;
  dateTo: Moment | null;
  amountFrom: number;
  amountTo: number;
  note: string;
}
