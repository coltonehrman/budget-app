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
import { type NewAccount, type Account } from "../account";
import AccountAccordion from "./AccountAccordion";

type InputState = Record<keyof NewAccount, string | null>;

const DEFAULT_STATE: NewAccount = {
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
  onSubmit: (account: NewAccount) => void;
  initialState?: Account;
}): JSX.Element {
  const [inputState, setInputState] = useState<InputState>(
    (initialState ?? DEFAULT_STATE) as unknown as InputState,
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
          <AccountAccordion title="Name">
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
          </AccountAccordion>

          <AccountAccordion title="Type">
            <Select
              defaultValue={inputState.type}
              onChange={(_e, value) => {
                setInputState({
                  ...inputState,
                  type: value,
                });
              }}
            >
              <Option value="checking">Checking</Option>
              <Option value="savings">Savings</Option>
              <Option value="credit">Credit</Option>
              <Option value="investment">Investment</Option>
            </Select>
          </AccountAccordion>

          <AccountAccordion title="Balance">
            <Input
              onChange={(e) => {
                let newValue = e.target.value;
                if (Number.isNaN(Number(newValue))) return;
                if (newValue.length > 1 && newValue.charAt(0) === "0")
                  newValue = newValue.slice(1);

                setInputState({
                  ...inputState,
                  balance: newValue,
                });
              }}
              value={inputState.balance ?? ""}
              placeholder="$ 0"
            />
          </AccountAccordion>

          <AccountAccordion title="URL Link">
            <Input
              onChange={(e) => {
                setInputState({
                  ...inputState,
                  link: e.target.value,
                });
              }}
              value={inputState.link ?? ""}
              placeholder="https://example.com"
            />
          </AccountAccordion>
        </AccordionGroup>

        <Divider sx={{ my: 2 }} />

        <Sheet sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Button
            color="primary"
            onClick={() => {
              onSubmit({
                name: inputState.name ?? "",
                type: inputState.type as Account["type"],
                balance: Number(
                  parseFloat(inputState.balance ?? "").toFixed(2),
                ),
                link: inputState.link,
              });
              setInputState(DEFAULT_STATE as unknown as InputState);
            }}
          >
            Submit
          </Button>
        </Sheet>
      </ModalDialog>
    </Modal>
  );
}
