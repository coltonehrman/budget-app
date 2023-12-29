export const getNextId: <T extends { id: number }>(items: T[]) => number = (
  items,
): number => items.reduce((lastId, item) => Math.max(lastId, item.id), 0) + 1;
