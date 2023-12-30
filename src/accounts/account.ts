import { getNextId } from "../common/id";
import { loader } from "../common/loader";
import { PartialBy } from "../common/types";

interface BalanceEntry {
  date?: Date;
  amount: number;
}

export interface Account {
  id: number;
  name: string;
  type: "checking" | "credit" | "savings" | "investment" | null;
  balances: BalanceEntry[];
  link: string | null;
}

export type NewAccount = PartialBy<Account, "id" | "balances"> & {
  balance: number;
};

export const accountsLoader = { ...loader<Account[]>("accounts") };

export const addNewAccount =
  (itemToAdd: NewAccount) => (prevItems: Account[]) => {
    const newItems: Account[] = [
      ...prevItems,
      {
        ...itemToAdd,
        id: itemToAdd.id ?? getNextId(prevItems),
        balances: [
          {
            amount: itemToAdd.balance,
            date: new Date(),
          },
        ],
      },
    ];

    accountsLoader.save(newItems);
    return newItems;
  };

export const editAccount = (edittedItem: Account) => (prevItems: Account[]) => {
  const modifiedItems = [...prevItems];
  const edittedIncomeIndex = modifiedItems.findIndex(
    (i) => i.id === edittedItem.id,
  );
  modifiedItems[edittedIncomeIndex] = edittedItem;
  accountsLoader.save(modifiedItems);
  return modifiedItems;
};

export const deleteAccount =
  (itemToDelete: Account) => (prevItems: Account[]) => {
    const modifiedItems = prevItems.filter((i) => i.id !== itemToDelete.id);
    accountsLoader.save(modifiedItems);
    return modifiedItems;
  };
