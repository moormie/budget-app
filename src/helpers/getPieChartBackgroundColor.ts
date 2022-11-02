import { ExpensesPercentage } from "../types/Expenses";

export interface PieChartColors {
  color: string;
  start: string;
  end: string;
}

/*  format should be fit to conic-gradient
    #B2BC76 0% 5.00%,
    #665075 5.00% 10.00%,
    #C75554 10.00% 20.00%,
    #D9B35B 20.00% 25.00%,
    #DF810B 25.00% 50.00%,
    #778C62 50.00% 75.00%,
    #71533d 75.00%
*/
export const getPieChartBackgroundColor = (dataList: ExpensesPercentage[]) => {
  return dataList.map((data, index) => {
    const category = data.category;
    const primary = category?.color.primary;

    const start =
      index === 0
        ? 0
        : dataList
            .slice(0, index)
            .map((e) => e.percentage)
            .reduce((a, b) => a + b, 0);
    const end = start + data.percentage;
    return {
      color: primary,
      start: `${start.toFixed(2)}%`,
      end: `${end.toFixed(2)}%`,
    } as PieChartColors;
  });
};
