import React, { useContext, useState } from "react";
import { Store } from "../store";
import FormModal from "../common/FormModal";
import { Expense } from "./expenses";

type NewExpenseInput = Partial<{
  [P in keyof Expense]: Expense[P] extends string ? Expense[P] : string;
}>;

export default function AddExpenseForm({
  isOpen,
  onClose,
  onSubmit,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (itemToAdd: Expense) => void;
}): JSX.Element {
  const { expenses, addExpense } = useContext(Store);

  const [formInput, setFormInput] = useState<NewExpenseInput>({
    name: "",
    type: "utility",
    startDate: "01/01/2024",
    occurance: "monthly",
    payments: "",
  });

  return (
    <>
      <FormModal
        title="Add New Expense"
        open={isOpen}
        onClose={onClose}
        inputs={[
          {
            title: "Name",
            placeholder: "Name",
            value: formInput.name ?? "",
            onChange: (e) => {
              setFormInput((prev) => ({
                ...prev,
                name: e.target.value,
              }));
            },
          },
          {
            title: "Type",
            placeholder: "utility",
            value: formInput.type ?? "",
            onChange: (e) => {
              setFormInput((prev) => ({
                ...prev,
                type: e.target.value as Expense["type"],
              }));
            },
          },
          {
            title: "Start Day",
            placeholder: "01/01/2024",
            value: formInput.startDate ?? "",
            onChange: (e) => {
              setFormInput((prev) => ({
                ...prev,
                startDate: e.target.value,
              }));
            },
          },
          {
            title: "Occurance",
            placeholder: "monthly",
            value: formInput.occurance ?? "",
            onChange: (e) => {
              setFormInput((prev) => ({
                ...prev,
                occurance: e.target.value as Expense["occurance"],
              }));
            },
          },
          {
            title: "Last Payment",
            placeholder: "$0.00",
            value: formInput.payments ?? "",
            onChange: (e) => {
              setFormInput((prev) => ({
                ...prev,
                payments: e.target.value,
              }));
            },
          },
        ]}
        onSubmit={() => {
          // @ts-ignore
          onSubmit({
            ...formInput,
            startDate: new Date(formInput.startDate ?? new Date()),
            payments: formInput.payments
              ? [
                  {
                    date: new Date(),
                    amount: parseFloat(formInput.payments),
                  },
                ]
              : [],
          });

          setFormInput({
            name: "",
            type: "utility",
            startDate: "01/01/2024",
            occurance: "monthly",
          });
        }}
      />
    </>
  );
}
