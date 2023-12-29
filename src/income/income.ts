import { addMonths, addWeeks, isSameDay } from "date-fns";
import { loader } from "../common/loader";
import { type PartialBy } from "../common/types";
import { getNextId } from "../common/id";

export interface PayDay {
  date: Date;
  amount: number;
}

export interface Income {
  id: number;
  name: string;
  type: "w2" | "rental" | null;
  startPayDay: Date;
  payDayOccurance: "bi-weekly" | "monthly";
  payDays: PayDay[];
}

export type NewIncome = PartialBy<Income, "id" | "payDays">;

export const incomeLoader = { ...loader<Income>("income") };

export const addNewIncome =
  (incomeToAdd: NewIncome) => (prevIncome: Income[]) => {
    const newIncome = [
      ...prevIncome,
      {
        id: incomeToAdd.id ?? getNextId(prevIncome),
        payDays: incomeToAdd.payDays ?? [],
        ...incomeToAdd,
      },
    ];
    incomeLoader.save(newIncome);
    return newIncome;
  };

export const editIncome = (edittedIncome: Income) => (prevIncome: Income[]) => {
  const modifiedIncome = [...prevIncome];
  const edittedIncomeIndex = modifiedIncome.findIndex(
    (i) => i.id === edittedIncome.id,
  );
  modifiedIncome[edittedIncomeIndex] = edittedIncome;
  incomeLoader.save(modifiedIncome);
  return modifiedIncome;
};

export const deleteIncome =
  (itemToDelete: Income) => (prevIncome: Income[]) => {
    const modifiedIncome = prevIncome.filter((i) => i.id !== itemToDelete.id);
    incomeLoader.save(modifiedIncome);
    return modifiedIncome;
  };

export const getNextPayday = (income: Income): Date => {
  if (income.payDayOccurance === "bi-weekly") {
    let day = new Date(income.startPayDay);
    while (day.valueOf() < Date.now() && !isSameDay(day, new Date())) {
      day = addWeeks(day, 2);
    }
    return day;
  }

  if (income.payDayOccurance === "monthly") {
    let day = new Date(income.startPayDay);
    while (day.valueOf() < Date.now() && !isSameDay(day, new Date())) {
      day = addMonths(day, 1);
    }
    return day;
  }

  return new Date();
};
