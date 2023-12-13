import React from "react";
import AccountModal from "./AccountModal";

export default function AddAccountModal({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}): JSX.Element {
  return (
    <AccountModal
      title="Add Account"
      open={open}
      setOpen={setOpen}
      onSubmit={(asset) => {
        setOpen(false);
      }}
    />
  );
}
