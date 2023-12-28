import React, { useState } from "react";
import Button from "@mui/joy/Button";
import Typography from "@mui/joy/Typography";
import {
  Modal,
  Divider,
  ModalDialog,
  Sheet,
  Input,
  ModalClose,
} from "@mui/joy";

export default function PayDayModal({
  title,
  open,
  close,
  onSubmit,
}: {
  title: string;
  open: boolean;
  close: () => void;
  onSubmit: (amount: number) => void;
}): JSX.Element {
  const [amount, setAmount] = useState<string>("");

  return (
    <Modal open={open} onClose={close}>
      <ModalDialog minWidth={550} sx={{ overflow: "scroll" }}>
        <ModalClose />
        <Typography level="h4">{title}</Typography>

        <Typography>Amount Paid</Typography>
        <Input
          autoFocus={true}
          onChange={(e) => {
            setAmount(e.target.value);
          }}
          value={amount}
          placeholder="$ 0.00"
        />

        <Divider sx={{ my: 2 }} />

        <Sheet sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Button
            color="primary"
            onClick={() => {
              const amountN = parseFloat(amount ?? "NaN");

              if (Number.isNaN(amountN)) {
                setAmount("");
                return;
              }

              onSubmit(amountN);
            }}
          >
            Submit
          </Button>
        </Sheet>
      </ModalDialog>
    </Modal>
  );
}
