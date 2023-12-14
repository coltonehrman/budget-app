import React, { useCallback, useState } from "react";
import FormModal from "../common/FormModal";
import { type Loan } from "./loan";

const formatDate = (date: Date): string =>
  (date.getMonth() > 8 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1)) +
  "/" +
  (date.getDate() > 9 ? date.getDate() : "0" + date.getDate()) +
  "/" +
  date.getFullYear();

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

    onSubmit(loan);
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
              setLoan({
                ...loan,
                balance: Number(e.target.value),
              });
            },
          },
          {
            title: "Original Balance",
            placeholder: "$ 0",
            value: loan.originalBalance.toString(),
            onChange: (e) => {
              setLoan({
                ...loan,
                originalBalance: Number(e.target.value),
              });
            },
          },
          {
            title: "APY",
            placeholder: "0 %",
            value: loan.apy.toString(),
            onChange: (e) => {
              setLoan({
                ...loan,
                apy: Number(e.target.value),
              });
            },
          },
          {
            title: "Term in Months",
            placeholder: "12 Months",
            value: loan.termInMonths.toString(),
            onChange: (e) => {
              setLoan({
                ...loan,
                termInMonths: Number(e.target.value),
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
