import { Category } from "../../types/Category";
import { mockCategoryData } from "../../types/mockData";

interface Data {
  data: Category[];
}

export function fetchCategoryData() {
  return new Promise<Data>((resolve) =>
    setTimeout(() => resolve({ data: mockCategoryData }), 500)
  );
}
