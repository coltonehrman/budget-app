import {
  AccountBalance,
  CreditCard,
  DeleteForeverRounded,
  Savings,
  ShowChart,
} from "@mui/icons-material";
import { Divider } from "@mui/joy";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import React, { useCallback, useEffect, useState } from "react";
import AccountDashboardBreadcrumbs from "./AccountDashboardBreadcrumbs";
import AccountModal from "./accounts-modal/AccountModal";

export interface Account {
  name: string;
  type: "checking" | "credit" | "savings" | "investment";
  balance: number;
  link: string;
}

export default function AccountDashboard(): JSX.Element {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    if (accounts.length === 0) {
      const storedItems = localStorage.getItem("accounts");

      if (storedItems !== null) {
        const parsedStoredItems = JSON.parse(storedItems) as Account[];
        setAccounts(parsedStoredItems);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("accounts", JSON.stringify(accounts));
  }, [accounts]);

  const onDeleteAccount = useCallback(
    (index: number) => {
      accounts.splice(index, 1);
      setAccounts([...accounts]);
    },
    [accounts, setAccounts],
  );

  return (
    <>
      <AccountDashboardBreadcrumbs />

      <Typography level="h2" component="h1">
        Accounts
      </Typography>

      <Box>
        <Button
          size="sm"
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          Add new
        </Button>
      </Box>

      <AccountModal
        title="Add Account"
        open={isModalOpen}
        setOpen={setIsModalOpen}
        onSubmit={(asset) => {
          setAccounts([...accounts, asset]);
          setIsModalOpen(false);
        }}
      />

      <Box
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fill, minmax(min(100%, 300px), 1fr))",
          gap: 2,
        }}
      >
        <Box>
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
        </Box>

        <Box>
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
                    if (acc.type === "credit") return net + acc.balance;
                    return net;
                  }, 0),
                )}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>

      <Divider sx={{ my: 1 }} />

      <Box
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fill, minmax(min(100%, 300px), 1fr))",
          gap: 2,
        }}
      >
        {accounts.map((account, i) => (
          <Box key={i}>
            <Card variant="soft" color="primary" invertedColors>
              <CardContent>
                <Box display="flex" justifyContent="space-between">
                  {account.type === "checking" && <AccountBalance />}
                  {account.type === "credit" && <CreditCard />}
                  {account.type === "savings" && <Savings />}
                  {account.type === "investment" && <ShowChart />}

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
        ))}
      </Box>
    </>
  );
}
