import { getNextId } from "../common/id";
import { loader } from "../common/loader";
import { type PartialBy } from "../common/types";

export interface Asset {
  id: number;
  name: string;
  type: string;
  value: number;
}

export type NewAsset = PartialBy<Asset, "id">;

export const assetLoader = { ...loader<Asset[]>("assets") };

export const addNewAsset = (itemToAdd: NewAsset) => (prevItems: Asset[]) => {
  const newItems = [
    ...prevItems,
    {
      id: itemToAdd.id ?? getNextId(prevItems),
      ...itemToAdd,
    },
  ];
  assetLoader.save(newItems);
  return newItems;
};

export const editAssetItem = (
  items: Asset[],
  itemIndexToEdit: number,
  itemEdits: Asset,
): Asset[] => {
  const copy = [...items];
  copy[itemIndexToEdit] = itemEdits;
  return copy;
};

export const deleteAssetItem = (
  items: Asset[],
  itemIndexToDelete: number,
): Asset[] => {
  const copy = [...items];
  copy.splice(itemIndexToDelete, 1);
  return copy;
};
