import { AccountBalance } from "@mui/icons-material";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import React from "react";
import { type Account } from "./account";

export default function DebtCard({
  accounts,
}: {
  accounts: Account[];
}): JSX.Element {
  return (
    <Card variant="soft" color="danger" invertedColors>
      <CardContent>
        <Box>
          <AccountBalance />
        </Box>

        <Typography level="body-md">Debt</Typography>
        <Typography level="h2">
          ${" "}
          {new Intl.NumberFormat().format(
            -accounts.reduce((net, acc) => {
              if (acc.type === "credit")
                return net + acc.balances[acc.balances.length - 1].amount;
              return net;
            }, 0),
          )}
        </Typography>
      </CardContent>
    </Card>
  );
}
