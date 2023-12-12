import React, { useState } from "react";
import BudgetItemModal from "./AssetModal";

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
  const [{ name, occurence, type, amount }, setState] =
    useState<State>(itemState);

  return (
    <BudgetItemModal
      title="Edit Item"
      open={open}
      setOpen={setOpen}
      state={{
        name,
        type,
        occurence,
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
        setOpen(false);

        console.log("edit", {
          name,
          occurence,
          type,
          amount,
        });

        onEditItem({
          name,
          occurence,
          type,
          amount,
        });
      }}
    />
  );
}
