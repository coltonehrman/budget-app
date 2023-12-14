import { loader } from "../common/loader";

export interface Account {
  name: string;
  type: "checking" | "credit" | "savings" | "investment";
  balance: number;
  link: string;
}

export const accountsLoader = { ...loader<Account>("loans") };

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
