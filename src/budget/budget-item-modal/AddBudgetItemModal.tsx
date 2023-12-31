import React, { useState } from "react";
import BudgetItemModal from "./BudgetItemModal";
import { type Budget } from "../budget";

const DEFAULT_STATE: Budget = {
  name: "",
  occurence: "monthly",
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
  addItem: (item: Budget) => void;
}): JSX.Element {
  const [{ name, occurence, type, amount }, setState] =
    useState<Budget>(DEFAULT_STATE);

  return (
    <BudgetItemModal
      title="Edit Item"
      open={open}
      setOpen={setOpen}
      state={{
        name,
        occurence,
        type,
        amount,
      }}
      onNameChange={(event) => {
        setState({
          name: event.target.value,
          occurence,
          type,
          amount,
        });
      }}
      onOccurenceChange={(_event, newOccurence) => {
        setState({
          name,
          occurence: newOccurence,
          type,
          amount,
        });
      }}
      onTypeChange={(event) => {
        const newType = event.target.value;
        if (newType !== "expense" && newType !== "income") return;

        setState({
          name,
          occurence,
          type: newType,
          amount,
        });
      }}
      onAmountChange={(event) => {
        const newNum = Number(event.target.value);
        setState({
          name,
          occurence,
          type,
          amount: Number.isNaN(newNum) ? 0 : newNum,
        });
      }}
      onSubmit={() => {
        addItem({
          name,
          occurence,
          type,
          amount,
        });

        setOpen(false);
      }}
    />
  );
}
