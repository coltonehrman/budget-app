import { AccountBalance } from "@mui/icons-material";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import React from "react";
import { type Account } from "./account";

export default function NetworthCard({
  accounts,
}: {
  accounts: Account[];
}): JSX.Element {
  return (
    <Card variant="soft" color="success" invertedColors>
      <CardContent>
        <Box>
          <AccountBalance />
        </Box>

        <Typography level="body-md">Networth</Typography>
        <Typography level="h2">
          ${" "}
          {new Intl.NumberFormat().format(
            accounts.reduce((net, acc) => {
              if (acc.type === "credit") return net - acc.balance;
              return net + acc.balance;
            }, 0),
          )}
        </Typography>
      </CardContent>
    </Card>
  );
}
