import React from "react";
import Button from "@mui/joy/Button";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import AccordionGroup from "@mui/joy/AccordionGroup";
import Accordion from "@mui/joy/Accordion";
import AccordionSummary from "@mui/joy/AccordionSummary";
import AccordionDetails from "@mui/joy/AccordionDetails";
import {
  Modal,
  Divider,
  ModalClose,
  ModalDialog,
  Sheet,
  Input,
  RadioGroup,
  Radio,
} from "@mui/joy";
import { type State } from "./AddBudgetItemModal";

export default function BudgetItemModal({
  title,
  open,
  state,
  setOpen,
  onNameChange,
  onTypeChange,
  onAmountChange,
  onSubmit,
}: {
  title: string;
  open: boolean;
  state: State;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onNameChange: React.ChangeEventHandler<HTMLInputElement>;
  onTypeChange: React.ChangeEventHandler<HTMLInputElement>;
  onAmountChange: React.ChangeEventHandler<HTMLInputElement>;
  onSubmit: () => void;
}): JSX.Element {
  return (
    <>
      <Modal
        open={open}
        onClose={() => {
          if (setOpen != null) setOpen(false);
        }}
      >
        <ModalDialog>
          <ModalClose />
          <Typography level="h4">{title}</Typography>
          <AccordionGroup>
            <Accordion defaultExpanded>
              <AccordionSummary>
                <Typography level="title-sm">Name</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box sx={{ my: 2 }}>
                  <Input
                    autoFocus={true}
                    onChange={onNameChange}
                    value={state.name}
                    placeholder="Name"
                  />
                </Box>
              </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
              <AccordionSummary>
                <Typography level="title-sm">Type</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box sx={{ my: 2 }}>
                  <RadioGroup
                    name="type"
                    defaultValue={state.type}
                    onChange={onTypeChange}
                  >
                    <Radio label="Expense" value="expense" size="sm" />
                    <Radio label="Income" value="income" size="sm" />
                  </RadioGroup>
                </Box>
              </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
              <AccordionSummary>
                <Typography level="title-sm">Amount</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box sx={{ my: 2 }}>
                  <Input
                    value={state.amount}
                    onChange={onAmountChange}
                    placeholder="$ 0"
                  />
                </Box>
              </AccordionDetails>
            </Accordion>
          </AccordionGroup>
          <Divider sx={{ my: 2 }} />
          <Sheet sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Button
              color="primary"
              onClick={() => {
                onSubmit();
              }}
            >
              Submit
            </Button>
          </Sheet>
        </ModalDialog>
      </Modal>
    </>
  );
}
