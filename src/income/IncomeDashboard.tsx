import { Divider } from "@mui/joy";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Typography from "@mui/joy/Typography";
import React, { useContext, useEffect, useState } from "react";
import { Store } from "../store";
import IncomeTiles from "./IncomeTiles";
import IncomeModal from "./IncomeModal/IncomeModal";
import { incomeLoader, type Income, getNextPayday } from "./income";
import PayDayModal from "./PayDayModal";
import { isSameDay } from "date-fns";

export default function IncomeDashboard(): JSX.Element {
  const { income, submitPayDay } = useContext(Store);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isPayDay, setIsPayDay] = useState<boolean>(false);
  const [, setEditItem] = useState<number | null>(null);

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
      console.log(i, nextPayDay);
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

      <IncomeModal
        title="Add Income"
        open={isModalOpen}
        setOpen={setIsModalOpen}
        onSubmit={(addedIncome) => {
          // const newIncome: Income[] = [...income, addedIncome];
          // incomeLoader.save(newIncome);
          setIsModalOpen(false);
        }}
      />

      <PayDayModal
        title="Pay Day"
        open={isPayDay}
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
          onDelete={() => {}}
          setEditItem={setEditItem}
        />
      </Box>
    </>
  );
}
