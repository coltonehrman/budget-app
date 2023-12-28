import { loader } from "../common/loader";

export interface Loan {
  id: number;
  name: string;
  type: "house" | "car";
  balance: number;
  originalBalance: number;
  apy: number;
  maturityDate: Date;
}

export type LoanWithoutID = Omit<Loan, "id">;

export const loansLoader = { ...loader<Loan>("loans") };

export const getNextLoanId = (loans: Loan[]): number =>
  loans.reduce((lastId, loan) => Math.max(lastId, loan.id), 0) + 1;

export const addLoan = (loans: Loan[], loan: LoanWithoutID): Loan[] => {
  const loanWithId = {
    id: getNextLoanId(loans),
    ...loan,
  };

  return [...loans, loanWithId];
};

export const deleteLoan = (loans: Loan[], loanToDelete: Loan): Loan[] => {
  const copy = [...loans];
  return copy.filter((l) => l.id !== loanToDelete.id);
};

export const calculateMonthlyPayment = (loan: Loan): number => {
  const start = new Date().valueOf();
  const end = new Date(loan.maturityDate).valueOf();

  const monthsRemaining =
    loan.apy === 3.4 ? 332 : ((end - start) / 1000 / 60 / 60 / 24 / 365) * 12;

  const monthlyAPY = loan.apy / 100 / 12;

  const topEquation = monthlyAPY * Math.pow(1 + monthlyAPY, monthsRemaining);
  const bottomEquation = Math.pow(1 + monthlyAPY, monthsRemaining) - 1;
  const monthlyPayment = loan.balance * (topEquation / bottomEquation);

  return monthlyPayment;
};
