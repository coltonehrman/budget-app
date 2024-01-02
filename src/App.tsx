import { Menu } from "@mui/icons-material";
import Box from "@mui/joy/Box";
import { Fab } from "@mui/material";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import DesktopSidebar from "./DesktopSidebar";
import MobileSidebar from "./MobileSidebar";
import AccountDashboard from "./accounts/AccountsDashboard";
import AssetDashboard from "./assets/AssetDashboard";
import BudgetDashboard from "./budget/BudgetDashboard";
import MainDashboard from "./dashboard/MainDashboard";
import LoanDashboard from "./loans/LoanDashboard";
import { StoreProvider } from "./store";
import IncomeDashboard from "./income/IncomeDashboard";
import ExpensesDashboard from "./expenses/ExpensesDashboard";

export default function App(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StoreProvider>
      <Box sx={{ display: "flex", minHeight: "100dvh", overflow: "scroll" }}>
        <DesktopSidebar />
        <MobileSidebar
          isOpen={isOpen}
          toggle={() => {
            setIsOpen(!isOpen);
          }}
          close={() => {
            setIsOpen(false);
          }}
        />
        <Fab
          sx={{
            position: "fixed",
            bottom: 10,
            right: 10,
            backgroundColor: "#fff",
          }}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <Menu />
        </Fab>
        <Box
          component="main"
          sx={{
            px: { xs: 2, md: 6 },
            pt: {
              xs: "calc(12px + var(--Header-height))",
              sm: "calc(12px + var(--Header-height))",
              md: 3,
            },
            pb: { xs: 2, sm: 2, md: 3 },
            flex: 5,
            display: "flex",
            flexDirection: "column",
            minWidth: 0,
            height: "100dvh",
            gap: 1,
          }}
        >
          <Routes>
            <Route path="/" element={<MainDashboard />} />
            <Route path="/income" element={<IncomeDashboard />} />
            <Route path="/expenses" element={<ExpensesDashboard />} />
            <Route path="/accounts" element={<AccountDashboard />} />
            <Route path="/assets" element={<AssetDashboard />} />
            <Route path="/budget" element={<BudgetDashboard />} />
            <Route path="/loans" element={<LoanDashboard />} />
          </Routes>
        </Box>
      </Box>
    </StoreProvider>
  );
}
