import { createContext } from "react";
import { type Account } from "./accounts/account";
import { type Asset } from "./assets/asset";
import { type Budget } from "./budget/budget";
import { type Loan } from "./loans/loan";
import { type Income } from "./income/income";

export const Store = createContext<{
  income: Income[];
  accounts: Account[];
  assets: Asset[];
  budget: Budget[];
  loans: Loan[];
  update: () => void;
}>({
  income: [],
  accounts: [],
  assets: [],
  budget: [],
  loans: [],
  update: () => {},
});
