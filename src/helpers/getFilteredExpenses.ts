import { Expenses } from "../types/Expenses";
import { FilterValues } from "../types/FilterValues";

export const getFilteredExpenses = (
  dataList: Expenses[],
  filterValues: FilterValues
) => {
  const { categories, dateFrom, dateTo, amountFrom, amountTo, note } =
    filterValues;

  let resultList = [...dataList];
  if (categories.length > 0) {
    resultList = resultList.filter((data) =>
      categories.map((c) => c.name).includes(data.category)
    );
  }
  if (dateFrom) {
    resultList = resultList.filter((data) => data.date.isSameOrAfter(dateFrom));
  }
  if (dateTo) {
    resultList = resultList.filter((data) => data.date.isSameOrBefore(dateTo));
  }
  if (amountFrom) {
    resultList = resultList.filter((data) => data.amount >= amountFrom);
  }
  if (amountTo) {
    resultList = resultList.filter((data) => data.amount <= amountTo);
  }
  if (note) {
    const noteValue = note.toLowerCase();
    resultList = resultList.filter((data) =>
      data.note?.toLowerCase().includes(noteValue)
    );
  }
  return resultList;
};
