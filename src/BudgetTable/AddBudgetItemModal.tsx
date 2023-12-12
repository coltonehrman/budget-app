import React, { useState } from "react";
import BudgetItemModal from "./BudgetItemModal";

export interface State {
  name: string;
  type: "expense" | "income";
  amount: number;
}

const DEFAULT_STATE: State = {
  name: "",
  type: "expense",
  amount: 1000,
};

export default function AddBudgetItemModal({
  open,
  setOpen,
  addItem,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  addItem: (item: State) => void;
}): JSX.Element {
  const [{ name, type, amount }, setState] = useState<State>(DEFAULT_STATE);

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
        addItem({
          name,
          type,
          amount,
        });

        setOpen(false);
      }}
    />
  );
}
