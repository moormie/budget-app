import { GET_CATEGORY } from "./../endpoints";
import { Category } from "../../types/Category";

export async function fetchCategoryData() {
  const response: Category[] = await fetch(GET_CATEGORY).then((data) =>
    data.json()
  );

  return response;
}
