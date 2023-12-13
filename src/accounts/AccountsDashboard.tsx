import {
  AccountBalance,
  CreditCard,
  DeleteForeverRounded,
} from "@mui/icons-material";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import Box from "@mui/joy/Box";
import Breadcrumbs from "@mui/joy/Breadcrumbs";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import IconButton from "@mui/joy/IconButton";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import React, { useCallback, useEffect, useState } from "react";
import AccountModal from "./accounts-modal/AccountModal";

export interface Account {
  name: string;
  type: string;
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
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Breadcrumbs
          size="sm"
          aria-label="breadcrumbs"
          separator={<ChevronRightRoundedIcon fontSize="small" />}
          sx={{ pl: 0 }}
        >
          <Link underline="none" color="neutral" aria-label="Home">
            <HomeRoundedIcon />
          </Link>
          <Link
            underline="hover"
            color="neutral"
            fontSize={12}
            fontWeight={500}
          >
            Dashboard
          </Link>
          <Typography color="primary" fontWeight={500} fontSize={12}>
            Accounts
          </Typography>
        </Breadcrumbs>
      </Box>
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
        {accounts.map((account, i) => (
          <Box key={i}>
            <Card variant="soft" color="primary" invertedColors>
              <CardContent>
                <Box display="flex" justifyContent="space-between">
                  {account.type === "checking" && <AccountBalance />}
                  {account.type === "credit" && <CreditCard />}
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
                <Typography level="h2">$ {account.balance}</Typography>
                <Typography level="h4">{account.link}</Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </>
  );
}
