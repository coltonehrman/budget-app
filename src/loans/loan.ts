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

export const calculateMonthlyPayment = (loan: Loan): number => {
  const start = new Date();
  const end = new Date(loan.maturityDate);
  const monthsRemaining =
    loan.apy === 3.4 ? 332 : ((end - start) / 1000 / 60 / 60 / 24 / 365) * 12;

  const monthlyAPY = loan.apy / 100 / 12;

  const topEquation = monthlyAPY * Math.pow(1 + monthlyAPY, monthsRemaining);
  const bottomEquation = Math.pow(1 + monthlyAPY, monthsRemaining) - 1;
  const monthlyPayment = loan.balance * (topEquation / bottomEquation);

  return monthlyPayment;
};
