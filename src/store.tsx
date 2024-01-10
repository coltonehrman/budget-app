import React, { createContext, useCallback, useEffect, useState } from "react";
import {
  accountsLoader,
  type Account,
  addNewAccount,
  editAccount,
  deleteAccount,
  NewAccount,
} from "./accounts/account";
import { assetLoader, type Asset, NewAsset, addNewAsset } from "./assets/asset";
import { type Budget } from "./budget/budget";
import {
  addNewIncome,
  incomeLoader,
  type Income,
  type NewIncome,
  editIncome,
  deleteIncome,
} from "./income/income";
import {
  addLoan,
  deleteLoan,
  loansLoader,
  type Loan,
  type LoanWithoutID,
} from "./loans/loan";
import {
  DailySpending,
  dailySpendingLoader,
  spendMoneyForTheDay,
} from "./dashboard/dailySpending";
import {
  Expense,
  NewExpense,
  addNewExpense,
  deleteExpense,
  editExpense,
  expensesLoader,
} from "./expenses/expenses";

// @ts-expect-error ...
window.__export_local_storage = () => {
  // @ts-expect-error ...
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  function download(filename) {
    const element = document.createElement("a");
    element.setAttribute(
      "href",
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      "data:application/json;charset=utf-8," +
        encodeURIComponent(
          "{" +
            Object.keys(localStorage)
              .map((key) => `"${key}": ${localStorage.getItem(key)}`)
              .join(",") +
            "}",
        ),
    );

    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    element.setAttribute("download", filename);

    element.style.display = "none";
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }

  download("budget-local-storage-export.json");
};

export const Store = createContext<{
  dailySpending?: DailySpending;
  addDailySpending: (item: number, dailyBudget: number) => void;

  income: Income[];
  addIncome: (item: NewIncome) => void;
  editIncome: (item: Income) => void;
  deleteIncome: (item: Income) => void;
  submitPayDay: (item: Income, amount: number) => void;

  expenses: Expense[];
  addExpense: (item: NewExpense) => void;
  editExpense: (item: Expense) => void;
  deleteExpense: (item: Expense) => void;

  accounts: Account[];
  addAccount: (item: NewAccount) => void;
  editAccount: (item: Account) => void;
  deleteAccount: (item: Account) => void;

  assets: Asset[];
  addAsset: (item: NewAsset) => void;

  budget: Budget[];

  loans: Loan[];
  addLoan: (item: LoanWithoutID) => void;
  deleteLoan: (item: Loan) => void;
}>({
  income: [],
  accounts: [],
  assets: [],
  budget: [],
  loans: [],
  addDailySpending: () => {},
  addLoan: () => {},
  deleteLoan: () => {},
  submitPayDay: () => {},
  addIncome: () => {},
  editIncome: () => {},
  deleteIncome: () => {},
  addAsset: () => {},
  addAccount: () => {},
  editAccount: () => {},
  deleteAccount: () => {},

  expenses: [],
  addExpense: () => {},
  editExpense: () => {},
  deleteExpense: () => {},
});

export const StoreProvider = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element => {
  const [dailySpending, setDailySpending] = useState<
    DailySpending | undefined
  >();
  const [income, setIncome] = useState<Income[]>([]);
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [assets, setAssets] = useState<Asset[]>([]);
  const [budget, setBudget] = useState<Budget[]>([]);
  const [loans, setLoans] = useState<Loan[]>([]);

  useEffect(() => {
    const storedIncome = incomeLoader.load();
    const storedExpenses = expensesLoader.load();
    const storedLoans = loansLoader.load();
    const storedAssets = assetLoader.load();
    const storedAccounts = accountsLoader.load();
    const storedDailySpending = dailySpendingLoader.load();

    try {
      const jsonIncome = JSON.parse(storedIncome || "[]");

      const convertedIncome = jsonIncome.map((i: any) => ({
        ...i,
        startPayDay: new Date((i.startPayDay as string) ?? ""),
        payDays: (i.payDays ?? []).map((p: any) => ({
          ...p,
          date: new Date((p.date as string) ?? ""),
        })),
      }));

      setIncome(convertedIncome);

      const jsonExpenses = JSON.parse(storedExpenses || "[]") as Expense[];

      const convertedExpenses = jsonExpenses.map((i: Expense) => ({
        ...i,
        startDate: new Date(i.startDate ?? ""),
        payments: (i.payments ?? []).map((p: any) => ({
          ...p,
          date: new Date((p.date as string) ?? ""),
        })),
      }));

      setExpenses(convertedExpenses);

      const jsonLoans = JSON.parse(storedLoans || "[]") as Loan[];

      const covertedLoans = jsonLoans.map((i: Loan) => ({
        ...i,
        maturityDate: new Date(i.maturityDate ?? ""),
      }));

      setLoans(covertedLoans);

      const jsonAssets = JSON.parse(storedAssets || "[]") as Asset[];
      setAssets(jsonAssets);

      const jsonDailySpending = JSON.parse(
        storedDailySpending || "{}",
      ) as DailySpending;

      setDailySpending(jsonDailySpending);

      const jsonAccounts = JSON.parse(storedAccounts || "[]");

      setAccounts(jsonAccounts);
    } catch (e) {
      console.error(e);
    }
  }, []);

  const _addLoan = useCallback((loan: LoanWithoutID): void => {
    setLoans((prevLoans) => {
      const newLoans = addLoan(prevLoans, loan);
      loansLoader.save(newLoans);
      return newLoans;
    });
  }, []);

  const _deleteLoan = useCallback((loan: Loan): void => {
    setLoans((prevLoans) => {
      const newLoans = deleteLoan(prevLoans, loan);
      loansLoader.save(newLoans);
      return newLoans;
    });
  }, []);

  const _submitPayDay = useCallback((income: Income, amount: number): void => {
    setIncome((prevIncome) => {
      const copy = [...prevIncome];
      const index = copy.findIndex((i) => i.id === income.id);
      const item = copy[index];

      if (item == null) return prevIncome;

      if (item.payDays == null) {
        item.payDays = [
          {
            date: new Date(),
            amount,
          },
        ];
      } else {
        item.payDays.push({
          date: new Date(),
          amount,
        });
      }

      const newIncome = [...prevIncome.filter((i) => i.id !== item.id), item];
      incomeLoader.save(newIncome);
      return newIncome;
    });
  }, []);

  const _addDailySpending = useCallback(
    (amountToSpend: number, dailyBudget: number): void => {
      setDailySpending(spendMoneyForTheDay(amountToSpend, dailyBudget));
    },
    [],
  );

  const _addIncome = useCallback((itemToAdd: NewIncome): void => {
    setIncome(addNewIncome(itemToAdd));
  }, []);

  const _editIncome = useCallback((edittedItem: Income): void => {
    setIncome(editIncome(edittedItem));
  }, []);

  const _deleteIncome = useCallback((itemToDelete: Income): void => {
    setIncome(deleteIncome(itemToDelete));
  }, []);

  const _addExpense = useCallback((itemToAdd: NewExpense): void => {
    setExpenses(addNewExpense(itemToAdd));
  }, []);

  const _editExpense = useCallback((edittedItem: Expense): void => {
    setExpenses(editExpense(edittedItem));
  }, []);

  const _deleteExpense = useCallback((itemToDelete: Expense): void => {
    setExpenses(deleteExpense(itemToDelete));
  }, []);

  const _addAsset = useCallback((itemToAdd: NewAsset): void => {
    setAssets(addNewAsset(itemToAdd));
  }, []);

  const _addAccount = useCallback((itemToAdd: NewAccount): void => {
    setAccounts(addNewAccount(itemToAdd));
  }, []);

  const _editAccount = useCallback((edittedItem: Account): void => {
    setAccounts(editAccount(edittedItem));
  }, []);

  const _deleteAccount = useCallback((itemToDelete: Account): void => {
    setAccounts(deleteAccount(itemToDelete));
  }, []);

  return (
    <Store.Provider
      value={{
        dailySpending,
        income: [...income],
        accounts: [...accounts],
        assets,
        budget,
        loans: [...loans],
        addDailySpending: _addDailySpending,
        addLoan: _addLoan,
        deleteLoan: _deleteLoan,
        submitPayDay: _submitPayDay,
        addIncome: _addIncome,
        editIncome: _editIncome,
        deleteIncome: _deleteIncome,
        addAsset: _addAsset,
        addAccount: _addAccount,
        editAccount: _editAccount,
        deleteAccount: _deleteAccount,

        expenses,
        addExpense: _addExpense,
        editExpense: _editExpense,
        deleteExpense: _deleteExpense,
      }}
    >
      {children}
    </Store.Provider>
  );
};
