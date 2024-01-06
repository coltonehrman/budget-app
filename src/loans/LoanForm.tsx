import React from "react";
import { type LoanWithoutID, type Loan } from "./loan";
import { AccordionGroup, Input } from "@mui/joy";
import { AccordionSection } from "../common/AccordionSection";

export const DEFAULT_STATE: LoanWithoutID = {
  name: "",
  apy: 0,
  balance: 0,
  maturityDate: new Date(),
  originalBalance: 0,
  type: "house",
};

export default function LoanForm({
  loan,
  setLoan,
  inputDate,
  setInputDate,
}: {
  loan: LoanWithoutID;
  setLoan: React.Dispatch<React.SetStateAction<LoanWithoutID>>;
  inputDate: string;
  setInputDate: React.Dispatch<React.SetStateAction<string>>;
}): JSX.Element {
  return (
    <AccordionGroup>
      <AccordionSection title="Name">
        <Input
          autoFocus={true}
          onChange={(e) => {
            setLoan({
              ...loan,
              name: e.target.value,
            });
          }}
          value={loan.name}
          placeholder="Name"
        />
      </AccordionSection>

      <AccordionSection title="Type">
        <Input
          autoFocus={true}
          onChange={(e) => {
            setLoan({
              ...loan,
              type: e.target.value as Loan["type"],
            });
          }}
          value={loan.type}
          placeholder="house"
        />
      </AccordionSection>

      <AccordionSection title="Balance">
        <Input
          autoFocus={true}
          onChange={(e) => {
            const newValue = e.target.value;

            setLoan({
              ...loan,
              // @ts-expect-error TODO: fix types for input
              balance: Number.isNaN(Number(newValue)) ? 0 : newValue,
            });
          }}
          value={loan.balance.toString()}
          placeholder="$ 0"
        />
      </AccordionSection>

      <AccordionSection title="Original Balance">
        <Input
          autoFocus={true}
          onChange={(e) => {
            const newValue = e.target.value;

            setLoan({
              ...loan,
              // @ts-expect-error TODO: fix types for input
              originalBalance: Number.isNaN(Number(newValue)) ? 0 : newValue,
            });
          }}
          value={loan.originalBalance.toString()}
          placeholder="$ 0"
        />
      </AccordionSection>

      <AccordionSection title="APY">
        <Input
          autoFocus={true}
          onChange={(e) => {
            const newValue = e.target.value;

            setLoan({
              ...loan,
              // @ts-expect-error TODO: fix types for input
              apy: Number.isNaN(Number(newValue)) ? 0 : newValue,
            });
          }}
          value={loan.apy.toString()}
          placeholder="0 %"
        />
      </AccordionSection>

      <AccordionSection title="Maturity Date">
        <Input
          autoFocus={true}
          onChange={(e) => {
            setInputDate(e.target.value);

            const newDate = new Date(e.target.value);

            if (newDate.toString() !== "Invalid Date") {
              setLoan({
                ...loan,
                maturityDate: newDate,
              });
            }
          }}
          value={inputDate}
          placeholder="01/01/2030"
        />
      </AccordionSection>
    </AccordionGroup>
  );
}
