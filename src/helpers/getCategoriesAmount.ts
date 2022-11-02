import { ExpensesCategory } from "../types/Expenses";

export const getCategoriesAmount = (dataList: ExpensesCategory[]) => {
  const categoryList: ExpensesCategory[] = [];

  dataList.forEach((data) => {
    const exist = categoryList.find(
      (r) => r.category.name === data.category.name
    );
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

export const getCategoriesPercentage = (dataList: ExpensesCategory[]) => {
  const sum = dataList.map((data) => data.amount).reduce((a, b) => a + b, 0);

  const amountList = getCategoriesAmount(dataList);

  return amountList.map((data) => ({
    category: data.category,
    percentage: (data.amount / sum) * 100,
  }));
};
