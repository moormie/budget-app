import { SimpleExpenses } from "../types/Expenses";
import getColorOfcategory from "./getColorOfCategory";


const getCategoriesAmount = (dataList: SimpleExpenses[]) => {
  const categoryList: SimpleExpenses[] = [];

  dataList.forEach((data) => {
    const exist = categoryList.find((r) => r.category === data.category);
    if (exist) {
      exist.amount = exist.amount + data.amount;
    } else {
      categoryList.push(data);
    }
  });

  return [...categoryList].sort((a, b) => a.amount - b.amount);
};

/*  format should be fit to conic-gradient
    #B2BC76 0% 2.67%,
    #665075 2.67% 3.57%,
    #C75554 3.57% 7.13%,
    #D9B35B 7.13% 9.51%,
    #DF810B 9.51% 19.49%,
    #778C62 19.49% 27.93%,
    #71533d 27.93%
*/
export const getPieChartBackgroundColor = (dataList: SimpleExpenses[]) => {
  const sum = dataList.map((data) => data.amount).reduce((a, b) => a + b, 0);
  const resultList: string[] = [];

  const sortedList = getCategoriesAmount(dataList);
  sortedList.forEach((data, index) => {
    const prevPercentage =
      index === 0 ? 0 : ((sortedList[index - 1].amount / sum) * 100).toFixed(2);
    const percentage = ((data.amount / sum) * 100).toFixed(2);
    const { primary } = getColorOfcategory(data.category);
    if (index === sortedList.length - 1) {
      resultList.push(`${primary} ${prevPercentage}%`);
    } else {
      resultList.push(`${primary} ${prevPercentage}% ${percentage}%`);
    }
  });
  return resultList.join(",");
};
