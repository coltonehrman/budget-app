import { AccountBalance } from "@mui/icons-material";
import { Divider } from "@mui/joy";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import React, { useCallback, useEffect, useState } from "react";
import AccountDashboardBreadcrumbs from "./AccountDashboardBreadcrumbs";
import AccountModal from "./AccountModal";
import {
  type Account,
  accountsLoader,
  deleteAccount,
  editAccount,
} from "./account";
import AccountTiles from "./AccountTiles";

export default function AccountDashboard(): JSX.Element {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [editItem, setEditItem] = useState<number | null>(null);

  useEffect(() => {
    setAccounts(accountsLoader.load(accounts));
  }, []);

  useEffect(() => {
    accountsLoader.save(accounts);
  }, [accounts]);

  const onEditItem = useCallback(
    (index: number, editedAccount: Account) => {
      setAccounts(editAccount(accounts, index, editedAccount));
    },
    [accounts, setAccounts],
  );

  const onDeleteAccount = useCallback(
    (index: number) => {
      setAccounts(deleteAccount(accounts, index));
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

      {editItem != null && (
        <AccountModal
          title="Edit Account"
          open={editItem !== null}
          initialState={accounts[editItem]}
          setOpen={(open) => {
            if (open === false) setEditItem(null);
          }}
          onSubmit={(edits) => {
            onEditItem(editItem, edits);
            setEditItem(null);
          }}
        />
      )}

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

      <Box sx={{ paddingBottom: 4 }}>
        <Typography
          level="h3"
          component="h2"
          sx={{ marginTop: 2, marginBottom: 2 }}
        >
          Checking
        </Typography>

        <Box>
          <AccountTiles
            accounts={accounts}
            type="checking"
            onDeleteAccount={onDeleteAccount}
            setEditItem={setEditItem}
          />
        </Box>

        <Typography
          level="h3"
          component="h2"
          sx={{ marginTop: 4, marginBottom: 2 }}
        >
          Savings
        </Typography>

        <Box>
          <AccountTiles
            accounts={accounts}
            type="savings"
            onDeleteAccount={onDeleteAccount}
            setEditItem={setEditItem}
          />
        </Box>

        <Typography
          level="h3"
          component="h2"
          sx={{ marginTop: 4, marginBottom: 2 }}
        >
          Credit
        </Typography>

        <Box>
          <AccountTiles
            accounts={accounts}
            type="credit"
            onDeleteAccount={onDeleteAccount}
            setEditItem={setEditItem}
          />
        </Box>

        <Typography
          level="h3"
          component="h2"
          sx={{ marginTop: 4, marginBottom: 2 }}
        >
          Investments
        </Typography>

        <Box>
          <AccountTiles
            accounts={accounts}
            type="investment"
            onDeleteAccount={onDeleteAccount}
            setEditItem={setEditItem}
          />
        </Box>
      </Box>
    </>
  );
}
