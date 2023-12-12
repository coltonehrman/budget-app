import React, { useState } from "react";
import { type State } from "./AddBudgetItemModal";
import BudgetItemModal from "./BudgetItemModal";

export default function EditBudgetItemModal({
  open,
  setOpen,
  itemState,
  onEditItem,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  itemState: State;
  onEditItem: (item: State) => void;
}): JSX.Element {
  const [{ name, type, amount }, setState] = useState<State>(itemState);

  return (
    <BudgetItemModal
      title="Edit Item"
      open={open}
      setOpen={setOpen}
      state={{
        name,
        type,
        amount,
      }}
      onNameChange={(event) => {
        setState({
          name: event.target.value,
          type,
          amount,
        });
      }}
      onTypeChange={(event) => {
        const newType = event.target.value;
        if (newType !== "expense" && newType !== "income") return;

        setState({
          name,
          type: newType,
          amount,
        });
      }}
      onAmountChange={(event) => {
        const newNum = Number(event.target.value);
        setState({
          name,
          type,
          amount: Number.isNaN(newNum) ? 0 : newNum,
        });
      }}
      onSubmit={() => {
        setOpen(false);

        onEditItem({
          name,
          type,
          amount,
        });
      }}
    />
  );
}
