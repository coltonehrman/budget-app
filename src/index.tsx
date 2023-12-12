import CssBaseline from "@mui/joy/CssBaseline";
import { CssVarsProvider } from "@mui/joy/styles";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "@fontsource/inter";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const node = (document.getElementById("root") ?? document.body) as Element;

ReactDOM.createRoot(node).render(
  <RouterProvider
    router={createBrowserRouter([
      {
        path: "*",
        element: (
          <CssVarsProvider>
            {/* must be used under CssVarsProvider */}
            <CssBaseline />
            <App />

            {/* The rest of your application */}
          </CssVarsProvider>
        ),
      },
    ])}
  />,
);
