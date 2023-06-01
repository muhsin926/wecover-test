import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { ContextProvider } from "./contexts/CommonContext.jsx";
import { ThemeProvider } from "@mui/material/styles";
import "./index.css";
import { theme } from "./theme/muiTheme.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ContextProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <App />
        </LocalizationProvider>
      </ContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
