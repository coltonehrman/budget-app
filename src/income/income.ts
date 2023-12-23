import { loader } from "../common/loader";

export interface Income {
  name: string;
  type: "w2" | null;
  startPayDay: Date;
  payDayOccurance: "bi-weekly";
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
    // console.log(day.valueOf(), Date.now());
    while (day.valueOf() < Date.now()) {
      console.log("adding 2 weeks");
      day = addWeeksToDate(day, 2);
    }
    return day;
  }

  return new Date();
};
