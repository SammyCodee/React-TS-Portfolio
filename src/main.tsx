import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "@fontsource/rubik-iso";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../src/colors/theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </Provider>
    </React.StrictMode>
);
