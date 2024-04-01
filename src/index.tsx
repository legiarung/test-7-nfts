import React from "react";
import { createRoot } from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "./styles/globals.css";
import { AppRoutes } from "./app/routing/AppRoutes";
import { BrowserRouter } from "react-router-dom";
import { PUBLIC_URL } from "./app/constants";
import "./assets/scss/index.scss";
import { ChakraProvider } from '@chakra-ui/react'
import { chakraCustomTheme } from "./chakra-ui/theme";
import { I18nProvider } from "./i18/i18Provider";
import { I18nContextProvider } from "./i18/I18nContext";


// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
    <>

        <BrowserRouter basename={PUBLIC_URL}>
            <I18nContextProvider>
                <I18nProvider>
                    <ChakraProvider theme={chakraCustomTheme} >
                        <AppRoutes />
                    </ChakraProvider>
                </I18nProvider>
            </I18nContextProvider>

        </BrowserRouter>
    </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
