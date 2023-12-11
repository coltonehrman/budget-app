import React, { useState } from "react";
import Button from "@mui/joy/Button";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import AccordionGroup from "@mui/joy/AccordionGroup";
import Accordion from "@mui/joy/Accordion";
import AccordionSummary from "@mui/joy/AccordionSummary";
import AccordionDetails from "@mui/joy/AccordionDetails";
import RadioGroup from "@mui/joy/RadioGroup";
import Radio from "@mui/joy/Radio";
import { Input } from "@mui/joy";

export interface State {
  name: string;
  type: "expense" | "income";
  amount: number;
}

export default function AddBudegtSidePane({
  addNewItem,
}: {
  addNewItem: (item: State) => void;
}): JSX.Element {
  const [{ name, type, amount }, setState] = useState<State>({
    name: "",
    type: "expense",
    amount: 1000,
  });

  return (
    <Box
      sx={{
        flex: 2,
        bgcolor: "background.surface",
        borderRight: "1px solid",
        borderColor: "divider",
        display: {
          xs: "none",
          md: "initial",
        },
      }}
    >
      <Box
        sx={{
          p: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography level="title-lg" textColor="text.secondary">
          Item
        </Typography>
        <Button
          startDecorator={<PersonRoundedIcon />}
          size="sm"
          onClick={() => {
            addNewItem({
              name,
              type,
              amount,
            });
          }}
        >
          Add new
        </Button>
      </Box>
      <AccordionGroup>
        <Accordion defaultExpanded>
          <AccordionSummary>
            <Typography level="title-sm">Name</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box sx={{ my: 2 }}>
              <Input
                onChange={(event) => {
                  setState({
                    name: event.target.value,
                    type,
                    amount,
                  });
                }}
                value={name}
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
                defaultValue={type}
                onChange={(event) => {
                  const newType = event.target.value;
                  if (newType !== "expense" && newType !== "income") return;

                  setState({
                    name,
                    type: newType,
                    amount,
                  });
                }}
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
                value={amount}
                onChange={(event) => {
                  const newNum = Number(event.target.value);
                  setState({
                    name,
                    type,
                    amount: Number.isNaN(newNum) ? 0 : newNum,
                  });
                }}
                placeholder="$ 0"
              />
            </Box>
          </AccordionDetails>
        </Accordion>
      </AccordionGroup>
    </Box>
  );
}
