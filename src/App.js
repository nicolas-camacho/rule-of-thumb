import React from "react";
import { ThemeProvider } from "styled-components";

import {theme, GlobalStyle} from "./ui";

import { StoreProvider } from "./store";
import {
    Navbar,
    Header,
} from "./components";

export default () => {
    return (
        <StoreProvider>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Navbar />
                <Header />
            </ThemeProvider>
        </StoreProvider>
    )
}