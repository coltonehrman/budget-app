import { formatISO } from "date-fns";
import { loader } from "../common/loader";

export type DailySpending = Record<
  string,
  {
    spending: number[];
    dailyBudget?: number;
  }
>;

export const dailySpendingLoader = {
  ...loader<DailySpending>("daily-spending"),
};

export const spendMoneyForTheDay =
  (amountSpent: number, dailyBudget: number, day?: Date) =>
  (prevDailySpending: DailySpending | undefined) => {
    let modifiedDailySpending = { ...(prevDailySpending ?? {}) };
    const dateString = formatISO(day ?? new Date(), { representation: "date" });

    if (modifiedDailySpending[dateString] == null) {
      modifiedDailySpending[dateString] = {
        spending: [],
      };
    }

    modifiedDailySpending[dateString].spending.push(amountSpent);
    modifiedDailySpending[dateString].dailyBudget = dailyBudget;
    dailySpendingLoader.save(modifiedDailySpending);
    return modifiedDailySpending;
  };
