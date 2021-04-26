import React from "react";
import { ThemeProvider } from "styled-components";

import {theme, GlobalStyle, CenteredLayout} from "./ui";

import { StoreProvider } from "./store";
import {
    Navbar,
    Header,
    TipTop,
    TipBottom,
    Footer
} from "./components";

export default () => {
    return (
        <StoreProvider>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Navbar />
                <Header />
                <CenteredLayout>
                    <TipTop />
                    <TipBottom />
                    <hr />
                    <Footer />
                </CenteredLayout>
            </ThemeProvider>
        </StoreProvider>
    )
}