import { getNextId } from "../common/id";
import { loader } from "../common/loader";
import { PartialBy } from "../common/types";

export interface ExpensePayment {
  amount: number;
  date: Date;
}

export interface Expense {
  id: number;
  name: string;
  type: "utility";
  occurance: "monthly";
  startDate: Date;
  payments: ExpensePayment[];
}

export type NewExpense = PartialBy<Expense, "id">;

export const expensesLoader = { ...loader<Expense[]>("expenses") };

export const addNewExpense =
  (itemToAdd: NewExpense) => (prevItems: Expense[]) => {
    const newItems: Expense[] = [
      ...prevItems,
      {
        ...itemToAdd,
        id: itemToAdd.id ?? getNextId(prevItems),
      },
    ];

    expensesLoader.save(newItems);
    return newItems;
  };

export const editExpense = (edittedItem: Expense) => (prevItems: Expense[]) => {
  const modifiedItems = [...prevItems];
  const edittedIncomeIndex = modifiedItems.findIndex(
    (i) => i.id === edittedItem.id,
  );
  modifiedItems[edittedIncomeIndex] = edittedItem;

  expensesLoader.save(modifiedItems);
  return modifiedItems;
};

export const deleteExpense =
  (itemToDelete: Expense) => (prevItems: Expense[]) => {
    const modifiedItems = prevItems.filter((i) => i.id !== itemToDelete.id);

    expensesLoader.save(modifiedItems);
    return modifiedItems;
  };
