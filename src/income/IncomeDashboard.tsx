import { Divider } from "@mui/joy";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Typography from "@mui/joy/Typography";
import React, { useCallback, useContext, useState } from "react";
import { Store } from "../store";
import IncomeTiles from "./IncomeTiles";
import IncomeModal from "./IncomeModal/IncomeModal";
import { deleteIncome, incomeLoader, type Income } from "./income";

export default function IncomeDashboard(): JSX.Element {
  const { income } = useContext(Store);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [, setEditItem] = useState<number | null>(null);

  const onDeleteAccount = useCallback(
    (index: number) => {
      const newIncome = deleteIncome(income, index);
      // incomeLoader.save(newIncome);
    },
    [income],
  );

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
          const newIncome: Income[] = [...income, addedIncome];

          incomeLoader.save(newIncome);
          setIsModalOpen(false);
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
          onDelete={onDeleteAccount}
          setEditItem={setEditItem}
        />
      </Box>
    </>
  );
}
