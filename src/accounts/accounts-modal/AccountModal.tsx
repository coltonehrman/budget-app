import React, { useState } from "react";
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
} from "@mui/joy";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import { type Account } from "../account";

const DEFAULT_STATE: Account = {
  name: "",
  type: "checking",
  balance: 0,
  link: "",
};

export default function AccountModal({
  title,
  open,
  setOpen,
  onSubmit,
  initialState,
}: {
  title: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmit: (asset: Account) => void;
  initialState?: Account;
}): JSX.Element {
  const [state, setState] = useState<Account>(initialState ?? DEFAULT_STATE);

  return (
    <>
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
            <Accordion defaultExpanded>
              <AccordionSummary>
                <Typography level="title-sm">Name</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box sx={{ my: 2 }}>
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
                </Box>
              </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
              <AccordionSummary>
                <Typography level="title-sm">Type</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box sx={{ my: 2 }}>
                  <Select
                    defaultValue={state.type ?? "checking"}
                    onChange={(_e, value) => {
                      setState({
                        ...state,
                        type: value ?? "checking",
                      });
                    }}
                  >
                    <Option value="checking">Checking</Option>
                    <Option value="savings">Savings</Option>
                    <Option value="credit">Credit</Option>
                    <Option value="investment">Investment</Option>
                  </Select>
                </Box>
              </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
              <AccordionSummary>
                <Typography level="title-sm">Balance</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box sx={{ my: 2 }}>
                  <Input
                    value={state.balance}
                    onChange={(e) => {
                      const newValue = e.target.value;

                      setState({
                        ...state,
                        balance: Number.isNaN(Number(newValue)) ? 0 : newValue,
                      });
                    }}
                    placeholder="$ 0"
                  />
                </Box>
              </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
              <AccordionSummary>
                <Typography level="title-sm">URL Link</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box sx={{ my: 2 }}>
                  <Input
                    value={state.link}
                    onChange={(e) => {
                      setState({
                        ...state,
                        link: e.target.value,
                      });
                    }}
                    placeholder="https://example.com"
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
                onSubmit({
                  ...state,
                  balance: parseFloat(state.balance),
                });
                setState(DEFAULT_STATE);
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
