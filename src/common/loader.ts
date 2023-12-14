export const loader: <T>(key: string) => {
  load: (items: T[]) => T[];
  save: (items: T[]) => void;
} = (key) => ({
  load: (items) => {
    if (items.length === 0) {
      const storedItems = localStorage.getItem(key);

      if (storedItems !== null) {
        const parsedStoredItems = JSON.parse(storedItems);
        return parsedStoredItems;
      }
    }

    return items;
  },
  save: (items) => {
    localStorage.setItem(key, JSON.stringify(items));
  },
});

// export const deleteLoan = (
//   loans: Loan[],
//   loanIndexToDelete: number,
// ): Loan[] => {
//   const copyOfLoans = [...loans];
//   copyOfLoans.splice(loanIndexToDelete, 1);
//   return copyOfLoans;
// };
