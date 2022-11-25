import { Income } from "./../../types/Income";
import { mockIncomesData } from "../../types/mockData";

interface Data {
  data: Income[];
}

export function fetchIncomesData() {
  return new Promise<Data>((resolve) =>
    setTimeout(() => resolve({ data: mockIncomesData }), 500)
  );
}
