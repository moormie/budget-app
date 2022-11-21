import { Moment } from "moment";

export interface Income {
  id?: string;
  name: string;
  amount: number;
  date: Moment;
  note?: string;
}
