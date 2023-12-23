import { createContext, useState } from "react";
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
}>({
  income: [],
  accounts: [],
  assets: [],
  budget: [],
  loans: [],
  addLoan: () => {},
  deleteLoan: () => {},
});

export const StoreProvider = ({ children }: { children: JSX.Element }) => {
  const [income, setIncome] = useState<Income[]>(incomeLoader.load([]));
  const [accounts, setAccounts] = useState<Account[]>(accountsLoader.load([]));
  const [assets, setAssets] = useState<Asset[]>(assetLoader.load([]));
  const [budget, setBudget] = useState<Budget[]>(budgetLoader.load([]));
  const [loans, setLoans] = useState<Loan[]>(loansLoader.load([]));

  const _addLoan = (loan: LoanWithoutID) => {
    setLoans((prevLoans) => {
      const newLoans = addLoan(prevLoans, loan);
      loansLoader.save(newLoans);
      return newLoans;
    });
  };

  const _deleteLoan = (loan: Loan) => {
    setLoans((prevLoans) => {
      const newLoans = deleteLoan(prevLoans, loan);
      loansLoader.save(newLoans);
      return newLoans;
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
      }}
    >
      {children}
    </Store.Provider>
  );
};
