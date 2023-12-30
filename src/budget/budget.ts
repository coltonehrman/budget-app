import { loader } from "../common/loader";

export interface Budget {
  name: string;
  occurence?: "daily" | "weekly" | "bi-weekly" | "monthly" | "yearly" | null;
  type: "expense" | "income";
  amount: number;
}

export const budgetLoader = { ...loader<Budget[]>("budget-items") };

export const editBudgetItem = (
  items: Budget[],
  itemIndexToEdit: number,
  itemEdits: Budget,
): Budget[] => {
  const copyOfBuget = [...items];
  copyOfBuget[itemIndexToEdit] = itemEdits;
  return copyOfBuget;
};

export const deleteBudgetItem = (
  items: Budget[],
  itemIndexToDelete: number,
): Budget[] => {
  const copyOfBuget = [...items];
  copyOfBuget.splice(itemIndexToDelete, 1);
  return copyOfBuget;
};
