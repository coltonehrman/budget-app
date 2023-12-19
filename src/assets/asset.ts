import { loader } from "../common/loader";

export interface Asset {
  name: string;
  type: string;
  value: number;
  debt: number;
}

export const assetLoader = { ...loader<Asset>("assets") };

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
