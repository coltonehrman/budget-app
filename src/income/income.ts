import { isSameDay } from "date-fns";
import { loader } from "../common/loader";

export interface PayDay {
  date: Date;
  amount: number;
}

export interface Income {
  id: number;
  name: string;
  type: "w2" | null;
  startPayDay: Date;
  payDayOccurance: "bi-weekly";
  payDays: PayDay[];
}

export const incomeLoader = { ...loader<Income>("income") };

export const editIncome = (
  income: Income[],
  incomeIndexToEdit: number,
  incomeEdits: Income,
): Income[] => {
  const copy = [...income];
  copy[incomeIndexToEdit] = incomeEdits;
  return copy;
};

export const deleteIncome = (
  income: Income[],
  incomeIndexToDelete: number,
): Income[] => {
  const copy = [...income];
  copy.splice(incomeIndexToDelete, 1);
  return copy;
};

const addWeeksToDate = (dateObj: Date, numberOfWeeks: number): Date => {
  dateObj.setDate(dateObj.getDate() + numberOfWeeks * 7);
  return dateObj;
};

export const getNextPayday = (income: Income): Date => {
  if (income.payDayOccurance === "bi-weekly") {
    let day = new Date(income.startPayDay);
    while (!isSameDay(day, new Date())) {
      day = addWeeksToDate(day, 2);
    }
    return day;
  }

  return new Date();
};
