import {
  Accordion,
  AccordionDetails,
  AccordionGroup,
  AccordionSummary,
  Divider,
} from "@mui/joy";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Typography from "@mui/joy/Typography";
import React, { useCallback, useState } from "react";
import AccountDashboardBreadcrumbs from "./AccountDashboardBreadcrumbs";
import AccountModal from "./AccountModal/AccountModal";
import {
  type Account,
  accountsLoader,
  deleteAccount,
  editAccount,
} from "./account";
import AccountTiles from "./AccountTiles";
import NetworthCard from "./NetworthCard";
import DebtCard from "./DebtCard";

export default function AccountDashboard(): JSX.Element {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [editItem, setEditItem] = useState<number | null>(null);

  const onEditItem = useCallback(
    (index: number, editedAccount: Account) => {
      const newAccounts = editAccount(accounts, index, editedAccount);
      setAccounts(newAccounts);
      accountsLoader.save(newAccounts);
    },
    [accounts, setAccounts],
  );

  const onDeleteAccount = useCallback(
    (index: number) => {
      const newAccounts = deleteAccount(accounts, index);
      setAccounts(newAccounts);
      accountsLoader.save(newAccounts);
    },
    [accounts, setAccounts],
  );

  return (
    <>
      <AccountDashboardBreadcrumbs />

      <Typography level="h3" component="h2">
        Accounts
      </Typography>

      {editItem != null && (
        <AccountModal
          title="Edit Account"
          open={editItem !== null}
          initialState={{
            ...accounts[editItem],
            balance:
              accounts[editItem].balances[
                accounts[editItem].balances.length - 1
              ].amount,
          }}
          setOpen={(open) => {
            if (open === false) setEditItem(null);
          }}
          onSubmit={(edits) => {
            onEditItem(editItem, {
              ...edits,
              balances: [
                ...accounts[editItem].balances,
                {
                  date: new Date(),
                  amount: edits.balance,
                },
              ],
            });
            setEditItem(null);
          }}
        />
      )}

      <AccountModal
        title="Add Account"
        open={isModalOpen}
        setOpen={setIsModalOpen}
        onSubmit={(asset) => {
          console.log(asset);

          const newAccounts: Account[] = [
            ...accounts,
            {
              ...asset,
              balances: [
                {
                  date: new Date(),
                  amount: asset.balance,
                },
              ],
            },
          ];

          setAccounts(newAccounts);
          setIsModalOpen(false);

          accountsLoader.save(newAccounts);
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
          <NetworthCard accounts={accounts} />
        </Box>

        <Box>
          <DebtCard accounts={accounts} />
        </Box>
      </Box>

      <Box sx={{ marginTop: 1 }}>
        <Button
          size="sm"
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          Add New Account
        </Button>
      </Box>

      <Divider sx={{ my: 1 }} />

      <Box sx={{ paddingBottom: 4 }}>
        <AccordionGroup>
          <Accordion defaultExpanded>
            <AccordionSummary>
              <Typography level="title-sm">Checking</Typography>
            </AccordionSummary>

            <AccordionDetails>
              <Box sx={{ my: 2 }}>
                <AccountTiles
                  accounts={accounts}
                  type="checking"
                  onDeleteAccount={onDeleteAccount}
                  setEditItem={setEditItem}
                />
              </Box>
            </AccordionDetails>
          </Accordion>

          <Accordion defaultExpanded>
            <AccordionSummary>
              <Typography level="title-sm">Savings</Typography>
            </AccordionSummary>

            <AccordionDetails>
              <Box sx={{ my: 2 }}>
                <AccountTiles
                  accounts={accounts}
                  type="savings"
                  onDeleteAccount={onDeleteAccount}
                  setEditItem={setEditItem}
                />
              </Box>
            </AccordionDetails>
          </Accordion>

          <Accordion defaultExpanded>
            <AccordionSummary>
              <Typography level="title-sm">Credit</Typography>
            </AccordionSummary>

            <AccordionDetails>
              <Box sx={{ my: 2 }}>
                <AccountTiles
                  accounts={accounts}
                  type="credit"
                  onDeleteAccount={onDeleteAccount}
                  setEditItem={setEditItem}
                />
              </Box>
            </AccordionDetails>
          </Accordion>

          <Accordion defaultExpanded>
            <AccordionSummary>
              <Typography level="title-sm">Investments</Typography>
            </AccordionSummary>

            <AccordionDetails>
              <Box sx={{ my: 2 }}>
                <AccountTiles
                  accounts={accounts}
                  type="investment"
                  onDeleteAccount={onDeleteAccount}
                  setEditItem={setEditItem}
                />
              </Box>
            </AccordionDetails>
          </Accordion>
        </AccordionGroup>
      </Box>
    </>
  );
}
