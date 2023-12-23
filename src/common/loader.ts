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
