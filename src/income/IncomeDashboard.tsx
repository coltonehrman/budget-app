import { Divider } from "@mui/joy";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Typography from "@mui/joy/Typography";
import { isSameDay } from "date-fns";
import React, { useContext, useEffect, useState } from "react";
import { Store } from "../store";
import IncomeModal from "./IncomeModal/IncomeModal";
import IncomeTiles from "./IncomeTiles";
import PayDayModal from "./PayDayModal";
import { getNextPayday, type Income } from "./income";

export default function IncomeDashboard(): JSX.Element {
  const { income, editIncome, addIncome, deleteIncome, submitPayDay } =
    useContext(Store);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [payDayFor, setPayDayFor] = useState<Income | null>(null);
  const [itemToEdit, setItemToEdit] = useState<Income | null>(null);

  useEffect(() => {
    const incomeWithUpComingPayDays = income.filter((income) => {
      const nextPayDay = getNextPayday(income);

      if (
        income.payDays?.some((payDay) =>
          isSameDay(new Date(payDay.date), nextPayDay),
        )
      ) {
        // remove income if the payday for the nextPayDay already exists
        return false;
      }

      // keep income if the nextPayDay falls on today
      return isSameDay(new Date(), nextPayDay);
    });

    setPayDayFor(incomeWithUpComingPayDays[0] ?? null);
  }, [income]);

  return (
    <>
      <Typography level="h3" component="h2">
        Income
      </Typography>

      {itemToEdit != null && (
        <IncomeModal
          open
          title="Edit Income"
          setOpen={(isOpen) => {
            isOpen === false && setItemToEdit(null); // closes modal
          }}
          initialState={itemToEdit}
          onSubmit={(editedIncome) => {
            editIncome({
              ...itemToEdit,
              ...editedIncome,
            });
            setItemToEdit(null); // closes modal
          }}
        />
      )}

      <IncomeModal
        title="Add Income"
        open={isModalOpen}
        setOpen={setIsModalOpen}
        onSubmit={(addedIncome) => {
          addIncome(addedIncome);
          setIsModalOpen(false);
        }}
      />

      {payDayFor !== null && (
        <PayDayModal
          title={`${payDayFor.name} - Pay Day!`}
          open={true}
          close={() => {
            setPayDayFor(null); // closes payday modal
          }}
          onSubmit={(amount) => {
            submitPayDay(payDayFor, amount);
            setPayDayFor(null);
          }}
        />
      )}

      <Box sx={{ marginTop: 1 }}>
        <Button
          size="sm"
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          Add New Income
        </Button>
      </Box>

      <Divider sx={{ my: 1 }} />

      <Box sx={{ my: 2 }}>
        <IncomeTiles
          income={income}
          onDelete={deleteIncome}
          setEditItem={setItemToEdit}
        />
      </Box>
    </>
  );
}
