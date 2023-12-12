import React from "react";
import AssetModal from "./AssetModal";

export default function AddAssetModal({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}): JSX.Element {
  return (
    <AssetModal
      title="Add Asset"
      open={open}
      setOpen={setOpen}
      onSubmit={(asset) => {
        setOpen(false);
      }}
    />
  );
}
