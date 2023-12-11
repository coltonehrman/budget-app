import CssBaseline from "@mui/joy/CssBaseline";
import { CssVarsProvider } from "@mui/joy/styles";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "@fontsource/inter";

const node = (document.getElementById("root") ?? document.body) as Element;

ReactDOM.createRoot(node).render(
  <CssVarsProvider>
    {/* must be used under CssVarsProvider */}
    <CssBaseline />
    <App />

    {/* The rest of your application */}
  </CssVarsProvider>,
);
