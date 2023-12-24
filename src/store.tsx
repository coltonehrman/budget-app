import React, { createContext, useState } from "react";
import { accountsLoader, type Account } from "./accounts/account";
import { assetLoader, type Asset } from "./assets/asset";
import { budgetLoader, type Budget } from "./budget/budget";
import {
  loansLoader,
  type Loan,
  type LoanWithoutID,
  addLoan,
  deleteLoan,
} from "./loans/loan";
import { incomeLoader, type Income } from "./income/income";

export const Store = createContext<{
  income: Income[];
  accounts: Account[];
  assets: Asset[];
  budget: Budget[];
  loans: Loan[];
  addLoan: (loan: LoanWithoutID) => void;
  deleteLoan: (loan: Loan) => void;
  submitPayDay: (income: Income, amount: number) => void;
}>({
  income: [],
  accounts: [],
  assets: [],
  budget: [],
  loans: [],
  addLoan: () => {},
  deleteLoan: () => {},
  submitPayDay: () => {},
});

export const StoreProvider = ({ children }: { children: JSX.Element }) => {
  const [income, setIncome] = useState<Income[]>(incomeLoader.load([]));
  const [accounts, setAccounts] = useState<Account[]>(accountsLoader.load([]));
  const [assets, setAssets] = useState<Asset[]>(assetLoader.load([]));
  const [budget, setBudget] = useState<Budget[]>(budgetLoader.load([]));
  const [loans, setLoans] = useState<Loan[]>(loansLoader.load([]));

  const _addLoan = (loan: LoanWithoutID): void => {
    setLoans((prevLoans) => {
      const newLoans = addLoan(prevLoans, loan);
      loansLoader.save(newLoans);
      return newLoans;
    });
  };

  const _deleteLoan = (loan: Loan): void => {
    setLoans((prevLoans) => {
      const newLoans = deleteLoan(prevLoans, loan);
      loansLoader.save(newLoans);
      return newLoans;
    });
  };

  const _submitPayDay = (income: Income, amount: number): void => {
    setIncome((prevIncome) => {
      const copy = prevIncome.find((i) => i.id === income.id);

      if (copy == null) return prevIncome;

      if (copy.payDays == null) {
        copy.payDays = [
          {
            date: new Date(),
            amount,
          },
        ];
      } else {
        copy.payDays.push({
          date: new Date(),
          amount,
        });
      }

      const newIncome = [...prevIncome.filter((i) => i.id !== copy.id), copy];
      incomeLoader.save(newIncome);
      return newIncome;
    });
  };

  return (
    <Store.Provider
      value={{
        income: [...income],
        accounts: [...accounts],
        assets,
        budget,
        loans: [...loans],
        addLoan: _addLoan,
        deleteLoan: _deleteLoan,
        submitPayDay: _submitPayDay,
      }}
    >
      {children}
    </Store.Provider>
  );
};
