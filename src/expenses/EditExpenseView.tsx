import React, { useContext, useState } from "react";
import { Store } from "../store";
import FormModal from "../common/FormModal";
import { Expense } from "./expenses";
import {
  Accordion,
  AccordionDetails,
  AccordionGroup,
  AccordionSummary,
  Box,
  Button,
  Container,
  Divider,
  Input,
  Modal,
  ModalClose,
  ModalDialog,
  Sheet,
  Table,
  Typography,
} from "@mui/joy";
import { formatDate } from "../common/date";

type ExpenseInput = Partial<{
  [P in keyof Expense]: Expense[P] extends string ? Expense[P] : string;
}>;

export default function EditExpenseForm({
  itemToEdit,
  isOpen,
  onClose,
  onSubmit,
}: {
  itemToEdit: Expense;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (itemToAdd: Expense) => void;
}): JSX.Element {
  const { expenses, addExpense } = useContext(Store);
  const [formInput, setFormInput] = useState<ExpenseInput>( // @ts-ignore
    itemToEdit as ExpenseInput,
  );

  return (
    <>
      <Modal open={isOpen} onClose={onClose}>
        <ModalDialog layout="fullscreen" sx={{ overflow: "scroll" }}>
          <Container sx={{ paddingTop: 4 }}>
            <ModalClose />
            <Box>
              <Typography level="h4">{formInput.name}</Typography>
              <AccordionGroup>
                <Accordion defaultExpanded>
                  <AccordionSummary>
                    <Typography level="title-sm">Expense Details</Typography>
                  </AccordionSummary>

                  <AccordionDetails>
                    <Box sx={{ my: 2 }}>
                      <Input
                        onChange={() => {}}
                        value={formInput.name}
                        placeholder={formInput.name}
                      />
                    </Box>
                  </AccordionDetails>
                </Accordion>
              </AccordionGroup>

              <Box>
                <Table
                  sx={{ "& tr > *:not(:first-child)": { textAlign: "right" } }}
                >
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {itemToEdit.payments.map((p, i) => (
                      <tr key={`payment-${i}`}>
                        <td>{formatDate(p.date)}</td>
                        <td>{p.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Box>

              <Divider sx={{ my: 2 }} />

              <Box>
                <Button
                  color="primary"
                  onClick={() => {
                    // onSubmit();
                  }}
                >
                  Submit
                </Button>
              </Box>
            </Box>
          </Container>
        </ModalDialog>
      </Modal>
    </>
  );
}
