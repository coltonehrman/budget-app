import Box from "@mui/joy/Box";
import React from "react";
import { Route, Routes } from "react-router-dom";
import BudgetDashboard from "./budget/BudgetDashboard";
import Sidebar from "./Sidebar";
import AssetDashboard from "./assets/AssetDashboard";
import AccountDashboard from "./accounts/AccountsDashboard";
import LoanDashboard from "./loans/LoanDashboard";

export default function App(): JSX.Element {
  return (
    <Box sx={{ display: "flex", minHeight: "100dvh", overflow: "scroll" }}>
      <Sidebar />
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
          <Route path="/budget" element={<BudgetDashboard />} />
          <Route path="/assets" element={<AssetDashboard />} />
          <Route path="/accounts" element={<AccountDashboard />} />
          <Route path="/loans" element={<LoanDashboard />} />
        </Routes>
      </Box>
    </Box>
  );
}
