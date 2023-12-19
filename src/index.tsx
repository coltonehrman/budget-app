import "@fontsource/inter";
import { CssVarsProvider as JoyCssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {
  THEME_ID as MATERIAL_THEME_ID,
  Experimental_CssVarsProvider as MaterialCssVarsProvider,
  experimental_extendTheme as materialExtendTheme,
} from "@mui/material/styles";
import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";

const materialTheme = materialExtendTheme();

const node = (document.getElementById("root") ?? document.body) as Element;

ReactDOM.createRoot(node).render(
  <HashRouter>
    <MaterialCssVarsProvider theme={{ [MATERIAL_THEME_ID]: materialTheme }}>
      <JoyCssVarsProvider>
        <CssBaseline enableColorScheme />
        <App />
      </JoyCssVarsProvider>
    </MaterialCssVarsProvider>
  </HashRouter>,
);
