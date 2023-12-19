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
import { type Asset } from "../asset";

const DEFAULT_STATE: Asset = {
  name: "",
  type: "",
  value: 10000,
  debt: 0,
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
  onSubmit: (asset: Asset) => void;
  initialState?: Asset;
}): JSX.Element {
  const [state, setState] = useState<Asset>(initialState ?? DEFAULT_STATE);

  return (
    <>
      <Modal
        open={open}
        onClose={() => {
          if (setOpen != null) setOpen(false);
        }}
      >
        <ModalDialog minWidth={550}>
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
                <Typography level="title-sm">Occurance</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box sx={{ my: 2 }}>
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
                </Box>
              </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
              <AccordionSummary>
                <Typography level="title-sm">Value</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box sx={{ my: 2 }}>
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
                </Box>
              </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
              <AccordionSummary>
                <Typography level="title-sm">Debt</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box sx={{ my: 2 }}>
                  <Input
                    value={state.debt}
                    onChange={(e) => {
                      const newValue = Number(e.target.value);

                      setState({
                        ...state,
                        debt: Number.isNaN(newValue) ? 0 : newValue,
                      });
                    }}
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
                onSubmit(state);
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
