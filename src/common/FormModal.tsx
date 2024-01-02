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
} from "@mui/joy";
// import Select from "@mui/joy/Select";
// import Option from "@mui/joy/Option";

interface IInput {
  title: string;
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
}

export default function FormModal({
  title,
  open,
  setOpen,
  onClose,
  onSubmit,
  inputs,
}: {
  title: string;
  open: boolean;
  onClose?: () => void;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmit: () => void;
  inputs: IInput[];
}): JSX.Element {
  return (
    <>
      <Modal
        open={open}
        onClose={() => {
          onClose && onClose();
          if (setOpen != null) setOpen(false);
        }}
      >
        <ModalDialog minWidth={550} sx={{ overflow: "scroll" }}>
          <ModalClose />
          <Typography level="h4">{title}</Typography>
          <AccordionGroup>
            {inputs.map((input, i) => (
              <Accordion key={i} defaultExpanded>
                <AccordionSummary>
                  <Typography level="title-sm">{input.title}</Typography>
                </AccordionSummary>

                <AccordionDetails>
                  <Box sx={{ my: 2 }}>
                    <Input
                      autoFocus={i === 0}
                      onChange={input.onChange}
                      value={input.value}
                      placeholder={input.placeholder}
                    />
                  </Box>
                </AccordionDetails>
              </Accordion>
            ))}
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
