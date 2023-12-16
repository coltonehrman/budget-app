import { AttachMoneyOutlined, Home, MoneyOutlined } from "@mui/icons-material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import WalletIcon from "@mui/icons-material/Wallet";
import Box from "@mui/joy/Box";
import Chip from "@mui/joy/Chip";
import Divider from "@mui/joy/Divider";
import GlobalStyles from "@mui/joy/GlobalStyles";
import IconButton from "@mui/joy/IconButton";
import Input from "@mui/joy/Input";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemButton, { listItemButtonClasses } from "@mui/joy/ListItemButton";
import ListItemContent from "@mui/joy/ListItemContent";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import React, { useEffect, useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { type Asset } from "./assets/AssetDashboard";
import { accountsLoader, type Account } from "./accounts/account";
import { budgetLoader, type Budget } from "./budget/budget";
import { loansLoader, type Loan } from "./loans/loan";

export default function Sidebar(): JSX.Element {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [assets, setAssets] = useState<Asset[]>([]);
  const [budget, setBudget] = useState<Budget[]>([]);
  const [loans, setLoans] = useState<Loan[]>([]);

  useEffect(() => {
    const storedAssets = localStorage.getItem("assets");

    if (storedAssets !== null) {
      const parsed = JSON.parse(storedAssets) as Asset[];
      setAssets(parsed);
    }

    setAccounts(accountsLoader.load([]));
    setBudget(budgetLoader.load([]));
    setLoans(loansLoader.load([]));
  }, []);

  const { pathname } = useLocation();

  return (
    <Sheet
      className="Sidebar"
      sx={{
        position: { xs: "fixed", md: "sticky" },
        transform: {
          xs: "translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1)))",
          md: "none",
        },
        transition: "transform 0.4s, width 0.4s",
        zIndex: 10000,
        height: "100dvh",
        width: "var(--Sidebar-width)",
        top: 0,
        p: 2,
        flex: 1,
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        borderRight: "1px solid",
        borderColor: "divider",
      }}
    >
      <GlobalStyles
        styles={(theme) => ({
          ":root": {
            "--Sidebar-width": "220px",
            [theme.breakpoints.up("lg")]: {
              "--Sidebar-width": "240px",
            },
          },
        })}
      />
      <Box
        className="Sidebar-overlay"
        sx={{
          position: "fixed",
          zIndex: 9998,
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          opacity: "var(--SideNavigation-slideIn)",
          backgroundColor: "var(--joy-palette-background-backdrop)",
          transition: "opacity 0.4s",
          transform: {
            xs: "translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--Sidebar-width, 0px)))",
            lg: "translateX(-100%)",
          },
        }}
      />
      <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
        <IconButton variant="soft" color="primary" size="sm">
          <MoneyOutlined />
        </IconButton>
        <Typography level="title-lg">Budgeter</Typography>
      </Box>
      <Input
        size="sm"
        startDecorator={<SearchRoundedIcon />}
        placeholder="Search"
      />
      <Box
        sx={{
          minHeight: 0,
          overflow: "hidden auto",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          [`& .${listItemButtonClasses.root}`]: {
            gap: 1.5,
          },
        }}
      >
        <List
          size="sm"
          sx={{
            gap: 1,
            "--List-nestedInsetStart": "30px",
            "--ListItem-radius": (theme) => theme.vars.radius.sm,
          }}
        >
          <ListItem>
            <ListItemButton selected={pathname === "/"}>
              <Home />
              <ListItemContent>
                <RouterLink to="/" style={{ textDecoration: "none" }}>
                  <Box display="flex" gap={1}>
                    <Typography level="title-sm">Dashboard</Typography>
                  </Box>
                </RouterLink>
              </ListItemContent>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton selected={pathname === "/accounts"}>
              <WalletIcon />
              <ListItemContent>
                <RouterLink to="/accounts" style={{ textDecoration: "none" }}>
                  <Box display="flex" gap={1}>
                    <Typography level="title-sm">Accounts</Typography>
                    <Chip size="sm">{accounts.length}</Chip>
                  </Box>
                </RouterLink>
              </ListItemContent>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton selected={pathname === "/loans"}>
              <WalletIcon />
              <ListItemContent>
                <RouterLink to="/loans" style={{ textDecoration: "none" }}>
                  <Box display="flex" gap={1}>
                    <Typography level="title-sm">Loans</Typography>
                    <Chip size="sm">{loans.length}</Chip>
                  </Box>
                </RouterLink>
              </ListItemContent>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton selected={pathname === "/assets"}>
              <AccountBalanceIcon />
              <ListItemContent>
                <RouterLink to="/assets" style={{ textDecoration: "none" }}>
                  <Box display="flex" gap={1}>
                    <Typography level="title-sm">Assets</Typography>
                    <Chip size="sm">{assets.length}</Chip>
                  </Box>
                </RouterLink>
              </ListItemContent>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton selected={pathname === "/budget"}>
              <AttachMoneyOutlined />
              <ListItemContent>
                <RouterLink to="/budget" style={{ textDecoration: "none" }}>
                  <Box display="flex" gap={1}>
                    <Typography level="title-sm">Budget</Typography>
                    <Chip size="sm">{budget.length}</Chip>
                  </Box>
                </RouterLink>
              </ListItemContent>
            </ListItemButton>
          </ListItem>
        </List>

        <List
          size="sm"
          sx={{
            mt: "auto",
            flexGrow: 0,
            "--ListItem-radius": (theme) => theme.vars.radius.sm,
            "--List-gap": "8px",
            mb: 2,
          }}
        >
          <ListItem>
            <ListItemButton>
              <SettingsRoundedIcon />
              Settings
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
      <Divider />
    </Sheet>
  );
}
