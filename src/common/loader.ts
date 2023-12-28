export const loader: <T>(key: string) => {
  load: () => string;
  save: (items: T[]) => void;
} = (key) => ({
  load: () => {
    const storedItems = localStorage.getItem(key);

    if (storedItems !== null) {
      return storedItems;
    }

    return "";
  },
  save: (items) => {
    localStorage.setItem(key, JSON.stringify(items));
  },
});
