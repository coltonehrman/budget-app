import { loader } from "../common/loader";

interface BalanceEntry {
  date?: Date;
  amount: number;
}

export interface Account {
  name: string;
  type: "checking" | "credit" | "savings" | "investment" | null;
  balances: BalanceEntry[];
  link: string | null;
}

export const accountsLoader = { ...loader<Account>("accounts") };

export const editAccount = (
  accounts: Account[],
  accountIndexToEdit: number,
  accountEdits: Account,
): Account[] => {
  const copyOfAccounts = [...accounts];
  copyOfAccounts[accountIndexToEdit] = accountEdits;
  return copyOfAccounts;
};

export const deleteAccount = (
  accounts: Account[],
  accountIndexToDelete: number,
): Account[] => {
  const copyOfAccounts = [...accounts];
  copyOfAccounts.splice(accountIndexToDelete, 1);
  return copyOfAccounts;
};
