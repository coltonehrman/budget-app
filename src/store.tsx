import { createContext } from "react";
import { type Account } from "./accounts/account";
import { type Asset } from "./assets/asset";
import { type Budget } from "./budget/budget";
import { type Loan } from "./loans/loan";

export const Store = createContext<{
  accounts: Account[];
  assets: Asset[];
  budget: Budget[];
  loans: Loan[];
  update: () => void;
}>({
  accounts: [],
  assets: [],
  budget: [],
  loans: [],
  update: () => {},
});
