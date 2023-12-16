import { type Budget } from "../budget";

export const convertToDaily = (item: Budget): number => {
  switch (item.occurence) {
    case "daily":
      return Number(item.amount);
    case "bi-weekly":
      return Number((item.amount * 26) / 365);
    case "weekly":
      return Number((item.amount * 52) / 365);
    case "monthly":
      return Number((item.amount * 12) / 365);
    case "yearly":
      return Number(item.amount / 365);
    default:
      return 0;
  }
};

export const convertToWeekly = (item: Budget): number => {
  switch (item.occurence) {
    case "weekly":
      return Number(item.amount);
    case "bi-weekly":
      return Number((item.amount * 26) / 52);
    case "daily":
      return Number((item.amount * 52) / 52);
    case "monthly":
      return Number((item.amount * 12) / 52);
    case "yearly":
      return Number(item.amount / 52);
    default:
      return 0;
  }
};

export const convertToMonthly = (item: Budget): number => {
  switch (item.occurence) {
    case "monthly":
      return Number(item.amount);
    case "bi-weekly":
      return Number((item.amount * 26) / 12);
    case "daily":
      return Number((item.amount * 365) / 12);
    case "weekly":
      return Number((item.amount * 52) / 12);
    case "yearly":
      return Number(item.amount / 12);
    default:
      return 0;
  }
};

export const convertToYearly = (item: Budget): number => {
  switch (item.occurence) {
    case "yearly":
      return Number(item.amount);
    case "bi-weekly":
      return Number(item.amount * 26);
    case "daily":
      return Number(item.amount * 365);
    case "weekly":
      return Number(item.amount * 52);
    case "monthly":
      return Number(item.amount * 12);
    default:
      return 0;
  }
};

export const typeConverter = (
  items: Budget[],
  type: Budget["type"],
  converter: (item: Budget) => number,
): string =>
  items
    .filter((i) => i.type === type)
    .reduce((sum, i) => sum + converter(i), 0)
    .toFixed(2);
