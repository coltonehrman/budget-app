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
  const [isPayDay, setIsPayDay] = useState<boolean>(false);
  const [itemToEdit, setItemToEdit] = useState<Income | null>(null);

  useEffect(() => {
    const nextPayDays = income.reduce<Date[]>((days, i) => {
      const nextPayDay = getNextPayday(i);
      // if has a payday already
      if (
        i.payDays?.some((payDay) =>
          isSameDay(new Date(payDay.date), nextPayDay),
        )
      ) {
        // return without adding to nextPayDays
        return days;
      }
      return [...days, nextPayDay];
    }, []);

    const nextPayDayIsToday = nextPayDays.map((day) =>
      isSameDay(new Date(), day),
    );
    setIsPayDay(nextPayDayIsToday.includes(true));
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

      <PayDayModal
        title="Pay Day"
        open={isPayDay}
        close={() => {
          setIsPayDay(false);
        }}
        onSubmit={(amount) => {
          submitPayDay(income[0], amount);
        }}
      />

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
