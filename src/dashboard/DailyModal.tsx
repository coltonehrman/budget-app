import React, { useState } from "react";
import Button from "@mui/joy/Button";
import Typography from "@mui/joy/Typography";
import AccordionGroup from "@mui/joy/AccordionGroup";
import Accordion from "@mui/joy/Accordion";
import AccordionSummary from "@mui/joy/AccordionSummary";
import AccordionDetails from "@mui/joy/AccordionDetails";
import {
  Modal,
  Divider,
  ModalDialog,
  Sheet,
  Input,
  Chip,
  FormHelperText,
  FormControl,
} from "@mui/joy";

export default function DailyModal({
  open,
  close,
  onSubmit,
  dailyAllowedSpending,
}: {
  open: boolean;
  close: () => void;
  onSubmit: (amount: number) => void;
  dailyAllowedSpending: string;
}): JSX.Element {
  const [state, setState] = useState({ amount: "" });

  return (
    <>
      <Modal open={open} onClose={close}>
        <ModalDialog
          minWidth={550}
          sx={{ overflow: "scroll", overflowX: "hidden" }}
        >
          <Typography level="h4">How much did you spend today?</Typography>

          <AccordionGroup>
            <Accordion defaultExpanded>
              <AccordionSummary>
                <Typography level="title-sm">Amount Spent</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <FormControl>
                  <Input
                    autoFocus={true}
                    onChange={(e) => {
                      setState({
                        ...state,
                        amount: e.target.value,
                      });
                    }}
                    value={state.amount}
                    placeholder="$ 0.00"
                  />
                  <FormHelperText>
                    Daily Allowed Spending{" "}
                    <Chip sx={{ marginLeft: 1 }}>{dailyAllowedSpending}</Chip>
                  </FormHelperText>
                </FormControl>
              </AccordionDetails>
            </Accordion>
          </AccordionGroup>

          <Divider sx={{ my: 2 }} />

          <Sheet sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Button
              color="primary"
              onClick={() => {
                onSubmit(parseFloat(state.amount));
                setState({ amount: "" });
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
