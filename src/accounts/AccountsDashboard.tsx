import {
  AccountBalance,
  CreditCard,
  DeleteForeverRounded,
  Edit,
  Savings,
  ShowChart,
} from "@mui/icons-material";
import { type ColorPaletteProp, Divider } from "@mui/joy";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import React, { useCallback, useEffect, useState } from "react";
import AccountDashboardBreadcrumbs from "./AccountDashboardBreadcrumbs";
import AccountModal from "./accounts-modal/AccountModal";
import {
  type Account,
  accountsLoader,
  deleteAccount,
  editAccount,
} from "./account";

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

      <Box
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fill, minmax(min(100%, 300px), 1fr))",
          gap: 2,
        }}
      >
        {accounts.map((account, i) => {
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
    </>
  );
}
