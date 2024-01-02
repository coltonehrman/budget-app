import {
  Accordion,
  AccordionDetails,
  AccordionGroup,
  AccordionSummary,
  Divider,
} from "@mui/joy";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Typography from "@mui/joy/Typography";
import React, { useContext, useState } from "react";
import { Store } from "../store";
import ExpenseTiles from "./ExpenseTiles";
import AddExpenseForm from "./AddExpenseForm";
import EditExpenseForm from "./EditExpenseView";

export default function ExpensesDashboard(): JSX.Element {
  const { expenses, addExpense, editExpense, deleteExpense } =
    useContext(Store);
  const [state, setState] = useState({
    isAddingNewExpense: false,
  });

  const closeAddExpenseForm = () =>
    setState((prev) => ({
      ...prev,
      isAddingNewExpense: false,
    }));

  return (
    <>
      <Typography level="h3" component="h2">
        Expenses
      </Typography>

      <AddExpenseForm
        isOpen={state.isAddingNewExpense}
        onClose={closeAddExpenseForm}
        onSubmit={(itemToAdd) => {
          addExpense(itemToAdd);
          closeAddExpenseForm();
        }}
      />

      <Box sx={{ marginTop: 1 }}>
        <Button
          size="sm"
          onClick={() => {
            setState((prev) => ({
              ...prev,
              isAddingNewExpense: true,
            }));
          }}
        >
          Add New Expense
        </Button>
      </Box>

      <Divider sx={{ my: 1 }} />

      <Box sx={{ paddingBottom: 4 }}>
        <AccordionGroup>
          <Accordion defaultExpanded>
            <AccordionSummary>
              <Typography level="title-sm">Utilties</Typography>
            </AccordionSummary>

            <AccordionDetails>
              <Box sx={{ my: 2 }}>
                <ExpenseTiles
                  items={expenses}
                  type="utility"
                  setEditItem={() => {}}
                />
              </Box>
            </AccordionDetails>
          </Accordion>
        </AccordionGroup>
      </Box>
    </>
  );
}
