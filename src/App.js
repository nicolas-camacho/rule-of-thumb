import React from "react";
import { ThemeProvider } from "styled-components";

import {theme, GlobalStyle, CenteredLayout} from "./ui";

import {
    Navbar,
    Header,
    TipTop,
    TipBottom,
    Footer,
    Rulings
} from "./components";

export default () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Navbar />
            <Header />
            <CenteredLayout>
                <TipTop />
                <Rulings />
                <TipBottom />
                <hr />
                <Footer />
            </CenteredLayout>
        </ThemeProvider>
    )
}