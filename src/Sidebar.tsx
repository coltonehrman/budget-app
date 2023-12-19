import { AttachMoneyOutlined, Home } from "@mui/icons-material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import WalletIcon from "@mui/icons-material/Wallet";
import Box from "@mui/joy/Box";
import Chip from "@mui/joy/Chip";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import ListItemContent from "@mui/joy/ListItemContent";
import Typography from "@mui/joy/Typography";
import React, { useContext } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Store } from "./store";

export default function Sidebar(): JSX.Element {
  const { pathname } = useLocation();
  const { accounts, assets, budget, loans } = useContext(Store);

  return (
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
  );
}
