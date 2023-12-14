import { loader } from "../common/loader";

export interface Loan {
  name: string;
  type: "house" | "car";
  balance: number;
  originalBalance: number;
  apy: number;
  termInMonths: number;
  maturityDate: Date;
}

export const loansLoader = { ...loader<Loan>("loans") };

export const deleteLoan = (
  loans: Loan[],
  loanIndexToDelete: number,
): Loan[] => {
  const copyOfLoans = [...loans];
  copyOfLoans.splice(loanIndexToDelete, 1);
  return copyOfLoans;
};
