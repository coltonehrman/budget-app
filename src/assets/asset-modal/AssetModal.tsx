import React, { useContext, useState } from "react";
import Button from "@mui/joy/Button";
import { AccordionGroup, Checkbox, Input } from "@mui/joy";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import { type NewAsset, type Asset } from "../asset";
import { Modal, Slot } from "../../common/Modal";
import { Store } from "../../store";
import { AccordionSection } from "../../common/AccordionSection";
import LoanForm, {
  DEFAULT_STATE as LOAN_DEFAULT_STATE,
} from "../../loans/LoanForm";
import { LoanWithoutID } from "../../loans/loan";
import { formatDate } from "../../common/date";

const DEFAULT_STATE: NewAsset = {
  name: "",
  type: "",
  value: 10000,
};

export default function AssetModal({
  title,
  open,
  setOpen,
  onSubmit,
  initialState,
}: {
  title: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmit: (asset: NewAsset) => void;
  initialState?: Asset;
}): JSX.Element {
  const { loans } = useContext(Store);
  const [state, setState] = useState<NewAsset>(initialState ?? DEFAULT_STATE);
  const [hasLoan, setHasLoan] = useState(false);

  const [loan, setLoan] = useState<LoanWithoutID>(LOAN_DEFAULT_STATE);
  const [inputDate, setInputDate] = useState(formatDate(loan.maturityDate));

  return (
    <Modal title={title} open={open} close={() => setOpen(false)}>
      <Slot type="body">
        <AccordionGroup>
          <AccordionSection title="Name">
            <Input
              autoFocus={true}
              onChange={(e) => {
                setState({
                  ...state,
                  name: e.target.value,
                });
              }}
              value={state.name}
              placeholder="Name"
            />
          </AccordionSection>

          <AccordionSection title="Type">
            <Select
              defaultValue={state.type ?? "house"}
              onChange={(_e, value) => {
                setState({
                  ...state,
                  type: value ?? "house",
                });
              }}
            >
              <Option value="house">House</Option>
              <Option value="car">Car</Option>
            </Select>
          </AccordionSection>

          <AccordionSection title="Value">
            <Input
              value={state.value}
              onChange={(e) => {
                const newValue = Number(e.target.value);

                setState({
                  ...state,
                  value: Number.isNaN(newValue) ? 0 : newValue,
                });
              }}
              placeholder="$ 0"
            />
          </AccordionSection>

          <AccordionSection title="Loan">
            <>
              <Checkbox
                label="Has a Loan?"
                checked={hasLoan}
                onChange={(e) => setHasLoan(e.target.checked)}
              />

              {hasLoan && (
                <>
                  {console.log(loans)}
                  <Input
                    sx={{ marginTop: 2 }}
                    value={state.value}
                    onChange={(e) => {
                      const newValue = Number(e.target.value);

                      setState({
                        ...state,
                        value: Number.isNaN(newValue) ? 0 : newValue,
                      });
                    }}
                    placeholder="$ 0"
                  />

                  <LoanForm
                    loan={loan}
                    setLoan={setLoan}
                    setInputDate={setInputDate}
                    inputDate={inputDate}
                  />
                </>
              )}
            </>
          </AccordionSection>
        </AccordionGroup>
      </Slot>

      <Slot type="button">
        <Button
          color="primary"
          onClick={() => {
            onSubmit(state);
            setState(DEFAULT_STATE);
          }}
        >
          Submit
        </Button>
      </Slot>
    </Modal>
  );
}
