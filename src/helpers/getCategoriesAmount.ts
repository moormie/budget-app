import { SimpleExpenses } from "../types/Expenses";

export const getCategoriesAmount = (dataList: SimpleExpenses[]) => {
  const categoryList: SimpleExpenses[] = [];

  dataList.forEach((data) => {
    const exist = categoryList.find((r) => r.category === data.category);
    if (exist) {
      exist.amount = exist.amount + data.amount;
    } else {
      categoryList.push({
        category: data.category,
        amount: data.amount,
      });
    }
  });
  return categoryList;
};

export const getCategoriesPercentage = (dataList: SimpleExpenses[]) => {
  const sum = dataList.map((data) => data.amount).reduce((a, b) => a + b, 0);

  const amountList = getCategoriesAmount(dataList);

  return amountList.map((data) => ({
    category: data.category,
    percentage: (data.amount / sum) * 100,
  }));
};
