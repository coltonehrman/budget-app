import React, { useState } from "react";
import Button from "@mui/joy/Button";
import Typography from "@mui/joy/Typography";
import AccordionGroup from "@mui/joy/AccordionGroup";
import {
  Modal,
  Divider,
  ModalClose,
  ModalDialog,
  Sheet,
  Input,
} from "@mui/joy";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import { type Income } from "../income";
import IncomeAccordion from "./IncomeAccordion";
import { formatDate } from "../../common/date";

const DEFAULT_STATE: Income = {
  name: "",
  type: "w2",
  startPayDay: new Date(),
  payDayOccurance: "bi-weekly",
};

export default function IncomeModal({
  title,
  open,
  setOpen,
  onSubmit,
  initialState,
}: {
  title: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmit: (addedIncome: Income) => void;
  initialState?: Income;
}): JSX.Element {
  const [inputState, setInputState] = useState<Income>(
    (initialState ?? DEFAULT_STATE) as unknown as Income,
  );
  const [inputDate, setInputDate] = useState(
    formatDate(inputState.startPayDay),
  );

  return (
    <Modal
      open={open}
      onClose={() => {
        if (setOpen != null) setOpen(false);
      }}
    >
      <ModalDialog minWidth={550} sx={{ overflow: "scroll" }}>
        <ModalClose />
        <Typography level="h4">{title}</Typography>

        <AccordionGroup>
          <IncomeAccordion title="Name">
            <Input
              autoFocus={true}
              onChange={(e) => {
                setInputState({
                  ...inputState,
                  name: e.target.value,
                });
              }}
              value={inputState.name ?? ""}
              placeholder="Name"
            />
          </IncomeAccordion>

          <IncomeAccordion title="Type">
            <Select
              defaultValue={inputState.type}
              onChange={(_e, value) => {
                setInputState({
                  ...inputState,
                  type: value,
                });
              }}
            >
              <Option value="w2">W2</Option>
            </Select>
          </IncomeAccordion>

          <IncomeAccordion title="Pay Occurance">
            <Select
              defaultValue={inputState.payDayOccurance}
              onChange={(_e, value) => {
                setInputState({
                  ...inputState,
                  payDayOccurance: value ?? "bi-weekly",
                });
              }}
            >
              <Option value="bi-weekly">Bi-Weekly</Option>
            </Select>
          </IncomeAccordion>

          <IncomeAccordion title="Start Pay Day">
            <Input
              onChange={(e) => {
                setInputDate(e.target.value);

                const newDate = new Date(e.target.value);

                if (newDate.toString() !== "Invalid Date") {
                  setInputState({
                    ...inputState,
                    startPayDay: newDate,
                  });
                }
              }}
              value={inputDate}
              placeholder="01/01/2030"
            />
          </IncomeAccordion>
        </AccordionGroup>

        <Divider sx={{ my: 2 }} />

        <Sheet sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Button
            color="primary"
            onClick={() => {
              onSubmit({
                name: inputState.name ?? "",
                type: inputState.type,
                payDayOccurance: inputState.payDayOccurance,
                startPayDay: inputState.startPayDay,
              });
              setInputState(DEFAULT_STATE);
            }}
          >
            Submit
          </Button>
        </Sheet>
      </ModalDialog>
    </Modal>
  );
}
