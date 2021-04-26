import React from "react";
import { ThemeProvider } from "styled-components";

import {theme, GlobalStyle} from "./ui";

import { StoreProvider } from "./store";
import {
    Navbar,
    Header,
    TipTop,
    TipBottom
} from "./components";

export default () => {
    return (
        <StoreProvider>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Navbar />
                <Header />
                <TipTop />
                <TipBottom />
            </ThemeProvider>
        </StoreProvider>
    )
}