import React, { useCallback, useState } from "react";
import FormModal from "../common/FormModal";
import { type Loan } from "./loan";
import { formatDate } from "../common/date";

export default function LoanModal({
  open,
  setOpen,
  onSubmit,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmit: (loan: Loan) => void;
}): JSX.Element {
  const [loan, setLoan] = useState<Loan>({
    name: "",
    apy: 0,
    balance: 0,
    maturityDate: new Date(),
    originalBalance: 0,
    termInMonths: 0,
    type: "house",
  });

  const [inputDate, setInputDate] = useState(formatDate(loan.maturityDate));

  const onFormSubmit = useCallback(() => {
    const newDate = new Date(inputDate);

    if (newDate.toString() === "Invalid Date") {
      return;
    }

    onSubmit({
      ...loan,
      balance: parseFloat(loan.balance),
      apy: parseFloat(loan.apy),
      originalBalance: parseFloat(loan.originalBalance),
      termInMonths: parseInt(loan.termInMonths),
    });
  }, [loan, inputDate]);

  return (
    <>
      <FormModal
        title="Add Loan"
        open={open}
        setOpen={setOpen}
        inputs={[
          {
            title: "Name",
            placeholder: "Name",
            value: loan.name,
            onChange: (e) => {
              setLoan({
                ...loan,
                name: e.target.value,
              });
            },
          },
          {
            title: "Type",
            placeholder: "house",
            value: loan.type,
            onChange: (e) => {
              setLoan({
                ...loan,
                type: e.target.value as Loan["type"],
              });
            },
          },
          {
            title: "Balance",
            placeholder: "$ 0",
            value: loan.balance.toString(),
            onChange: (e) => {
              const newValue = e.target.value;

              setLoan({
                ...loan,
                balance: Number.isNaN(Number(newValue)) ? 0 : newValue,
              });
            },
          },
          {
            title: "Original Balance",
            placeholder: "$ 0",
            value: loan.originalBalance.toString(),
            onChange: (e) => {
              const newValue = e.target.value;

              setLoan({
                ...loan,
                originalBalance: Number.isNaN(Number(newValue)) ? 0 : newValue,
              });
            },
          },
          {
            title: "APY",
            placeholder: "0 %",
            value: loan.apy.toString(),
            onChange: (e) => {
              const newValue = e.target.value;

              setLoan({
                ...loan,
                apy: Number.isNaN(Number(newValue)) ? 0 : newValue,
              });
            },
          },
          {
            title: "Term in Months",
            placeholder: "12 Months",
            value: loan.termInMonths.toString(),
            onChange: (e) => {
              const newValue = e.target.value;

              setLoan({
                ...loan,
                termInMonths: Number.isNaN(Number(newValue)) ? 0 : newValue,
              });
            },
          },
          {
            title: "Maturity Date",
            placeholder: "01/01/2030",
            value: inputDate,
            onChange: (e) => {
              setInputDate(e.target.value);

              const newDate = new Date(e.target.value);

              if (newDate.toString() !== "Invalid Date") {
                setLoan({
                  ...loan,
                  maturityDate: newDate,
                });
              }
            },
          },
        ]}
        onSubmit={onFormSubmit}
      />
    </>
  );
}
