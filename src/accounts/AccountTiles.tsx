import {
  AccountBalance,
  CreditCard,
  DeleteForeverRounded,
  Edit,
  Savings,
  ShowChart,
} from "@mui/icons-material";
import { type ColorPaletteProp } from "@mui/joy";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import React from "react";
import { type Account } from "./account";

export default function AccountTiles({
  accounts,
  type,
  setEditItem,
  onDeleteAccount,
}: {
  accounts: Account[];
  type: Account["type"];
  setEditItem: (value: React.SetStateAction<number | null>) => void;
  onDeleteAccount: (index: number) => void;
}): JSX.Element {
  return (
    <Box
      sx={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))",
        gap: 2,
      }}
    >
      {accounts.map((account, i) => {
        if (account.type !== type) return null;
        let color: ColorPaletteProp = "neutral";
        if (account.type === "credit") color = "warning";
        if (account.type === "investment") color = "primary";

        return (
          <Box key={i}>
            <Card variant="soft" color={color} invertedColors>
              <CardContent>
                <Box display="flex" justifyContent="space-between">
                  {account.type === "checking" && <AccountBalance />}
                  {account.type === "credit" && <CreditCard />}
                  {account.type === "savings" && <Savings />}
                  {account.type === "investment" && <ShowChart />}

                  <Box>
                    <IconButton
                      sx={{
                        marginRight: 1,
                      }}
                      variant="soft"
                      color="danger"
                      size="sm"
                      onClick={() => {
                        setEditItem(i);
                      }}
                    >
                      <Edit />
                    </IconButton>

                    <IconButton
                      variant="soft"
                      color="danger"
                      size="sm"
                      onClick={() => {
                        onDeleteAccount(i);
                      }}
                    >
                      <DeleteForeverRounded />
                    </IconButton>
                  </Box>
                </Box>

                <Typography level="body-md">{account.name}</Typography>
                <Typography level="h2">
                  $ {new Intl.NumberFormat().format(account.balance)}
                </Typography>
                {Boolean(account.link) && (
                  <Typography level="h4">
                    <a href={account.link} target="_blank" rel="noreferrer">
                      Link
                    </a>
                  </Typography>
                )}
              </CardContent>
            </Card>
          </Box>
        );
      })}
    </Box>
  );
}
