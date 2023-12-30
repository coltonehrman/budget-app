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
import React, { useContext, useState } from "react";
import AccountDashboardBreadcrumbs from "./AccountDashboardBreadcrumbs";
import AccountModal from "./AccountModal/AccountModal";
import { type Account } from "./account";
import AccountTiles from "./AccountTiles";
import NetworthCard from "./NetworthCard";
import DebtCard from "./DebtCard";
import { Store } from "../store";

export default function AccountDashboard(): JSX.Element {
  const { accounts, addAccount, editAccount, deleteAccount } =
    useContext(Store);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [editItem, setEditItem] = useState<Account | null>(null);

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
          initialState={editItem}
          setOpen={(open) => {
            if (open === false) setEditItem(null);
          }}
          onSubmit={(edits) => {
            const modifiedAccount = {
              ...editItem,
              ...edits,
              balances: editItem.balances.concat({
                amount: edits.balance,
                date: new Date(),
              }),
            } as Account;

            editAccount(modifiedAccount);
            setEditItem(null);
          }}
        />
      )}

      <AccountModal
        title="Add Account"
        open={isModalOpen}
        setOpen={setIsModalOpen}
        onSubmit={(account) => {
          addAccount(account);
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
                  onDeleteAccount={deleteAccount}
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
                  onDeleteAccount={deleteAccount}
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
                  onDeleteAccount={deleteAccount}
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
                  onDeleteAccount={deleteAccount}
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
